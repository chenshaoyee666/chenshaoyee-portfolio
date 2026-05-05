import { Mail } from "lucide-react";
import { profile } from "@/data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="mb-6 text-3xl font-bold text-cyan-300">Contact</h2>

        <p className="mb-8 text-lg leading-8 text-slate-300">
          I am open to internships, collaborations, and project opportunities.
          Feel free to reach out.
        </p>

        <a
          href={`mailto:${profile.email}`}
          className="inline-flex items-center gap-3 rounded-full bg-cyan-400 px-8 py-4 font-semibold text-slate-950 transition hover:bg-cyan-300"
        >
          <Mail size={20} />
          Contact Me
        </a>
      </div>
    </section>
  );
}