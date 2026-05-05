import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-8 text-3xl font-bold text-cyan-300">Experience</h2>

        <div className="space-y-6">
          {experience.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <div className="mb-2 flex flex-col justify-between gap-2 md:flex-row">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <span className="text-sm text-cyan-300">{item.period}</span>
              </div>

              <p className="mb-3 text-slate-400">{item.company}</p>
              <p className="leading-7 text-slate-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}