import React from 'react';
import SectionHeader from './SectionHeader';
import { PROJECTS_DATA } from '../constants';

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <SectionHeader number="03" title="Projects" />
      <div className="space-y-16">
        {PROJECTS_DATA.map((project, index) => (
          <div key={index} className="max-w-4xl">
            <header className="mb-4">
              <div className="flex justify-between items-baseline">
                <h3 className="text-xl font-bold text-lightest-slate group-hover:text-brand transition-colors">
                  {project.title}
                </h3>
                <span className="text-xs font-mono text-slate">{project.duration}</span>
              </div>
              <p className="text-md text-brand font-mono mt-1">{project.subtitle}</p>
            </header>
            <ul className="space-y-2 text-slate list-inside">
              {project.points.map((point, i) => (
                <li key={i} className="relative pl-5 before:content-['▹'] before:absolute before:left-0 before:text-brand">
                  {point}
                </li>
              ))}
            </ul>
             <a href={project.demoUrl} target="_blank" rel="noopener noreferrer"
               className="inline-block mt-4 bg-transparent border border-brand text-brand font-mono py-2 px-4 rounded hover:bg-brand hover:bg-opacity-10 transition-colors duration-300 text-sm">
              Live Demo
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
