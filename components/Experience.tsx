import React from 'react';
import SectionHeader from './SectionHeader';
import { EXPERIENCE_DATA } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24">
      <SectionHeader number="02" title="Experience" />
      <div className="max-w-4xl space-y-12">
        {EXPERIENCE_DATA.map((job, index) => (
          <div key={index}>
            <header>
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="text-xl font-bold text-lightest-slate">
                  {job.role}
                  <span className="text-brand"> @ {job.company}</span>
                </h3>
                <p className="text-sm font-mono text-slate">{job.duration}</p>
              </div>
            </header>
            <ul className="mt-2 space-y-2 list-inside">
              {job.points.map((point, i) => (
                <li key={i} className="relative pl-5 text-slate before:content-['▹'] before:absolute before:left-0 before:text-brand">
                  {point}
                </li>
              ))}
            </ul>
            <div className="mt-3 flex flex-wrap gap-2">
              {job.skills.map((skill) => (
                <span key={skill} className="bg-lightest-navy text-brand text-xs font-mono px-2 py-1 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
