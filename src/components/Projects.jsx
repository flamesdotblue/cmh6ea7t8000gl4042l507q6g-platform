import React from 'react';
import { ExternalLink, Code } from 'lucide-react';

const projects = [
  {
    title: 'Realtime Campus Navigator',
    desc: 'A web app that helps students navigate UoM buildings with live routing and accessibility info.',
    stack: ['TypeScript', 'React', 'Map APIs', 'WebSockets'],
    link: '#',
  },
  {
    title: 'Parallel Matrix Engine',
    desc: 'High-performance matrix operations written in C++ with OpenMP, benchmarked against NumPy.',
    stack: ['C++', 'OpenMP', 'Benchmarking'],
    link: '#',
  },
  {
    title: 'MediChain',
    desc: 'A secure, role-based medical records system with audit trails and encrypted storage.',
    stack: ['Node.js', 'PostgreSQL', 'Prisma', 'Docker'],
    link: '#',
  },
];

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex items-end justify-between mb-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Featured Projects</h2>
          <p className="mt-2 text-slate-300">A selection of academic and personal work.</p>
        </div>
        <a href="#contact" className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-md border border-white/15 hover:border-white/25 text-sm">
          <Code className="w-4 h-4" />
          Collaborate
        </a>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <article key={p.title} className="group relative rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors overflow-hidden">
            <div className="p-5">
              <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span key={s} className="text-[11px] rounded-full border border-white/10 bg-slate-900/40 px-2.5 py-1 text-slate-200">
                    {s}
                  </span>
                ))}
              </div>
              <div className="mt-5">
                <a href={p.link} className="inline-flex items-center gap-1.5 text-cyan-300 hover:text-cyan-200 text-sm">
                  <ExternalLink className="w-4 h-4" />
                  View project
                </a>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-b from-transparent via-transparent to-cyan-500/5" />
          </article>
        ))}
      </div>
    </div>
  );
}
