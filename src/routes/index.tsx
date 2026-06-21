import { createFileRoute } from "@tanstack/react-router";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Download,
  ArrowRight,
  Sparkles,
  Smartphone,
  Database,
  Code2,
  Wrench,
  Layers,
  Calendar,
  CheckCircle2,
  Flame,
  Bot,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Divya Tyagi — Flutter & AI/ML Developer" },
      {
        name: "description",
        content:
          "Portfolio of Divya Tyagi: Flutter developer, Firebase architect, and AI/ML enthusiast building intelligent mobile experiences.",
      },
    ],
  }),
  component: Portfolio,
});

const NAV = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

function Portfolio() {
  return (
    <div className="relative min-h-screen">
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Achievements />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-4 z-50 mx-auto flex max-w-6xl items-center justify-between rounded-full px-6 py-3 glass mt-4 mx-4 md:mx-auto">
      <a href="#home" className="flex items-center gap-2 font-display font-bold">
        <span className="grid h-9 w-9 place-items-center rounded-full text-sm font-bold text-white" style={{ background: "var(--gradient-hero)" }}>
          DT
        </span>
        <span className="hidden sm:inline">Divya Tyagi</span>
      </a>
      <nav className="hidden items-center gap-1 md:flex">
        {NAV.map((n) => (
          <a
            key={n.href}
            href={n.href}
            className="rounded-full px-4 py-2 text-sm text-muted-foreground transition hover:bg-white/5 hover:text-foreground"
          >
            {n.label}
          </a>
        ))}
      </nav>
      <a href="#contact" className="btn-ghost-glow text-sm">
        <Sparkles size={14} /> Hire me
      </a>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative mx-auto max-w-6xl px-6 pt-20 pb-32 md:pt-32">
      <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
        <div className="animate-fade-up space-y-7">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#80ffdb]/30 bg-[#80ffdb]/5 px-4 py-1.5 text-xs font-medium text-[#80ffdb]">
            <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-[#80ffdb]" />
            Open to opportunities
          </span>

          <h1 className="font-display text-5xl font-bold leading-[0.95] tracking-tight md:text-7xl">
            <span className="block text-muted-foreground text-2xl md:text-3xl font-normal mb-3">Hi, I'm</span>
            <span className="text-gradient">Divya Tyagi</span>
          </h1>

          <div className="flex flex-wrap gap-2 text-sm">
            {["Flutter Developer", "Firebase Architect", "AI & ML Enthusiast"].map((r, i) => (
              <span
                key={r}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-muted-foreground"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {r}
              </span>
            ))}
          </div>

          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
            Building intelligent mobile experiences with{" "}
            <span className="text-gradient font-semibold">Flutter, Firebase, and Machine Learning.</span>{" "}
            Production-ready apps, AI-powered solutions, and scalable backend architectures.
          </p>

          <div className="flex flex-wrap gap-3">
            <a href="#projects" className="btn-primary text-sm">
              View Projects <ArrowRight size={16} />
            </a>
            <a href="#contact" className="btn-ghost-glow text-sm">
              <Mail size={16} /> Get in touch
            </a>
            <a href="#" className="btn-ghost-glow text-sm">
              <Download size={16} /> Resume
            </a>
          </div>

          <div className="grid grid-cols-3 gap-6 border-t border-white/10 pt-6 max-w-md">
            <Stat value="2+" label="Internships" />
            <Stat value="2+" label="Projects" />
            <Stat value="95%" label="AI Accuracy" />
          </div>
        </div>

        {/* Visual side */}
        <HeroVisual />
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-display text-3xl font-bold text-gradient">{value}</div>
      <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{label}</div>
    </div>
  );
}

function HeroVisual() {
  const orbit = [
    { label: "F", color: "#5390d9", angle: 0, r: 150 },
    { label: "🔥", color: "#7400b8", angle: 90, r: 150 },
    { label: "🤖", color: "#48bfe3", angle: 180, r: 150 },
    { label: "D", color: "#80ffdb", angle: 270, r: 150 },
  ];
  return (
    <div className="relative mx-auto h-[460px] w-full max-w-md animate-fade-up" style={{ animationDelay: "0.3s" }}>
      {/* Outer ring */}
      <div className="absolute inset-8 rounded-full border border-dashed border-white/10" />
      <div className="absolute inset-20 rounded-full border border-dashed border-white/15" />

      {/* Orbit icons */}
      {orbit.map((o, i) => {
        const rad = (o.angle * Math.PI) / 180;
        const x = Math.cos(rad) * o.r;
        const y = Math.sin(rad) * o.r;
        return (
          <div
            key={i}
            className="absolute left-1/2 top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-2xl glass animate-float"
            style={{
              transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
              animationDelay: `${i * 0.4}s`,
              boxShadow: `0 0 30px ${o.color}55`,
            }}
          >
            <span className="font-bold" style={{ color: o.color }}>{o.label}</span>
          </div>
        );
      })}

      {/* Center "profile" */}
      <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full p-1 glow-ring" style={{ background: "var(--gradient-hero)" }}>
        <div className="grid h-full w-full place-items-center rounded-full bg-background/80 backdrop-blur">
          <div className="text-center">
            <div className="font-display text-5xl font-bold text-gradient">DT</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-1">Flutter · AI</div>
          </div>
        </div>
      </div>

      {/* Floating tech card */}
      <div className="absolute -bottom-2 -left-4 w-64 rounded-2xl glass p-4 animate-float" style={{ animationDelay: "0.6s" }}>
        <div className="mb-3 flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-[#80ffdb]" />
          <span className="h-2 w-2 rounded-full bg-[#48bfe3]" />
          <span className="h-2 w-2 rounded-full bg-[#7400b8]" />
          <span className="ml-2 text-xs font-medium text-muted-foreground">Tech Stack</span>
        </div>
        <div className="space-y-2">
          {[
            ["Flutter", 95],
            ["Firebase", 90],
            ["Riverpod", 85],
            ["TF Lite", 80],
          ].map(([k, v]) => (
            <div key={k as string} className="flex items-center gap-2 text-xs">
              <span className="w-16 text-muted-foreground">{k}</span>
              <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/10">
                <div className="h-full rounded-full" style={{ width: `${v}%`, background: "var(--gradient-cool)" }} />
              </div>
              <span className="w-8 text-right text-gradient font-semibold">{v}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* Status card */}
      <div className="absolute -top-2 -right-2 flex items-center gap-3 rounded-2xl glass px-4 py-3 animate-float" style={{ animationDelay: "0.9s" }}>
        <span className="h-2.5 w-2.5 animate-pulse-soft rounded-full bg-[#80ffdb] shadow-[0_0_10px_#80ffdb]" />
        <div>
          <div className="text-xs font-semibold">Currently Working</div>
          <div className="text-[10px] text-muted-foreground">WebIsdom · Flutter Intern</div>
        </div>
      </div>
    </div>
  );
}

function SectionHeader({ tag, title, sub }: { tag: string; title: string; sub?: string }) {
  return (
    <div className="mx-auto mb-14 max-w-2xl text-center">
      <span className="inline-block rounded-full border border-[#48bfe3]/30 bg-[#48bfe3]/5 px-4 py-1 text-xs font-medium uppercase tracking-widest text-[#56cfe1]">
        {tag}
      </span>
      <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">
        <span className="text-gradient">{title}</span>
      </h2>
      {sub && <p className="mt-3 text-muted-foreground">{sub}</p>}
    </div>
  );
}

function About() {
  const tags = ["🎯 Problem Solver", "📱 Mobile First", "🤖 AI Enthusiast", "🔥 Firebase Expert", "⚡ Performance", "🎨 UI/UX Conscious"];
  const foundations = [
    { icon: "🧠", label: "Data Structures & Algorithms" },
    { icon: "🔷", label: "Object-Oriented Programming" },
    { icon: "📱", label: "Mobile Development" },
    { icon: "🔥", label: "Firebase" },
    { icon: "🤖", label: "Machine Learning" },
    { icon: "🌐", label: "REST APIs" },
    { icon: "⚙️", label: "Software Engineering" },
    { icon: "🗄️", label: "Database Systems" },
  ];
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeader tag="Who I Am" title="About Me" sub="Building the intersection of beautiful UI and intelligent systems" />
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl glass p-8">
          <p className="text-lg leading-relaxed text-foreground/90">
            I'm a <span className="text-gradient font-semibold">B.Tech Computer Science (AIML)</span> student
            graduating in 2026, with hands-on internship experience in mobile app development.
          </p>
          <p className="mt-4 text-foreground/80 leading-relaxed">
            Passionate about creating impactful products that combine{" "}
            <span className="text-gradient font-semibold">beautiful Flutter experiences</span> with{" "}
            <span className="text-gradient font-semibold">Artificial Intelligence</span>. I love turning complex
            problems into elegant, user-friendly applications.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {tags.map((t) => (
              <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-foreground/80">
                {t}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-4 font-display text-xl font-semibold">Strong foundations in</h3>
          <div className="grid grid-cols-2 gap-3">
            {foundations.map((f) => (
              <div key={f.label} className="flex items-center gap-3 rounded-2xl glass p-4 transition hover:border-[#80ffdb]/40">
                <span className="text-xl">{f.icon}</span>
                <span className="text-sm font-medium">{f.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  const items = [
    {
      current: true,
      title: "App Developer Intern",
      company: "WebIsdom",
      period: "May 2026 – Present",
      bullets: [
        "Flutter application development for production-ready apps",
        "API integrations with robust error handling",
        "Pixel-perfect UI implementation from Figma designs",
        "Bug fixing and performance optimization",
        "Agile collaboration in sprint-based workflow",
      ],
      tags: ["Flutter", "Dart", "REST APIs", "Agile"],
    },
    {
      current: false,
      title: "Application Developer Intern",
      company: "Bhoomi IT Services",
      period: "Jul 2025 – Aug 2025",
      bullets: [
        "Resolved 20+ bugs in production mobile application",
        "REST API debugging and performance optimization",
        "SQL query optimization improving data retrieval",
        "Delivered features within Agile sprint cycles",
      ],
      tags: ["Bug Fixing", "REST APIs", "SQL", "Agile"],
    },
  ];
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeader tag="Work History" title="Experience" sub="Building real-world impact through professional internships" />
      <div className="relative space-y-8">
        <div aria-hidden className="absolute left-4 top-2 bottom-2 w-px md:left-6" style={{ background: "linear-gradient(to bottom, #7400b8, #48bfe3, #80ffdb)" }} />
        {items.map((it) => (
          <div key={it.company} className="relative pl-12 md:pl-16">
            <div className="absolute left-2 top-6 h-5 w-5 rounded-full border-2 border-background md:left-4" style={{ background: it.current ? "var(--gradient-hero)" : "#5e60ce", boxShadow: it.current ? "0 0 24px #48bfe3" : undefined }} />
            <div className="rounded-3xl glass p-6 md:p-8">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  {it.current && (
                    <span className="mb-2 inline-block rounded-full bg-[#80ffdb]/15 px-3 py-0.5 text-xs font-semibold text-[#80ffdb]">
                      Current
                    </span>
                  )}
                  <h3 className="font-display text-xl font-bold">{it.title}</h3>
                  <p className="text-gradient font-semibold">{it.company}</p>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted-foreground">
                  <Calendar size={12} /> {it.period}
                </div>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-foreground/85">
                {it.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[#64dfdf]" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {it.tags.map((t) => (
                  <span key={t} className="rounded-full border border-[#48bfe3]/20 bg-[#48bfe3]/5 px-3 py-1 text-xs text-[#56cfe1]">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  const projects = [
    {
      category: "Spiritual Tech · Built solo at WebIsdom",
      title: "Namandarshan",
      sub: "Temple Booking & Spiritual Services Platform",
      desc: "Temple bookings, puja services, live darshan streaming, prasadam ordering, and yatra management — shipped solo as founding Flutter developer, from zero codebase to a published app across 100+ verified sacred sites.",
      metrics: [
        ["100+", "Sacred Sites"],
        ["10+", "Screens"],
        ["Live", "Google Play"],
      ],
      tech: ["Flutter", "Firebase", "Riverpod", "Socket.IO", "FCM", "REST APIs"],
      badge: "Live on Play Store",
      gradient: "linear-gradient(135deg,#7400b8,#48bfe3)",
      image: "/banner.png",
    },
    {
      category: "AI / ML Attendance System",
      title: "Mark Easy",
      sub: "Face Recognition Attendance, On-Device",
      desc: "Automates attendance for 100+ users with MobileFaceNet (TFLite) and cosine similarity matching — privacy-first, storing 128-dim face embeddings instead of raw images.",
      metrics: [
        ["95%", "Accuracy"],
        ["80%", "Time Saved"],
        ["<300ms", "Latency"],
      ],
      tech: ["Flutter", "Firebase", "TensorFlow Lite", "ML Kit"],
      badge: undefined,
      gradient: "linear-gradient(135deg,#5e60ce,#80ffdb)",
      image: "/mark_easy_project_promo.png",
    },
  ];
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeader tag="My Work" title="Featured Projects" sub="Two Flutter apps, built end-to-end — from architecture to production" />
      <div className="space-y-8">
        {projects.map((p, i) => (
          <article key={p.title} className="grid items-center gap-8 lg:grid-cols-2">
            <div className={`rounded-3xl glass p-8 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                <span className="text-muted-foreground uppercase tracking-wider">{p.category}</span>
                {p.badge && (
                  <span className="rounded-full bg-[#80ffdb]/15 px-3 py-1 font-semibold text-[#80ffdb]">
                    {p.badge}
                  </span>
                )}
              </div>
              <h3 className="mt-3 font-display text-3xl font-bold">{p.title}</h3>
              <p className="text-gradient font-semibold">{p.sub}</p>
              <p className="mt-4 text-foreground/80 leading-relaxed">{p.desc}</p>

              <div className="mt-6 grid grid-cols-3 gap-3">
                {p.metrics.map(([v, l]) => (
                  <div key={l} className="rounded-2xl border border-white/10 bg-white/5 p-3 text-center">
                    <div className="font-display text-xl font-bold text-gradient">{v}</div>
                    <div className="mt-0.5 text-[10px] uppercase tracking-wider text-muted-foreground">{l}</div>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className={`relative overflow-hidden rounded-3xl glass p-2 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
              {p.image ? (
                <img src={p.image} alt={p.title} className="w-full h-auto rounded-2xl" />
              ) : (
                <div className="grid aspect-[4/5] w-full place-items-center rounded-2xl text-white" style={{ background: p.gradient }}>
                  <div className="text-center px-8">
                    <div className="mb-3 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 backdrop-blur">
                      {i === 0 ? <Smartphone size={32} /> : <Bot size={32} />}
                    </div>
                    <div className="font-display text-3xl font-bold">{p.title}</div>
                    <div className="mt-1 text-sm opacity-90">{p.sub}</div>
                  </div>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  const cats = [
    { icon: <Smartphone size={20} />, title: "Mobile Development", chips: ["Flutter", "Dart", "Android", "Firebase"] },
    { icon: <Database size={20} />, title: "Backend & APIs", chips: ["REST APIs", "Firebase Auth", "Firestore", "Realtime DB"] },
    { icon: <Bot size={20} />, title: "AI / Machine Learning", chips: ["TensorFlow Lite", "MobileFaceNet", "ML Kit", "Computer Vision"] },
    { icon: <Code2 size={20} />, title: "Programming Languages", chips: ["Dart", "Java", "Python", "SQL"] },
    { icon: <Wrench size={20} />, title: "Tools & Workflow", chips: ["Git", "GitHub", "Android Studio", "Postman", "Agile"] },
    { icon: <Layers size={20} />, title: "Architecture & State", chips: ["Riverpod", "Clean Architecture", "MVVM", "OOP"] },
  ];
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeader tag="Expertise" title="Skills & Technologies" sub="The tools I use to bring ideas to life" />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {cats.map((c) => (
          <div key={c.title} className="rounded-3xl glass p-6 transition hover:border-[#80ffdb]/30 hover:-translate-y-1">
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl text-white" style={{ background: "var(--gradient-hero)" }}>
              {c.icon}
            </div>
            <h3 className="font-display text-lg font-semibold">{c.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {c.chips.map((chip) => (
                <span key={chip} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs">
                  {chip}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Achievements() {
  const items = [
    { icon: "🏆", title: "Young Turks 2025", org: "Naukri Campus", desc: "Recognized among India's top emerging tech talent in the 2025 cohort" },
    { icon: "📊", title: "98.89 Percentile", org: "National Ranking", desc: "Achieved exceptional percentile rank in national-level assessment", featured: true },
    { icon: "🎓", title: "Virtual Internship", org: "Deloitte", desc: "Completed technology-focused virtual internship program" },
    { icon: "✅", title: "Java Certification", org: "HackerRank", desc: "Certified in Java with demonstrated problem-solving skills" },
    { icon: "🤖", title: "AI Aware Badge", org: "AI Literacy Program", desc: "Earned badge for foundational AI knowledge and awareness" },
  ];
  return (
    <section id="achievements" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeader tag="Recognition" title="Achievements" sub="Milestones earned through dedication" />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {items.map((a) => (
          <div
            key={a.title}
            className={`relative overflow-hidden rounded-3xl glass p-6 ${a.featured ? "md:col-span-2 lg:row-span-2" : ""}`}
            style={a.featured ? { background: "linear-gradient(135deg, rgba(116,0,184,0.18), rgba(72,191,227,0.12))" } : undefined}
          >
            <div className="text-3xl">{a.icon}</div>
            <h3 className="mt-3 font-display text-lg font-bold">{a.title}</h3>
            <p className="text-gradient text-sm font-semibold">{a.org}</p>
            <p className="mt-2 text-sm text-muted-foreground">{a.desc}</p>
            {a.featured && (
              <div className="mt-6 font-display text-6xl font-bold text-gradient">98.89<span className="text-xl ml-1">%ile</span></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

function Education() {
  const courses = [
    "Data Structures & Algorithms",
    "Object-Oriented Programming",
    "Database Management Systems",
    "Operating Systems",
    "Computer Networks",
    "Artificial Intelligence",
    "Machine Learning",
    "Software Engineering",
  ];
  return (
    <section id="education" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeader tag="Academic Background" title="Education" />
      <div className="rounded-3xl glass p-8">
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div className="flex items-start gap-5">
            <div className="grid h-16 w-16 place-items-center rounded-2xl font-display font-bold text-white text-xl" style={{ background: "var(--gradient-hero)" }}>
              RD
            </div>
            <div>
              <h3 className="font-display text-2xl font-bold">R.D. Engineering College</h3>
              <p className="text-muted-foreground">Bachelor of Technology</p>
              <p className="text-foreground/80">
                Computer Science <span className="text-gradient font-semibold">(AI & Machine Learning)</span>
              </p>
              <span className="mt-2 inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs">
                2022 – 2026
              </span>
            </div>
          </div>
          <div className="flex gap-3">
            <ScoreBadge label="Overall CGPA" value="8.11" />
            <ScoreBadge label="Final Sem SGPA" value="9.25" />
          </div>
        </div>

        <div className="mt-8">
          <h4 className="mb-3 text-sm uppercase tracking-wider text-muted-foreground">Relevant Coursework</h4>
          <div className="flex flex-wrap gap-2">
            {courses.map((c) => (
              <span key={c} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs">
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ScoreBadge({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-[#48bfe3]/20 bg-[#48bfe3]/5 px-5 py-3 text-center">
      <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{label}</div>
      <div className="mt-1 font-display text-2xl font-bold text-gradient">{value}</div>
    </div>
  );
}

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeader tag="Get In Touch" title="Let's Connect" sub="Open to internships, full-time roles, and exciting collaborations" />
      <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <div className="rounded-3xl glass p-8">
          <h3 className="font-display text-2xl font-bold">Ready to build something amazing?</h3>
          <p className="mt-2 text-muted-foreground">
            Whether you're looking for a Flutter developer, need help with AI integration, or want to discuss
            an exciting project — I'd love to hear from you.
          </p>

          <div className="mt-6 space-y-3">
            <ContactRow icon={<Mail size={16} />} label="Email" value="tyagidivya683@gmail.com" href="mailto:tyagidivya683@gmail.com" />
            <ContactRow icon={<Phone size={16} />} label="Phone" value="+91 83830 09772" href="tel:+918383009772" />
            <ContactRow icon={<MapPin size={16} />} label="Location" value="Ghaziabad, Uttar Pradesh, India" />
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <a href="mailto:tyagidivya683@gmail.com" className="btn-primary text-sm">
              <Mail size={16} /> Email Me
            </a>
            <a href="https://www.linkedin.com/in/divya-tyagi571/" target="_blank" rel="noopener" className="btn-ghost-glow text-sm">
              <Linkedin size={16} /> LinkedIn
            </a>
            <a href="https://github.com/divyaTyagi123" target="_blank" rel="noopener" className="btn-ghost-glow text-sm">
              <Github size={16} /> GitHub
            </a>
          </div>
        </div>

        <div className="rounded-3xl glass p-8">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 animate-pulse-soft rounded-full bg-[#80ffdb] shadow-[0_0_10px_#80ffdb]" />
            <span className="font-display font-semibold">Available for Opportunities</span>
          </div>
          <div className="mt-5 space-y-2 text-sm">
            {[
              ["💼", "Full-time Roles"],
              ["🚀", "Internships"],
              ["🤝", "Freelance Projects"],
              ["🌐", "Open Source"],
            ].map(([i, l]) => (
              <div key={l} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                <span>{i}</span>
                <span className="text-foreground/85">{l}</span>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <p className="mb-2 text-xs uppercase tracking-widest text-muted-foreground">Primary Focus</p>
            <div className="flex flex-wrap gap-2">
              {["Flutter", "AI/ML Mobile", "Firebase", "Full Stack Mobile"].map((t) => (
                <span key={t} className="rounded-full border border-[#80ffdb]/30 bg-[#80ffdb]/5 px-3 py-1 text-xs text-[#80ffdb]">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) {
  const Inner = (
    <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-[#80ffdb]/40">
      <div className="grid h-10 w-10 place-items-center rounded-xl text-white" style={{ background: "var(--gradient-hero)" }}>
        {icon}
      </div>
      <div>
        <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className="text-sm font-medium">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href}>{Inner}</a> : Inner;
}

function Footer() {
  return (
    <footer className="border-t border-white/10 mt-16">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-8 text-sm text-muted-foreground">
        <div>© {new Date().getFullYear()} Divya Tyagi. Crafted with Flutter mindset & web love.</div>
        <div className="flex items-center gap-2">
          <Flame size={14} className="text-[#48bfe3]" />
          <span>Built with care</span>
        </div>
      </div>
    </footer>
  );
}
