import { useEffect, useRef, useState } from "react";

const hiddenStyle = {
  up: "translate-y-8",
  left: "-translate-x-8",
  right: "translate-x-8",
};

export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  className = "",
}) {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`motion-safe:transition-all motion-safe:duration-700 ${
        show
          ? "translate-x-0 translate-y-0 opacity-100"
          : `opacity-0 ${hiddenStyle[direction]}`
      } ${className}`}
    >
      {children}
    </div>
  );
}