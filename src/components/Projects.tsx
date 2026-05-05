import { ExternalLink } from "lucide-react";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-8 text-3xl font-bold text-cyan-300">Projects</h2>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl transition hover:-translate-y-2 hover:bg-white/10"
            >
              <h3 className="mb-3 text-xl font-bold">{project.title}</h3>

              <p className="mb-5 leading-7 text-slate-400">
                {project.description}
              </p>

              <div className="mb-5 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={project.github}
                  className="flex items-center gap-2 text-sm text-slate-300 hover:text-cyan-300"
                >
                  Code
                </a>

                <a
                  href={project.demo}
                  className="flex items-center gap-2 text-sm text-slate-300 hover:text-cyan-300"
                >
                  <ExternalLink size={16} />
                  Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}