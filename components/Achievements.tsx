import React from 'react';
import SectionHeader from './SectionHeader';
import { ACHIEVEMENTS_DATA } from '../constants';

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-24">
      <SectionHeader number="04" title="Achievements" />
      <div className="max-w-4xl">
        <ul className="space-y-4">
          {ACHIEVEMENTS_DATA.map((item, index) => (
            <li key={index} className="relative pl-5 text-slate before:content-['▹'] before:absolute before:left-0 before:text-brand">
              <span className="font-semibold text-light-slate">{item.text}</span>
              {item.details && <span className="text-slate">, {item.details}</span>}
              {item.linkText && item.linkUrl && (
                <a href={item.linkUrl} target="_blank" rel="noopener noreferrer" className="ml-2 text-brand font-mono hover:underline text-sm">
                  {item.linkText}
                </a>
              )}
               {item.linkText && !item.linkUrl && (
                <span className="ml-2 text-slate font-mono text-sm">{item.linkText}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Achievements;
