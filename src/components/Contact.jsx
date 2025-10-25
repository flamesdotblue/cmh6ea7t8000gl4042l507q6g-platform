import React from 'react';
import { Mail, Github, Linkedin, MapPin, GraduationCap } from 'lucide-react';

export default function Contact() {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-10">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Let's connect</h2>
            <p className="mt-3 text-slate-300">
              I'm open to internships, research, and collaborative projects in systems, web technologies, and machine learning.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-3">
              <a href="mailto:your.name@uom.lk" className="inline-flex items-center gap-2 rounded-md bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-5 py-2.5 font-medium transition-colors">
                <Mail className="w-4 h-4" />
                your.name@uom.lk
              </a>
              <div className="flex items-center gap-2">
                <a aria-label="GitHub" href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-white/15 hover:border-white/25 px-4 py-2">
                  <Github className="w-4 h-4" /> GitHub
                </a>
                <a aria-label="LinkedIn" href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-white/15 hover:border-white/25 px-4 py-2">
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-xl border border-white/10 bg-slate-900/40 p-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-cyan-300 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Moratuwa, Sri Lanka</div>
                  <div className="text-sm text-slate-300">Based near Colombo, available for remote and onsite roles.</div>
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-white/10 bg-slate-900/40 p-4">
              <div className="flex items-start gap-3">
                <GraduationCap className="w-5 h-5 text-cyan-300 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">University of Moratuwa</div>
                  <div className="text-sm text-slate-300">Department of Computer Science and Engineering (CSE)</div>
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-white/10 bg-slate-900/40 p-4">
              <div className="text-sm text-slate-300 leading-relaxed">
                Resume and transcripts available on request. Feel free to reach out via email or LinkedIn.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
