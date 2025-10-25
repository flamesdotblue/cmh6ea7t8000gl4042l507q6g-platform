import React from 'react';
import { GraduationCap, Github, Linkedin, Mail } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/50 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 text-slate-100">
          <GraduationCap className="w-6 h-6 text-cyan-400" />
          <span className="font-semibold tracking-tight">CS @ UoM</span>
        </a>
        <nav className="hidden sm:flex items-center gap-6 text-sm">
          <a href="#home" className="hover:text-cyan-300 transition-colors">Home</a>
          <a href="#projects" className="hover:text-cyan-300 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-cyan-300 transition-colors">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <a aria-label="Email" href="mailto:your.name@uom.lk" className="p-2 rounded-md hover:bg-white/10 transition-colors">
            <Mail className="w-5 h-5" />
          </a>
          <a aria-label="GitHub" href="https://github.com/" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-white/10 transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a aria-label="LinkedIn" href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-white/10 transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </header>
  );
}
