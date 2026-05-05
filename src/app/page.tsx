import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d0914] text-white">
      {/* Navbar */}
      <Navbar />

{/* Main Hero Page */}
<section
  id="home"
  className="relative flex min-h-screen items-center overflow-hidden bg-[#0d0914] px-5 pb-16 pt-28 sm:px-6 md:pt-32"
>
  {/* Background Glow */}
  <div className="absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-purple-700/20 blur-3xl md:h-96 md:w-96"></div>
  <div className="absolute right-0 top-32 h-56 w-56 rounded-full bg-purple-500/10 blur-3xl md:h-72 md:w-72"></div>

  <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
    {/* Left Content */}
    <div className="text-center lg:text-left">
      <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 text-xs font-medium text-slate-300 sm:text-sm">
        <span className="h-2.5 w-2.5 rounded-full bg-purple-500"></span>
        Computer Science (AI) Student
      </div>

      <h1 className="mb-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
        Hello, I&apos;m{" "}
        <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
          Chen Shao Yee
        </span>
      </h1>

      <p className="mx-auto mb-9 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg lg:mx-0">
        I am a Computer Science student majoring in Artificial Intelligence,
        passionate about building practical AI-powered products and solving
        real-world problems through software. I enjoy exploring machine learning,
        web development, and generative AI while collaborating on impactful
        projects.
      </p>

      <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
        <a
          href="#projects"
          className="rounded-xl bg-gradient-to-r from-purple-700 to-purple-500 px-8 py-4 text-center text-base font-bold text-white shadow-xl shadow-purple-700/30 transition hover:-translate-y-1 hover:shadow-purple-500/40"
        >
          View My Work
        </a>

        <a
          href="#contact"
          className="rounded-xl border border-white/15 bg-white/[0.03] px-8 py-4 text-center text-base font-bold text-white transition hover:-translate-y-1 hover:border-purple-400 hover:bg-purple-500/10"
        >
          Get In Touch
        </a>
      </div>
    </div>

    {/* Right Profile Image */}
    <div className="flex justify-center lg:justify-end">
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-purple-700/30 blur-3xl"></div>

        <div className="relative h-60 w-60 overflow-hidden rounded-full border-4 border-purple-700 shadow-2xl shadow-purple-700/40 sm:h-72 sm:w-72 md:h-80 md:w-80 lg:h-96 lg:w-96">
          <img
            src="/profile.jpg"
            alt="Chen Shao Yee profile picture"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>

    {/* Stats Bar */}
    <div className="lg:col-span-2">
      <div className="grid gap-4 rounded-2xl border border-white/10 bg-white/[0.035] p-5 shadow-xl sm:grid-cols-2 md:grid-cols-4 md:p-6">
        <div className="text-center">
          <p className="text-2xl font-extrabold text-purple-400 md:text-3xl">
            10+
          </p>
          <p className="mt-2 text-sm text-slate-400">Projects Completed</p>
        </div>

        <div className="text-center">
          <p className="text-2xl font-extrabold text-purple-400 md:text-3xl">
            3+
          </p>
          <p className="mt-2 text-sm text-slate-400">Hackathons Joined</p>
        </div>

        <div className="text-center">
          <p className="text-2xl font-extrabold text-purple-400 md:text-3xl">
            2+
          </p>
          <p className="mt-2 text-sm text-slate-400">Years of Learning</p>
        </div>

        <div className="text-center">
          <p className="text-2xl font-extrabold text-purple-400 md:text-3xl">
            AI
          </p>
          <p className="mt-2 text-sm text-slate-400">Main Interest</p>
        </div>
      </div>
    </div>
  </div>
</section>

     {/* About Section */}
<section id="about" className="min-h-screen bg-[#08080b] px-6 py-28">
  <div className="mx-auto max-w-7xl">
    {/* Section Header */}
    <div className="mb-24 text-center">
      <h2 className="mb-6 text-5xl font-black text-purple-500 md:text-6xl">
        About Me
      </h2>

      <p className="mx-auto max-w-3xl text-xl leading-8 text-slate-300 md:text-2xl">
        Passionate developer with a love for creating exceptional webs and
        applications
      </p>
    </div>

    {/* Main Content */}
    <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_1fr]">
      {/* Left Text */}
      <div>
        <h3 className="mb-10 text-2xl font-extrabold text-white md:text-3xl">
          Crafting the Future with AI
        </h3>

        <div className="space-y-8 text-lg leading-9 tracking-wide text-slate-300">
          <p>
            I&apos;m a junior in the world of AI and software development,
            passionate about exploring Machine Learning, AI, Blockchain and Data
            Science. Currently, I&apos;m pursuing a Bachelor&apos;s degree in
            Computer Science (Artificial Intelligence) at the University of
            Malaya, where I&apos;m building a strong foundation in algorithms,
            data-driven problem solving, and intelligent systems.
          </p>

          <p>
            When I&apos;m not coding, you&apos;ll find me exploring new
            technologies, contributing to open-source projects, or enjoying a
            good cup of coffee while sketching out ideas for my next project. I
            believe in the power of continuous learning and staying up-to-date
            with the latest industry trends.
          </p>

          <p>
            My approach combines technical expertise with creative
            problem-solving to deliver solutions that not only work flawlessly
            but also provide an exceptional user experience.
          </p>
        </div>
      </div>

      {/* Right Stats Cards */}
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="rounded-xl border border-purple-700/40 bg-gradient-to-br from-white/[0.06] to-white/[0.10] p-10 text-center shadow-xl transition hover:-translate-y-2 hover:border-purple-500/70">
          <h3 className="mb-4 text-4xl font-black text-purple-400">2+</h3>
          <p className="mb-3 text-lg font-extrabold text-white">
            Years Experience
          </p>
          <p className="text-base leading-7 text-slate-300">
            Building AI & Software solutions
          </p>
        </div>

        <div className="rounded-xl border border-purple-700/40 bg-gradient-to-br from-white/[0.06] to-white/[0.10] p-10 text-center shadow-xl transition hover:-translate-y-2 hover:border-purple-500/70">
          <h3 className="mb-4 text-4xl font-black text-purple-400">10+</h3>
          <p className="mb-3 text-lg font-extrabold text-white">
            Projects Completed
          </p>
          <p className="text-base leading-7 text-slate-300">
            From prototypes to real-world application
          </p>
        </div>

        <div className="rounded-xl border border-purple-700/40 bg-gradient-to-br from-white/[0.06] to-white/[0.10] p-10 text-center shadow-xl transition hover:-translate-y-2 hover:border-purple-500/70">
          <h3 className="mb-4 text-4xl font-black text-purple-400">3+</h3>
          <p className="mb-3 text-lg font-extrabold text-white">
            Industry-Led Hackathons
          </p>
          <p className="text-base leading-7 text-slate-300">
            Keep track with new world trend
          </p>
        </div>

        <div className="rounded-xl border border-purple-700/40 bg-gradient-to-br from-white/[0.06] to-white/[0.10] p-10 text-center shadow-xl transition hover:-translate-y-2 hover:border-purple-500/70">
          <h3 className="mb-4 text-4xl font-black text-purple-400">∞</h3>
          <p className="mb-3 text-lg font-extrabold text-white">
            Coffee Cups
          </p>
          <p className="text-base leading-7 text-slate-300">
            Endless fuel for creativity and late-night coding
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Education Section */}
<section id="education" className="min-h-screen bg-[#08080b] px-6 py-28">
  <div className="mx-auto max-w-6xl">
    {/* Section Header */}
    <div className="mb-16 text-center">
      <h2 className="mb-4 text-5xl font-black text-purple-500 md:text-6xl">
        Education
      </h2>

      <p className="text-xl text-slate-300">
        My learning journey and academic achievements
      </p>
    </div>

    {/* Timeline Container */}
    <div className="relative mx-auto max-w-5xl">
      {/* Center Line */}
      <div className="absolute left-1/2 top-0 hidden h-full w-[2px] -translate-x-1/2 bg-purple-900/70 md:block"></div>

      {/* Timeline Dot 1 */}
      <div className="absolute left-1/2 top-28 hidden h-4 w-4 -translate-x-1/2 rounded-full bg-purple-600 shadow-lg shadow-purple-600/50 md:block"></div>

      {/* Timeline Dot 2 */}
      <div className="absolute left-1/2 top-[500px] hidden h-4 w-4 -translate-x-1/2 rounded-full bg-purple-600 shadow-lg shadow-purple-600/50 md:block"></div>

      {/* Timeline Dot 3 */}
      <div className="absolute left-1/2 top-[850px] hidden h-4 w-4 -translate-x-1/2 rounded-full bg-purple-600 shadow-lg shadow-purple-600/50 md:block"></div>

      <div className="space-y-16">
        {/* Education Item 1 - Left */}
        <div className="grid items-start gap-10 md:grid-cols-2">
          <div className="md:pr-10">
            <div className="rounded-xl border border-purple-700/50 bg-gradient-to-br from-white/[0.06] to-white/[0.10] p-8 shadow-xl transition hover:-translate-y-2 hover:border-purple-500/70">
              <span className="mb-4 inline-block rounded-full bg-purple-800/40 px-3.5 py-1.5 text-xs font-bold text-purple-300">
                2024 - Current
              </span>

              <h3 className="mb-3 text-2xl font-black leading-snug text-white">
                Bachelor of Computer Science <br />
                (Artificial Intelligence)
              </h3>

              <p className="mb-5 text-base font-bold text-purple-400">
                University of Malaya, Kuala Lumpur
              </p>

              <p className="mb-6 text-base leading-8 text-slate-300">
                Pursuing a computer science degree specializing in Artificial
                Intelligence with strong focus on algorithms, machine learning,
                and intelligent systems.
              </p>

              <div className="flex flex-wrap gap-2">
                {[
                  "Data Structures",
                  "Algorithms",
                  "Web Development",
                  "Database Systems",
                  "Data Science",
                  "Machine Learning",
                  "Computer System and Networking",
                  "Project Management",
                  "Cognitive Science",
                  "Operating Systems",
                  "System Analysis and Design",
                  "Mobile Application Development",
                  "+",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-slate-700/70 px-3.5 py-1.5 text-xs font-bold text-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="hidden md:block"></div>
        </div>

        {/* Education Item 2 - Right */}
        <div className="grid items-start gap-10 md:grid-cols-2">
          <div className="hidden md:block"></div>

          <div className="md:pl-10">
            <div className="rounded-xl border border-purple-700/50 bg-gradient-to-br from-white/[0.06] to-white/[0.10] p-8 shadow-xl transition hover:-translate-y-2 hover:border-purple-500/70">
              <span className="mb-4 inline-block rounded-full bg-purple-800/40 px-3.5 py-1.5 text-xs font-bold text-purple-300">
                2023 - 2024
              </span>

              <h3 className="mb-3 text-2xl font-black leading-snug text-white">
                Physical Science Foundation <br />
                (CGPA - 4.0)
              </h3>

              <p className="mb-5 text-base font-bold text-purple-400">
                Perlis Matriculation College, Arau
              </p>

              <p className="mb-6 text-base leading-8 text-slate-300">
                Completed an intensive 1-year foundation program with emphasis
                on STEM disciplines as preparation for undergraduate studies.
              </p>

              <div className="flex flex-wrap gap-2">
                {[
                  "Physics",
                  "Mathematics",
                  "Chemistry",
                  "Computer Science",
                  "Outstanding Student Character Award",
                  "Head of Peer Assisted Learning Leader",
                  "Silver Award - National Symposium PAL Leader 2024",
                  "Champion - National Matriculation Jamboree 2024",
                  "Best Presenter Award in Kursus PAL KMP",
                  "Champion - Junior Programmer Competition 2024 KMP",
                  "+",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-slate-700/70 px-3.5 py-1.5 text-xs font-bold text-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Education Item 3 - Left */}
        <div className="grid items-start gap-10 md:grid-cols-2">
          <div className="md:pr-10">
            <div className="rounded-xl border border-purple-700/50 bg-gradient-to-br from-white/[0.06] to-white/[0.10] p-8 shadow-xl transition hover:-translate-y-2 hover:border-purple-500/70">
              <span className="mb-4 inline-block rounded-full bg-purple-800/40 px-3.5 py-1.5 text-xs font-bold text-purple-300">
                2018 - 2022
              </span>

              <h3 className="mb-3 text-2xl font-black leading-snug text-white">
                Malaysian Certificate of Education <br />
                (SPM - 10A)
              </h3>

              <p className="mb-5 text-base font-bold text-purple-400">
                SMK Bagan Serai, Perak
              </p>

              <p className="mb-6 text-base leading-8 text-slate-300">
                Completed secondary education with a strong academic foundation
                in science, mathematics, languages, and problem-solving skills.
              </p>

              <div className="flex flex-wrap gap-2">
                {[
                  "10A Award",
                  "Best SPM Achiever Award",
                  "King Scout Award",
                  "Science Stream",
                  "Head Prefect",
                  "Head of Scout Patrol",
                  "Malaysia Future Leader School Participant",
                  "Silver & Bronze Awards - National Orchestra Competition CHUNLEI",
                  "+",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-slate-700/70 px-3.5 py-1.5 text-xs font-bold text-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="hidden md:block"></div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Projects Section */}
<section id="projects" className="min-h-screen bg-[#08080b] px-6 py-28">
  <div className="mx-auto max-w-7xl">
    {/* Section Header */}
    <div className="mb-16 text-center">
      <h2 className="mb-4 text-5xl font-black text-purple-500 md:text-6xl">
        Featured Projects
      </h2>

      <p className="text-xl text-slate-300">
        A collection of my recent work and personal projects
      </p>
    </div>

    {/* Project Cards */}
    <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
      {[
        {
          title: "BizAssist AI Hub",
          description:
            "An AI-powered business operations platform for SMEs that unifies customer support, order handling, inventory tracking, meeting coordination, and workflow automation. It also includes an AI invoice and document processing module that extracts key information from uploaded documents and reduces manual processing effort.",
          image: "/project-bizassist.jpg",
          code: "https://github.com/shaunn27/bizassist-ai-hub",
          live: "https://bizassist-ai-hub-navy.vercel.app/",
          tags: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Supabase",
            "AI Workflow",
            "OCR",
            "Invoice Processing",
            "Document AI",
            "SME Automation",
            "Dashboard",
          ],
        },
        {
          title: "404-FakeNotFound",
          description:
            "A Web3-based fake news detection platform designed to identify and flag misleading online content. Contributed as a Backend Developer by building API integrations, developing data processing pipelines, and supporting the implementation of an AI-based detection system.",
          image: "/project-fakenotfound.jpg",
          code: "https://github.com/Qinn23/404-fakenotfound",
          live: "https://404-fakenotfound.vercel.app/",
          tags: [
            "Web3",
            "Fake News Detection",
            "Backend Development",
            "API Integration",
            "Data Processing",
            "AI Detection",
            "Hackathon Finalist",
            "MegaHack 2025",
          ],
        },
        {
          title: "Learn4All Study Web App",
          description:
            "An AI-powered educational web app focused on helping Malaysian secondary school students learn Integration through multilingual learning materials, AI-generated quizzes, an AI tutor, progress tracking, badges, leaderboard, and daily math challenges.",
          image: "/project-learn4all.jpg",
          code: "https://github.com/Marcusng88/sparklearn-sdg4",
          live: "https://sparklearn-sdg4-fawn.vercel.app/",
          tags: [
            "Web App",
            "AI Tutor",
            "AI Quiz Generator",
            "Backend Development",
            "Multilingual Support",
            "Gamification",
            "Progress Tracking",
            "SDG 4",
          ],
        },
        {
          title: "SmartBite Mobile Application",
          description:
            "A Flutter-based mobile application developed to reduce food waste by helping users scan food, track expiry dates, receive recipe suggestions, and donate surplus food through NGOs, centralized food hubs, and delivery coordination.",
          image: "/project-smartbite.jpg",
          code: "https://github.com/chenshaoyee666/PisangGoreng",
          tags: [
            "Flutter",
            "Dart",
            "Node.js",
            "Express.js",
            "AI Food Recognition",
            "Recipe Recommendation",
            "QR Scanner",
            "Food Donation",
            "Sustainability",
          ],
        },
        {
          title: "Badan Warisan Malaysia Membership App",
          description:
            "A membership, donation, and event registration system with user sign-up, email verification, member ID generation, profile management, CSV export planning, and admin dashboard features.",
          image: "/project-bwm.jpg",
          code: "https://github.com/chenshaoyee666/BadanWarisanMalaysia-Membership",
          tags: [
            "React",
            "Supabase",
            "Auth",
            "PostgreSQL",
            "RLS",
            "CSV Export",
            "Admin Dashboard",
          ],
        },
        {
          title: "VolunHub Organization Dashboard",
          description:
            "An Android application dashboard for organizations to manage volunteering services, student applications, upcoming events, and recent activity updates using Firebase and Firestore.",
          image: "/project-volunhub.jpg",
          code: "https://github.com/leezhenxue/VolunHub",
          tags: [
            "Android",
            "Java",
            "Firebase Auth",
            "Firestore",
            "Cloudinary",
            "RecyclerView",
            "Material UI",
          ],
        },
      ].map((project) => (
        <div
          key={project.title}
          className="group overflow-hidden rounded-xl border border-purple-800/50 bg-[#1f1f25] shadow-xl transition duration-300 hover:-translate-y-2 hover:border-purple-500 hover:shadow-2xl hover:shadow-purple-700/30"
        >
          {/* Image Area */}
          <div className="relative h-60 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
            />

            {/* Dark Overlay on Hover */}
            <div className="absolute inset-0 bg-black/10 transition duration-300 group-hover:bg-black/50"></div>

            {/* Code / Live Buttons on Hover */}
            <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 transition duration-300 group-hover:opacity-100">
              <a
                href={project.code}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-purple-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-purple-700/40 transition hover:bg-purple-500"
              >
                Code
              </a>

              {"live" in project && project.live && project.live !== "#" && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-black/80 px-5 py-3 text-sm font-bold text-white ring-1 ring-white/20 transition hover:bg-white hover:text-black"
                >
                  Live
                </a>
              )}
            </div>
          </div>

          {/* Card Content */}
          <div className="p-8">
            <div className="mb-5 flex items-center justify-between gap-4">
              <h3 className="text-2xl font-black leading-snug text-white">
                {project.title}
              </h3>

              <span className="rounded-full bg-purple-800/60 px-3.5 py-1.5 text-xs font-bold text-purple-300">
                Featured
              </span>
            </div>

            <p className="mb-6 text-base leading-8 text-slate-300">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-slate-700/70 px-3.5 py-1.5 text-xs font-bold text-white"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

{/* Hackathons Section */}
<section id="hackathons" className="min-h-screen bg-[#101012] px-6 py-28">
  <div className="mx-auto max-w-7xl">
    {/* Section Header */}
    <div className="mb-10 text-center">
      <h2 className="mb-4 text-5xl font-black text-purple-500 md:text-6xl">
        Hackathons & Competitions
      </h2>

      <p className="text-xl text-slate-300">
        Turning innovative ideas into meaningful prototype solutions
      </p>
    </div>

    {/* Stats Row */}
    <div className="mx-auto mb-16 grid max-w-3xl grid-cols-2 gap-4 md:grid-cols-4">
      <div className="rounded-xl border border-purple-800/50 bg-white/[0.04] px-6 py-5 text-center">
        <h3 className="text-3xl font-black text-purple-500">2</h3>
        <p className="text-sm text-slate-300">Competitions</p>
      </div>

      <div className="rounded-xl border border-purple-800/50 bg-white/[0.04] px-6 py-5 text-center">
        <h3 className="text-3xl font-black text-purple-500">2</h3>
        <p className="text-sm text-slate-300">Finalist Titles</p>
      </div>

      <div className="rounded-xl border border-purple-800/50 bg-white/[0.04] px-6 py-5 text-center">
        <h3 className="text-3xl font-black text-purple-500">4</h3>
        <p className="text-sm text-slate-300">AI Projects</p>
      </div>

      <div className="rounded-xl border border-purple-800/50 bg-white/[0.04] px-6 py-5 text-center">
        <h3 className="text-3xl font-black text-purple-500">AI</h3>
        <p className="text-sm text-slate-300">Focused Domain</p>
      </div>
    </div>

    {/* Competition Cards */}
    <div className="grid gap-8 md:grid-cols-2">
      {[
        {
          event: "UMHackathon 2026",
          status: "Finalist",
          statusStyle: "bg-purple-600 text-white",
          title: "BizAssist AI Hub",
          description:
            "Developed an AI-powered SME operations platform that unifies customer support, orders, inventory, meetings, and invoice/document processing. Contributed to the system concept, product flow, UI planning, pitch materials, and implemented the AI invoice/document processing module.",
          date: "2026",
          participants: "National-level participants",
          prize: "Finalist",
          link: "#projects",
          tags: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Supabase",
            "AI Workflow",
            "Invoice Processing",
            "SME Automation",
            "+",
          ],
        },
        {
          event: "MegaHack Hackathon",
          status: "Finalist",
          statusStyle: "bg-purple-600 text-white",
          title: "404-FakeNotFound",
          description:
            "Developed a Web3-based fake news detection platform designed to identify and flag misleading online content. Contributed as a Backend Developer by building API integrations, developing data processing pipelines, and supporting the implementation of an AI-based detection system.",
          date: "2025",
          participants: "National-level participants",
          prize: "Finalist",
          link: "#projects",
          tags: [
            "Web3",
            "Fake News Detection",
            "Backend Development",
            "API Integration",
            "Data Pipeline",
            "AI Detection",
            "+",
          ],
        },
      ].map((item) => (
        <div
          key={item.title}
          className="rounded-xl border border-purple-800/60 bg-[#1b1b20] p-8 shadow-xl transition duration-300 hover:-translate-y-2 hover:border-purple-500 hover:shadow-2xl hover:shadow-purple-700/30"
        >
          <h3 className="mb-4 text-2xl font-black leading-snug text-white">
            {item.event}
          </h3>

          <div className="mb-7 flex items-center gap-2">
            <span
              className={`rounded-full px-4 py-1.5 text-xs font-black ${item.statusStyle}`}
            >
              {item.status}
            </span>

            <span className="rounded-full bg-purple-800/50 px-4 py-1.5 text-xs font-bold text-purple-300">
              Featured
            </span>
          </div>

          <h4 className="mb-5 text-lg font-black text-purple-400">
            {item.title}
          </h4>

          <p className="mb-7 min-h-24 text-base leading-8 text-slate-300">
            {item.description}
          </p>

          <div className="mb-6 space-y-3 text-base">
            <div className="flex justify-between gap-4">
              <span className="text-slate-300">Date:</span>
              <span className="font-bold text-white">{item.date}</span>
            </div>

            <div className="flex justify-between gap-4">
              <span className="text-slate-300">Participants:</span>
              <span className="font-bold text-white">{item.participants}</span>
            </div>

            <div className="flex justify-between gap-4">
              <span className="text-slate-300">Achievement:</span>
              <span className="font-bold text-purple-500">{item.prize}</span>
            </div>
          </div>

          <div className="mb-7 flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-slate-700/70 px-3.5 py-1.5 text-xs font-bold text-white ring-1 ring-white/10"
              >
                {tag}
              </span>
            ))}
          </div>

          <a
            href={item.link}
            className="block rounded-md bg-black/40 px-4 py-3.5 text-center text-sm font-bold text-white transition hover:bg-purple-600"
          >
            View Project Details ↗
          </a>
        </div>
      ))}
    </div>
  </div>
</section>

{/* Social Impact Section */}
<section id="social-impact" className="min-h-screen bg-[#08080b] px-6 py-28">
  <div className="mx-auto max-w-7xl">
    {/* Section Header */}
    <div className="mb-14 text-center">
      <h2 className="mb-4 text-5xl font-black text-purple-500 md:text-6xl">
        Social Impact
      </h2>

      <p className="text-xl text-slate-300">
        Community involvement, leadership, and meaningful student initiatives
      </p>
    </div>

    {/* Cards */}
    <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
      {[
        {
          title: "UM Chinese Orchestra Concert 2026",
          category: "Event Management",
          role: "Treasurer & Sponsorship Department Head",
          organization: "Universiti Malaya Chinese Orchestra (UMCO)",
          description:
            "Contributed to the planning and execution of UMCO Concert 2026, “the breeze”, a student-led cultural concert that promotes traditional Chinese music and supports the orchestra’s long-term development.",
          duration: "2025 - 2026",
          impact: "1,000+ expected attendees",
          achievements: [
            "Managed sponsorship outreach and communication with corporate partners",
            "Prepared sponsorship emails, confirmation letters, and sponsor benefit details",
            "Coordinated finance-related matters including invoice and payment follow-up",
          ],
          buttonText: "Learn More About This Initiative",
        },
        {
          title: "The 20th National Varsity Chinese Debating Championship",
          category: "Event Management",
          role: "Committee Member, General Affairs Department",
          organization: "National Varsity Chinese Debating Championship",
          description:
            "Served as a committee member under the General Affairs Department for the 20th National Varsity Chinese Debating Championship. Took on responsibilities as a Debater Manager and assisted teams from Taylor’s University and USMKKJ while supporting event logistics.",
          duration: "2025",
          impact: "National-level varsity event",
          achievements: [
            "Managed debater-related arrangements for Taylor’s University and USMKKJ",
            "Assisted in general affairs operations during the competition",
            "Arranged transportation for committee members and supported event logistics",
          ],
          buttonText: "Learn More About This Initiative",
        },
        {
          title: "SPM Motivational Event",
          category: "Education Outreach",
          role: "Facilitator",
          organization: "SMK Bagan Serai",
          description:
            "Served as a facilitator for motivational events organized for SPM candidates in 2023 and 2024, supporting students through guidance, encouragement, and activity facilitation before their examinations.",
          duration: "2023 - 2024",
          impact: "Supported SPM candidates",
          achievements: [
            "Facilitated student activities and motivational sessions",
            "Encouraged SPM candidates to stay focused and confident before exams",
            "Contributed to school-based education and youth development initiatives",
          ],
          buttonText: "Learn More About This Initiative",
        },
        {
          title: "Scouting & Community Service",
          category: "Volunteer Service",
          role: "Scout Volunteer",
          organization: "Kerian District & Universiti Malaya Community",
          description:
            "Actively involved in scouting and volunteer service through community activities in Kerian district and around Universiti Malaya, including old folks’ home support and gotong-royong cleaning activities.",
          duration: "Ongoing",
          impact: "Community support and service",
          achievements: [
            "Volunteered in scouting service activities within Kerian district",
            "Participated in community service activities around Universiti Malaya",
            "Helped in old folks’ home visits and gotong-royong cleaning initiatives",
          ],
          buttonText: "Learn More About This Initiative",
        },
      ].map((item) => (
        <div
          key={item.title}
          className="rounded-xl border border-purple-800/60 bg-[#1b1b20] p-8 shadow-xl transition duration-300 hover:-translate-y-2 hover:border-purple-500 hover:shadow-2xl hover:shadow-purple-700/30"
        >
          <h3 className="mb-5 text-2xl font-black leading-snug text-white">
            {item.title}
          </h3>

          <div className="mb-8 flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-slate-700/80 px-4 py-1.5 text-xs font-black text-white">
              {item.category}
            </span>

            <span className="rounded-full bg-purple-800/50 px-4 py-1.5 text-xs font-bold text-purple-300">
              Featured
            </span>
          </div>

          <h4 className="mb-4 text-lg font-black text-purple-400">
            {item.role}
          </h4>

          <p className="mb-6 text-base leading-8 text-slate-300">
            {item.organization}
          </p>

          <p className="mb-8 text-base leading-8 text-slate-300">
            {item.description}
          </p>

          <div className="mb-7 space-y-3 text-base">
            <div className="flex justify-between gap-4">
              <span className="text-slate-300">Duration:</span>
              <span className="font-bold text-white">{item.duration}</span>
            </div>

            <div className="flex justify-between gap-4">
              <span className="text-slate-300">Impact:</span>
              <span className="font-bold text-purple-500">{item.impact}</span>
            </div>
          </div>

          <div className="mb-8">
            <p className="mb-4 text-base font-black text-white">
              Key Achievements:
            </p>

            <ul className="space-y-3">
              {item.achievements.map((achievement) => (
                <li
                  key={achievement}
                  className="flex gap-3 text-sm leading-7 text-slate-300"
                >
                  <span className="mt-1 text-purple-500">✓</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>

          <a
            href="#contact"
            className="block rounded-md border border-purple-700/70 bg-black/30 px-4 py-3.5 text-center text-sm font-bold text-white transition hover:border-purple-400 hover:bg-purple-600"
          >
            {item.buttonText} →
          </a>
        </div>
      ))}
    </div>

    {/* Collaboration Box */}
    <div className="mx-auto mt-16 max-w-3xl rounded-xl border border-purple-800/60 bg-[#1b1b20] px-8 py-10 text-center shadow-xl">
      <h3 className="mb-5 text-2xl font-black text-purple-500">
        Interested in Collaboration?
      </h3>

      <p className="mx-auto mb-8 max-w-2xl text-base leading-8 text-slate-300">
        I&apos;m always looking for opportunities to contribute to meaningful
        causes, student initiatives, and community service activities.
        Let&apos;s work together to create positive change.
      </p>

      <a
        href="#contact"
        className="inline-flex rounded-md border border-purple-700/70 bg-black/30 px-8 py-3.5 text-sm font-bold text-white transition hover:border-purple-400 hover:bg-purple-600"
      >
        Get In Touch →
      </a>
    </div>
  </div>
</section>

{/* Contact Section */}
<section id="contact" className="bg-[#08080b] px-6 py-28">
  <div className="mx-auto max-w-7xl">
    {/* Section Header */}
    <div className="mb-16 text-center">
      <h2 className="mb-4 text-5xl font-black text-purple-500 md:text-6xl">
        Get In Touch
      </h2>

      <p className="mx-auto max-w-3xl text-xl leading-8 text-slate-300">
        Have a project, internship opportunity, collaboration idea, or just want
        to connect? I&apos;d love to hear from you.
      </p>
    </div>

    <div className="grid gap-12 lg:grid-cols-2">
      {/* Contact Form */}
      <div className="rounded-xl border border-purple-800/60 bg-[#1b1b20] p-8 shadow-xl">
        <h3 className="mb-4 text-3xl font-black text-white">
          Send me a message
        </h3>

        <p className="mb-8 text-base leading-8 text-slate-300">
          Feel free to reach out for internships, AI-related projects,
          hackathon collaboration, or software development opportunities.
        </p>

        <ContactForm />
      </div>

      {/* Contact Information */}
      <div>
        <h3 className="mb-8 text-3xl font-black text-white">
          Contact Information
        </h3>

        <div className="space-y-5">
          {/* Email */}
          <a
            href="mailto:chenshaoyee666@gmail.com"
            className="flex items-center gap-5 rounded-xl border border-purple-800/60 bg-[#1b1b20] p-7 shadow-xl transition hover:-translate-y-1 hover:border-purple-500 hover:bg-[#252530]"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-purple-900/30 text-3xl text-purple-400">
              ✉
            </div>

            <div>
              <h4 className="mb-1 text-lg font-black text-white">Email</h4>
              <p className="text-base text-slate-300 hover:text-purple-400">
                chenshaoyee666@gmail.com
              </p>
            </div>
          </a>

          {/* Location */}
          <div className="flex items-center gap-5 rounded-xl border border-purple-800/60 bg-[#1b1b20] p-7 shadow-xl transition hover:-translate-y-1 hover:border-purple-500 hover:bg-[#252530]">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-purple-900/30 text-3xl text-purple-400">
              ⌖
            </div>

            <div>
              <h4 className="mb-1 text-lg font-black text-white">Location</h4>
              <p className="text-base text-slate-300 hover:text-purple-400">
                Petaling Jaya, Malaysia
              </p>
            </div>
          </div>
        </div>

        {/* Follow Me */}
        <div className="mt-10">
          <h3 className="mb-5 text-3xl font-black text-white">Follow Me</h3>

          <div className="flex flex-wrap gap-4">
            {/* GitHub */}
            <a
              href="https://github.com/chenshaoyee666"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-14 w-14 items-center justify-center rounded-xl border border-purple-800/60 bg-[#1b1b20] text-slate-300 shadow-lg transition hover:-translate-y-1 hover:border-purple-500 hover:text-purple-400"
            >
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 640 640"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M237.9 461.4C237.9 463.4 235.6 465 232.7 465C229.4 465.3 227.1 463.7 227.1 461.4C227.1 459.4 229.4 457.8 232.3 457.8C235.3 457.5 237.9 459.1 237.9 461.4zM206.8 456.9C206.1 458.9 208.1 461.2 211.1 461.8C213.7 462.8 216.7 461.8 217.3 459.8C217.9 457.8 216 455.5 213 454.6C210.4 453.9 207.5 454.9 206.8 456.9zM251 455.2C248.1 455.9 246.1 457.8 246.4 460.1C246.7 462.1 249.3 463.4 252.3 462.7C255.2 462 257.2 460.1 256.9 458.1C256.6 456.2 253.9 454.9 251 455.2zM316.8 72C178.1 72 72 177.3 72 316C72 426.9 141.8 521.8 241.5 555.2C254.3 557.5 258.8 549.6 258.8 543.1C258.8 536.9 258.5 502.7 258.5 481.7C258.5 481.7 188.5 496.7 173.8 451.9C173.8 451.9 162.4 422.8 146 415.3C146 415.3 123.1 399.6 147.6 399.9C147.6 399.9 172.5 401.9 186.2 425.7C208.1 464.3 244.8 453.2 259.1 446.6C261.4 430.6 267.9 419.5 275.1 412.9C219.2 406.7 162.8 398.6 162.8 302.4C162.8 274.9 170.4 261.1 186.4 243.5C183.8 237 175.3 210.2 189 175.6C209.9 169.1 258 202.6 258 202.6C278 197 299.5 194.1 320.8 194.1C342.1 194.1 363.6 197 383.6 202.6C383.6 202.6 431.7 169 452.6 175.6C466.3 210.3 457.8 237 455.2 243.5C471.2 261.2 481 275 481 302.4C481 398.9 422.1 406.6 366.2 412.9C375.4 420.8 383.2 435.8 383.2 459.3C383.2 493 382.9 534.7 382.9 542.9C382.9 549.4 387.5 557.3 400.2 555C500.2 521.8 568 426.9 568 316C568 177.3 455.5 72 316.8 72zM169.2 416.9C167.9 417.9 168.2 420.2 169.9 422.1C171.5 423.7 173.8 424.4 175.1 423.1C176.4 422.1 176.1 419.8 174.4 417.9C172.8 416.3 170.5 415.6 169.2 416.9zM158.4 408.8C157.7 410.1 158.7 411.7 160.7 412.7C162.3 413.7 164.3 413.4 165 412C165.7 410.7 164.7 409.1 162.7 408.1C160.7 407.5 159.1 407.8 158.4 408.8zM190.8 444.4C189.2 445.7 189.8 448.7 192.1 450.6C194.4 452.9 197.3 453.2 198.6 451.6C199.9 450.3 199.3 447.3 197.3 445.4C195.1 443.1 192.1 442.8 190.8 444.4zM179.4 429.7C177.8 430.7 177.8 433.3 179.4 435.6C181 437.9 183.7 438.9 185 437.9C186.6 436.6 186.6 434 185 431.7C183.6 429.4 181 428.4 179.4 429.7z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/chen-shao-yee-674a26347/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-14 w-14 items-center justify-center rounded-xl border border-purple-800/60 bg-[#1b1b20] text-slate-300 shadow-lg transition hover:-translate-y-1 hover:border-purple-500 hover:text-purple-400"
            >
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 640 640"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M512 96L127.9 96C110.3 96 96 110.5 96 128.3L96 511.7C96 529.5 110.3 544 127.9 544L512 544C529.6 544 544 529.5 544 511.7L544 128.3C544 110.5 529.6 96 512 96zM231.4 480L165 480L165 266.2L231.5 266.2L231.5 480L231.4 480zM198.2 160C219.5 160 236.7 177.2 236.7 198.5C236.7 219.8 219.5 237 198.2 237C176.9 237 159.7 219.8 159.7 198.5C159.7 177.2 176.9 160 198.2 160zM480.3 480L413.9 480L413.9 376C413.9 351.2 413.4 319.3 379.4 319.3C344.8 319.3 339.5 346.3 339.5 374.2L339.5 480L273.1 480L273.1 266.2L336.8 266.2L336.8 295.4L337.7 295.4C346.6 278.6 368.3 260.9 400.6 260.9C467.8 260.9 480.3 305.2 480.3 362.8L480.3 480z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/chen_shao_yee"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-14 w-14 items-center justify-center rounded-xl border border-purple-800/60 bg-[#1b1b20] text-slate-300 shadow-lg transition hover:-translate-y-1 hover:border-purple-500 hover:text-purple-400"
            >
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 640 640"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M290.4 275.7C274 286 264.5 304.5 265.5 323.8C266.6 343.2 278.2 360.4 295.6 368.9C313.1 377.3 333.8 375.5 349.6 364.3C366 354 375.5 335.5 374.5 316.2C373.4 296.8 361.8 279.6 344.4 271.1C326.9 262.7 306.2 264.5 290.4 275.7zM432.7 207.3C427.5 202.1 421.2 198 414.3 195.3C396.2 188.2 356.7 188.5 331.2 188.8C327.1 188.8 323.3 188.9 320 188.9C316.7 188.9 312.8 188.9 308.6 188.8C283.1 188.5 243.8 188.1 225.7 195.3C218.8 198 212.6 202.1 207.3 207.3C202 212.5 198 218.8 195.3 225.7C188.2 243.8 188.6 283.4 188.8 308.9C188.8 313 188.9 316.8 188.9 320C188.9 323.2 188.9 327 188.8 331.1C188.6 356.6 188.2 396.2 195.3 414.3C198 421.2 202.1 427.4 207.3 432.7C212.5 438 218.8 442 225.7 444.7C243.8 451.8 283.3 451.5 308.8 451.2C312.9 451.2 316.7 451.1 320 451.1C323.3 451.1 327.2 451.1 331.4 451.2C356.9 451.5 396.2 451.9 414.3 444.7C421.2 442 427.4 437.9 432.7 432.7C438 427.5 442 421.2 444.7 414.3C451.9 396.3 451.5 356.9 451.2 331.3C451.2 327.1 451.1 323.2 451.1 319.9C451.1 316.6 451.1 312.8 451.2 308.5C451.5 283 451.9 243.6 444.7 225.5C442 218.6 437.9 212.4 432.7 207.1L432.7 207.3zM365.6 251.8C383.7 263.9 396.2 282.7 400.5 304C404.8 325.3 400.3 347.5 388.2 365.6C382.2 374.6 374.5 382.2 365.6 388.2C356.7 394.2 346.6 398.3 336 400.4C314.7 404.6 292.5 400.2 274.4 388.1C256.3 376 243.8 357.2 239.5 335.9C235.2 314.6 239.7 292.4 251.7 274.3C263.7 256.2 282.6 243.7 303.9 239.4C325.2 235.1 347.4 239.6 365.5 251.6L365.6 251.6zM394.8 250.5C391.7 248.4 389.2 245.4 387.7 241.9C386.2 238.4 385.9 234.6 386.6 230.8C387.3 227 389.2 223.7 391.8 221C394.4 218.3 397.9 216.5 401.6 215.8C405.3 215.1 409.2 215.4 412.7 216.9C416.2 218.4 419.2 220.8 421.3 223.9C423.4 227 424.5 230.7 424.5 234.5C424.5 237 424 239.5 423.1 241.8C422.2 244.1 420.7 246.2 419 248C417.3 249.8 415.1 251.2 412.8 252.2C410.5 253.2 408 253.7 405.5 253.7C401.7 253.7 398 252.6 394.9 250.5L394.8 250.5zM544 160C544 124.7 515.3 96 480 96L160 96C124.7 96 96 124.7 96 160L96 480C96 515.3 124.7 544 160 544L480 544C515.3 544 544 515.3 544 480L544 160zM453 453C434.3 471.7 411.6 477.6 386 478.9C359.6 480.4 280.4 480.4 254 478.9C228.4 477.6 205.7 471.7 187 453C168.3 434.3 162.4 411.6 161.2 386C159.7 359.6 159.7 280.4 161.2 254C162.5 228.4 168.3 205.7 187 187C205.7 168.3 228.5 162.4 254 161.2C280.4 159.7 359.6 159.7 386 161.2C411.6 162.5 434.3 168.3 453 187C471.7 205.7 477.6 228.4 478.8 254C480.3 280.3 480.3 359.4 478.8 385.9C477.5 411.5 471.7 434.2 453 452.9L453 453z" />
              </svg>
            </a>

            {/* Resume Button */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-14 items-center justify-center rounded-xl border border-purple-800/60 bg-[#1b1b20] px-6 text-sm font-bold text-slate-300 shadow-lg transition hover:-translate-y-1 hover:border-purple-500 hover:text-purple-400"
            >
              Resume
            </a>
          </div>
        </div>

        {/* Availability Box */}
        <div className="mt-10 rounded-xl border border-purple-800/60 bg-[#1b1b20] p-8 shadow-xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-3.5 w-3.5 rounded-full bg-green-500 shadow-lg shadow-green-500/40"></span>
            <h4 className="text-xl font-black text-white">
              Available for new projects
            </h4>
          </div>

          <p className="text-base leading-8 text-slate-300">
            I&apos;m currently available for internships, collaborations,
            hackathon projects, AI development opportunities, and meaningful
            software projects. Let&apos;s create something impactful together.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Footer */}
<footer className="border-t border-purple-900/50 bg-[#08080b] px-6 py-10 text-center">
  <div className="mx-auto max-w-4xl">
    <div className="mb-5 flex items-center justify-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500 text-xl font-black text-white">
        C
      </div>

      <h3 className="text-2xl font-black text-purple-400">
        Chen Shao Yee Portfolio
      </h3>
    </div>

    <p className="mb-5 text-base text-slate-300">
      Built with Next.js, TypeScript, and Tailwind CSS
    </p>

    <p className="text-sm text-slate-400">
      © 2026 Chen Shao Yee. All rights reserved.
    </p>
  </div>
</footer>
    </main>
  );
}