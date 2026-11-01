import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { ArrowUpRight } from "lucide-react";
import useTypewriter from "../hooks/useTypewriter";
import Reveal from "./Reveal";

const roles = ["Front-End Developer", "Web Developer"];

const socials = [
  { label: "GitHub", href: "#", icon: <FaGithub /> },
  { label: "LinkedIn", href: "#", icon: <FaLinkedinIn /> },
  { label: "Instagram", href: "#", icon: <FaInstagram /> },
];

const Hero = () => {
  const role = useTypewriter(roles);

  return (
    <section id="home">
      <div className="mx-auto grid max-w-[1296px] items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-0 lg:py-0 xl:px-0">
        {/* Kiri: teks */}
        <Reveal
          direction="left"
          className="flex flex-col gap-7 lg:min-h-[720px] lg:justify-center lg:border-r lg:border-divider lg:pr-12"
        >
          <h1 className="text-5xl font-bold leading-tight sm:text-6xl">
            Halo <span aria-hidden="true">👋</span> I&apos;m Defri Prasetyo
          </h1>

          <div className="w-fit rounded-sm border border-fg px-3 py-2 text-3xl font-semibold sm:text-4xl">
            {role}
            <span className="ml-1 inline-block h-8 w-0.5 translate-y-1 animate-blink bg-fg" />
          </div>

          <p className="max-w-lg text-lg leading-8 text-muted">
            [Tulis 2 sampai 3 kalimat tentang dirimu di sini.]
          </p>

          <div className="flex flex-wrap items-center gap-4">
            {/* Tombol miring */}
            <a href="#projects" className="group flex items-stretch font-semibold">
              <span
                className="bg-linear-to-r from-brand to-brand-light py-4 pl-8 pr-10 text-white"
                style={{ clipPath: "polygon(0 0, 100% 0, 85% 100%, 0 100%)" }}
              >
                View Projects
              </span>
              <span
                className="-ml-4 flex items-center bg-sun px-6 text-black transition group-hover:bg-fg group-hover:text-ink"
                style={{ clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0 100%)" }}
              >
                <ArrowUpRight size={18} className="ml-2" />
              </span>
            </a>

            {/* Ikon sosial */}
            <div className="flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-panel transition hover:bg-brand hover:text-white"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Kanan: foto dalam kartu kuning */}
        <Reveal
          direction="right"
          delay={200}
          className="flex justify-center lg:justify-end lg:pl-12"
        >
          <div className="relative mt-16 w-full max-w-[548px]">
            <div className="relative aspect-[548/555] overflow-hidden rounded-3xl bg-sun">
              <img
                src="/profile.jpg"
                alt="Foto Defri Prasetyo"
                className="absolute inset-0 h-full w-full object-cover object-top"
              />
              {/* Garis diagonal di pojok kanan atas */}
              <div className="absolute -right-10 top-8 h-5 w-48 rotate-45 bg-ink" />
            </div>

            {/* Bintang dekorasi (melayang) */}
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="absolute -left-2 -top-14 h-24 w-24 text-brand-light motion-safe:animate-float"
            >
              <path
                fill="currentColor"
                d="M12 0c.8 6.5 4.5 10.2 12 12-7.5 1.8-11.2 5.5-12 12-.8-6.5-4.5-10.2-12-12C7.5 10.2 11.2 6.5 12 0z"
              />
            </svg>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Hero;