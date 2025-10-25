import React from 'react';
import Spline from '@splinetool/react-spline';
import { Code, Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-cyan-300">
            <Rocket className="w-3.5 h-3.5" />
            Interactive CS Portfolio
          </div>
          <h1 className="mt-5 text-4xl md:text-6xl font-extrabold tracking-tight text-white">
            Hi, I'm a CS Undergraduate at the University of Moratuwa
          </h1>
          <p className="mt-4 text-slate-300 leading-relaxed">
            I love building scalable web apps, exploring systems programming, and solving real-world problems with clean, modern code.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-2">
            {['TypeScript', 'React', 'Node.js', 'Python', 'Docker', 'PostgreSQL'].map((s) => (
              <span key={s} className="text-xs rounded-full border border-white/10 bg-white/5 px-3 py-1 text-slate-200">
                {s}
              </span>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-md bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-5 py-2.5 font-medium transition-colors">
              <Code className="w-4 h-4" />
              View Projects
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-md border border-white/15 hover:border-white/25 text-white px-5 py-2.5 font-medium transition-colors">
              Get in Touch
            </a>
          </div>
        </div>

        <div className="relative h-[360px] sm:h-[420px] md:h-[520px] rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-b from-slate-800/40 to-slate-900/40">
          <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
        </div>
      </div>
    </div>
  );
}
