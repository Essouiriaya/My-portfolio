"use client";

import { motion } from "framer-motion";
import {
  Github, Linkedin, Mail, Download, Home, Code, BookOpen, Briefcase,
  Brain, Database, Wrench, Layers, Cpu, ExternalLink, ArrowUpRight, Sparkles,
} from "lucide-react";
import type { ReactNode } from "react";

const NAV = [
  { href: "#home", label: "Home", icon: Home },
  { href: "#about", label: "About", icon: Brain },
  { href: "#skills", label: "Skills", icon: Code },
  { href: "#projects", label: "Projects", icon: Briefcase },
  { href: "#experience", label: "Experience", icon: Layers },
  { href: "#education", label: "Education", icon: BookOpen },
  { href: "#contact", label: "Contact", icon: Mail },
] as const;

const SKILLS = [
  { icon: Code, title: "Programming", skills: ["Java", "Python", "PHP", "C", "SQL"] },
  { icon: Layers, title: "Frontend Development", skills: ["HTML", "CSS", "JavaScript", "Angular", "Tailwind CSS", "Bootstrap"] },
  { icon: Briefcase, title: "Backend Development", skills: ["Spring Boot", "Flask", "FastAPI", "Laravel", "REST APIs", "Java Servlets"] },
  { icon: Brain, title: "Artificial Intelligence", skills: ["Machine Learning", "Deep Learning", "NLP", "Pandas", "Scikit-learn"] },
  { icon: Database, title: "Data Engineering & Big Data", skills: ["Data Warehousing", "Data Lakes", "Apache Airflow", "Data Ingestion", "ETL Pipelines"] },
  { icon: Cpu, title: "Cloud, IoT & Cybersecurity", skills: ["Cloud Computing", "IoT", "Cybersecurity", "Secure Web Apps", "Linux Systems"] },
  { icon: Wrench, title: "DevOps & Tools", skills: ["Git", "Docker", "Linux", "Postman", "Maven", "Agile/Scrum"] },
  { icon: Sparkles, title: "Entrepreneurship & Soft Skills", skills: ["Startup mindset", "Business Model Canvas", "Innovation", "French", "English", "Analytical thinking", "Teamwork", "Communication"] },
];

const PROJECTS = [
  {
    title: "Intelligent ETL Pipeline for Job Market Data Analysis",
    problem: "Fragmented job market data and lack of real-time analytical insights",
    desc: "End-to-end Data Engineering architecture: multi-source job scraping, ETL orchestration with Apache Airflow, Lakehouse using Azure Data Lake, PostgreSQL warehouse in star schema, intelligent skill extraction with BERT-NER, clustering and recommendations, plus a Power BI dashboard and real-time web visualization.",
    tech: ["Docker", "Airflow", "PostgreSQL", "Azure Data Lake", "BERT-NER", "FAISS", "Power BI", "Flask"],
    github: "https://github.com/Essouiriaya/job_intelligent.git",
    featured: true,
  },
  {
    title: "Darija AI Translator — AI-Powered Translation Platform",
    problem: "Lack of effective solutions for translating Moroccan Darija into English",
    desc: "Full-stack translation platform for Darija ↔ English using Transformer models, Whisper speech recognition, EasyOCR, and a Flask app with auth and history. Trained on 86,000+ sentence pairs from MADAR and DODa datasets.",
    tech: ["PyTorch", "Hugging Face", "Whisper", "EasyOCR", "Flask", "NLP"],
    github: "https://github.com/Essouiriaya/darija_ai_project.git",
    featured: true,
  },
  {
    title: "Smart Home IoT Dashboard",
    problem: "Lack of real-time IoT monitoring and control",
    desc: "Cloud-based IoT system with real-time sensor simulation, data streaming, and bidirectional device control.",
    tech: ["Python", "Flask", "MQTT", "Angular"],
    github: "https://github.com/Essouiriaya/SmartHome-IoT.git",
  },
  {
    title: "Digitalization of Final Year Project Management (Odoo 16)",
    problem: "Manual and scattered management of final year projects",
    desc: "Complete Odoo 16 module that centralizes PFE data (students, supervisors, projects, companies) and automates the PFE lifecycle.",
    tech: ["Odoo 16", "Python", "XML", "PostgreSQL"],
    github: "https://github.com/Essouiriaya/GestionPFE.git",
  },
  {
    title: "HomeLyo — Home Services Platform",
    problem: "Manual and inefficient management of home services",
    desc: "Full-stack platform for booking and managing home services with secure REST APIs and admin dashboard.",
    tech: ["Spring Boot", "Angular", "MySQL"],
  },
  {
    title: "TASKLY — Project Management Tool",
    problem: "Poor collaboration and project tracking",
    desc: "Collaborative web tool for task and team management built with MVC architecture.",
    tech: ["Laravel", "PHP", "Bootstrap", "JavaScript"],
    github: "https://github.com/Essouiriaya/TasklyApp.git",
  },
  {
    title: "PomoNote",
    problem: "Need for efficient daily task management and focus",
    desc: "All-in-one productivity app with note-taking, an intelligent to-do list and a Pomodoro timer.",
    tech: ["PySide6", "Python", "MySQL", "SQLAlchemy", "PyMySQL"],
    github: "https://github.com/Essouiriaya/PomoNoteApp.git",
  },
  {
    title: "HealthMate — Digital Health Platform",
    problem: "Limited access to digital healthcare services",
    desc: "Healthcare platform including appointments, teleconsultation and a medical chatbot.",
    tech: ["Flask", "JavaScript", "HTML", "CSS"],
  },
];

const EXPERIENCE = [
  {
    title: "Web Developer Intern",
    company: "ENAF GROUP",
    domain: "Digitalization Systems",
    desc: "Developed web applications to digitalize client requests including repair, maintenance and product management. Built an admin dashboard and streamlined client workflows.",
    tech: ["Flask", "Python", "MySQL", "Bootstrap", "JavaScript"],
    website: "https://www.enaf.ma/",
  },
  {
    title: "Full Stack Developer Intern",
    company: "OSM S.A.R.L (Rabat)",
    domain: "Home Services Application",
    desc: "Built a home services application end-to-end: front-end interfaces with Angular and Bootstrap, back-end with Java Spring Boot, and secure RESTful APIs. Collaborated with the team to ship a performant, user-friendly experience.",
    tech: ["Java", "Spring Boot", "Angular", "Bootstrap", "MySQL", "Postman"],
  },
];

const EDUCATION = [
  { degree: "Engineering Degree", institution: "ENSA Al Hoceima", specialization: "Digital Transformation & AI", year: "2022 — Present" },
  { degree: "Preparatory Year — MIP (Math, CS, Physics)", institution: "FST Al Hoceima, Morocco", year: "2021 — 2022" },
  { degree: "Scientific Baccalaureate — Physical Sciences", institution: "Othman Ben Affan High School, Nador", year: "2020 — 2021" },
];

/* ---------- Building blocks ---------- */

function BackgroundFX() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-40 -left-40 h-[36rem] w-[36rem] rounded-full bg-[oklch(0.7_0.22_295/0.25)] blur-3xl animate-blob" />
      <div className="absolute top-1/3 -right-40 h-[34rem] w-[34rem] rounded-full bg-[oklch(0.82_0.16_200/0.22)] blur-3xl animate-blob [animation-delay:-6s]" />
      <div className="absolute bottom-0 left-1/3 h-[30rem] w-[30rem] rounded-full bg-[oklch(0.75_0.2_330/0.18)] blur-3xl animate-blob [animation-delay:-12s]" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
        }}
      />
    </div>
  );
}

function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="mx-auto w-full max-w-6xl px-6 py-24 sm:py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="mb-12 flex flex-col items-center text-center"
      >
        <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          {eyebrow}
        </span>
        <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
          <span className="text-gradient">{title}</span>
        </h2>
      </motion.div>
      {children}
    </section>
  );
}

function TechBadge({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-border bg-[oklch(0.22_0.045_270/0.6)] px-2.5 py-1 text-xs text-muted-foreground transition hover:border-primary/60 hover:text-foreground">
      {children}
    </span>
  );
}

function NavBar() {
  return (
    <nav className="fixed left-1/2 top-4 z-50 -translate-x-1/2">
      <div className="glass flex items-center gap-1 rounded-full px-2 py-2 shadow-card sm:gap-2">
        {NAV.map(({ href, label, icon: Icon }) => (
          <a
            key={href}
            href={href}
            aria-label={label}
            className="group relative grid h-9 w-9 place-items-center rounded-full text-muted-foreground transition hover:bg-[oklch(1_0_0/0.06)] hover:text-foreground sm:h-10 sm:w-10"
          >
            <Icon size={18} />
            <span className="pointer-events-none absolute top-full mt-2 whitespace-nowrap rounded-md bg-[oklch(0.16_0.04_270)] px-2 py-1 text-[10px] uppercase tracking-wider text-foreground opacity-0 shadow-card transition group-hover:opacity-100">
              {label}
            </span>
          </a>
        ))}
        <span className="mx-1 hidden h-6 w-px bg-border sm:block" />
        <a href="https://github.com/Essouiriaya" aria-label="GitHub" className="hidden h-10 w-10 place-items-center rounded-full text-muted-foreground transition hover:bg-[oklch(1_0_0/0.06)] hover:text-foreground sm:grid">
          <Github size={18} />
        </a>
        <a href="https://linkedin.com/in/aya-essouiri-935938282" aria-label="LinkedIn" className="hidden h-10 w-10 place-items-center rounded-full text-muted-foreground transition hover:bg-[oklch(1_0_0/0.06)] hover:text-foreground sm:grid">
          <Linkedin size={18} />
        </a>
      </div>
    </nav>
  );
}

/* ---------- Page ---------- */

export default function Portfolio() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <BackgroundFX />
      <NavBar />

      {/* HERO */}
      <section id="home" className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-border glass px-4 py-1.5 text-xs text-muted-foreground"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          Available for internships & PFE opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
        >
          <span className="text-gradient">Essouiri Aya</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-8 max-w-3xl text-base text-muted-foreground sm:text-lg md:text-xl"
        >
          Digital Transformation & AI Engineering Student · Full-Stack Developer
          <br className="hidden sm:block" />
          <span className="text-foreground/80">Building intelligent systems, IoT and data-driven applications.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="/Essouiri Aya CV.pdf"
            download
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition hover:-translate-y-0.5"
          >
            <Download size={16} /> Download CV
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full border border-border glass px-6 py-3 text-sm font-semibold text-foreground transition hover:border-primary/60"
          >
            <Mail size={16} /> Contact Me
            <ArrowUpRight size={14} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 flex items-center gap-6 text-muted-foreground"
        >
          <a href="https://github.com/Essouiriaya" className="transition hover:text-primary"><Github size={20} /></a>
          <a href="https://linkedin.com/in/aya-essouiri-935938282" className="transition hover:text-primary"><Linkedin size={20} /></a>
          <a href="mailto:essouiriaya96@gmail.com" className="transition hover:text-primary"><Mail size={20} /></a>
        </motion.div>
      </section>

      {/* ABOUT */}
      <Section id="about" eyebrow="About" title="A bit about me">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass shadow-card md:col-span-3 rounded-3xl p-8"
          >
            <p className="text-muted-foreground leading-relaxed">
              I am an Engineering student specializing in{" "}
              <strong className="text-foreground">Digital Transformation & AI</strong> at ENSA Al Hoceima,
              with a strong foundation in software engineering, full-stack development, IoT systems, and
              data-driven applications. I design and ship scalable solutions, integrate real-time IoT
              devices, and build intelligent systems to solve complex problems.
            </p>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              My stack spans Angular on the front-end, Spring Boot, Flask and REST APIs on the back-end,
              and MySQL / MongoDB on the data layer. I also work hands-on with AI and ML — predictive
              modeling, data analysis and automation.
            </p>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              My goal is to contribute to cutting-edge projects in AI, IoT and full-stack development,
              while continuously learning in intelligent systems and digital innovation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-2 space-y-4"
          >
            {[
              { k: "Problem solving", v: "Breaking complex problems into shippable pieces." },
              { k: "Team collaboration", v: "Building together, communicating clearly." },
              { k: "Autonomy & curiosity", v: "Self-driven, always exploring new tech." },
              { k: "Professional communication", v: "French · English — clear & concise." },
            ].map((it) => (
              <div key={it.k} className="glass shadow-card rounded-2xl p-5 transition hover:-translate-y-0.5">
                <div className="text-sm font-semibold text-foreground">{it.k}</div>
                <div className="mt-1 text-sm text-muted-foreground">{it.v}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* SKILLS */}
      <Section id="skills" eyebrow="Toolkit" title="Skills & Expertise">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SKILLS.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ y: -6 }}
              className="group relative glass shadow-card rounded-2xl p-6 transition hover:border-primary/60"
            >
              <div className="mb-4 inline-grid h-11 w-11 place-items-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">
                <s.icon size={20} />
              </div>
              <h3 className="text-base font-semibold">{s.title}</h3>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {s.skills.map((sk) => <TechBadge key={sk}>{sk}</TechBadge>)}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* PROJECTS */}
      <Section id="projects" eyebrow="Work" title="Selected Projects">
        <div className="grid gap-6 md:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: (i % 2) * 0.08 }}
              whileHover={{ y: -6 }}
              className={`group relative overflow-hidden rounded-3xl glass shadow-card p-7 transition hover:border-primary/60 ${p.featured ? "md:col-span-2" : ""}`}
            >
              <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[oklch(0.7_0.22_295/0.18)] blur-3xl opacity-0 transition group-hover:opacity-100" />
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-semibold leading-snug sm:text-2xl">{p.title}</h3>
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub repository"
                    className="shrink-0 rounded-full border border-border p-2 text-muted-foreground transition hover:border-primary/60 hover:text-primary"
                  >
                    <Github size={16} />
                  </a>
                )}
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                <span className="font-medium text-foreground/80">Problem · </span>{p.problem}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {p.tech.map((t) => <TechBadge key={t}>{t}</TechBadge>)}
              </div>
            </motion.article>
          ))}
        </div>
      </Section>

      {/* EXPERIENCE */}
      <Section id="experience" eyebrow="Career" title="Experience">
        <div className="relative mx-auto max-w-4xl">
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-accent/40 to-transparent md:left-1/2" />
          <div className="space-y-8">
            {EXPERIENCE.map((e, i) => (
              <motion.div
                key={e.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="relative pl-12 md:pl-0"
              >
                <span className="absolute left-2 top-6 grid h-5 w-5 place-items-center rounded-full bg-gradient-primary shadow-glow md:left-1/2 md:-translate-x-1/2">
                  <span className="h-2 w-2 rounded-full bg-background" />
                </span>
                <div className={`md:w-1/2 ${i % 2 ? "md:ml-auto md:pl-10" : "md:pr-10"}`}>
                  <div className="glass shadow-card rounded-2xl p-6 transition hover:-translate-y-0.5">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="text-lg font-semibold">{e.title}</h3>
                      {e.website && (
                        <a href={e.website} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-xs text-primary hover:underline">
                          Visit <ExternalLink size={12} />
                        </a>
                      )}
                    </div>
                    <div className="text-sm text-primary">{e.company} · <span className="text-muted-foreground">{e.domain}</span></div>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{e.desc}</p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {e.tech.map((t) => <TechBadge key={t}>{t}</TechBadge>)}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* EDUCATION */}
      <Section id="education" eyebrow="Background" title="Education">
        <div className="relative mx-auto max-w-4xl">
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-accent/40 to-transparent md:left-1/2" />
          <div className="space-y-8">
            {EDUCATION.map((ed, i) => (
              <motion.div
                key={ed.degree}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="relative pl-12 md:pl-0"
              >
                <span className="absolute left-2 top-6 grid h-5 w-5 place-items-center rounded-full bg-gradient-primary shadow-glow md:left-1/2 md:-translate-x-1/2">
                  <span className="h-2 w-2 rounded-full bg-background" />
                </span>
                <div className={`md:w-1/2 ${i % 2 ? "md:ml-auto md:pl-10" : "md:pr-10"}`}>
                  <div className="glass shadow-card rounded-2xl p-6 transition hover:-translate-y-0.5">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="text-lg font-semibold">{ed.degree}</h3>
                      <span className="inline-flex items-center gap-1 rounded-full border border-border px-2 py-0.5 text-xs text-muted-foreground">
                        <BookOpen size={12} /> {ed.year}
                      </span>
                    </div>
                    <div className="text-sm text-primary">{ed.institution}</div>
                    {ed.specialization && (
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        <span className="font-medium text-foreground/80">Specialization · </span>
                        {ed.specialization}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" eyebrow="Get in touch" title="Let's build something">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl glass shadow-card p-10 text-center"
        >
          <div className="pointer-events-none absolute -inset-1 -z-10 bg-gradient-soft blur-2xl" />
          <p className="mx-auto max-w-xl text-muted-foreground">
            Open to internships, PFA opportunities, PFE opportunities, and collaborations. Reach out — I usually reply within a day.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:essouiriaya96@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition hover:-translate-y-0.5"
            >
              <Mail size={16} /> essouiriaya96@gmail.com
            </a>
            <a
              href="https://github.com/Essouiriaya"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium text-foreground transition hover:border-primary/60"
            >
              <Github size={16} /> GitHub
            </a>
            <a
              href="https://linkedin.com/in/aya-essouiri-935938282"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium text-foreground transition hover:border-primary/60"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
          </div>
        </motion.div>
      </Section>

      <footer className="border-t border-border py-8 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Aya Essouiri — Engineering portfolio. Crafted with care.
      </footer>
    </div>
  );
}