import React from 'react';
import SectionHeader from './SectionHeader';
import { TECHNICAL_SKILLS, KEY_COURSES } from '../constants';

export default function Skills() {
  return (
    <section id="skills" className="py-24 max-w-4xl">
      <SectionHeader number="05" title="Skills & Coursework" />
      <div>
        <h3 className="text-xl font-bold text-light-slate mb-6">Technical Skills</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {TECHNICAL_SKILLS.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center justify-center bg-light-navy p-4 rounded-lg shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-brand/20"
            >
              {skill.icon && <img src={skill.icon} alt={`${skill.name} logo`} className="h-12 w-12 mb-3" />}
              <p className="text-light-slate text-center font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-16">
        <h3 className="text-xl font-bold text-light-slate mb-6">Key Courses</h3>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-2 font-mono text-slate">
          {KEY_COURSES.map((course) => (
            <li key={course} className="relative pl-5 before:content-['▹'] before:absolute before:left-0 before:text-brand">
              {course}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
