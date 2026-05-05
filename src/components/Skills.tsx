import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-8 text-3xl font-bold text-cyan-300">Skills</h2>

        <div className="flex flex-wrap gap-4">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-5 py-3 text-sm font-medium text-cyan-100"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}