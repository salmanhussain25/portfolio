import React from 'react';
import SectionHeader from './SectionHeader';
import { EDUCATION_DATA } from '../constants';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-24">
      <SectionHeader number="01" title="Education" />
      <div className="max-w-4xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="p-3 font-semibold tracking-wide text-sm text-lightest-slate border-b-2 border-lightest-navy">Degree/Certificate</th>
                <th className="p-3 font-semibold tracking-wide text-sm text-lightest-slate border-b-2 border-lightest-navy">Institute/Board</th>
                <th className="p-3 font-semibold tracking-wide text-sm text-lightest-slate border-b-2 border-lightest-navy">CGPA/Percentage</th>
                <th className="p-3 font-semibold tracking-wide text-sm text-lightest-slate border-b-2 border-lightest-navy">Year</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-lightest-navy">
              {EDUCATION_DATA.map((edu, index) => (
                <tr key={index} className="bg-navy hover:bg-light-navy transition-colors">
                  <td className="p-3 text-slate whitespace-nowrap font-medium">{edu.degree}</td>
                  <td className="p-3 text-slate whitespace-nowrap">{edu.institute}</td>
                  <td className="p-3 text-slate whitespace-nowrap font-mono">{edu.grade}</td>
                  <td className="p-3 text-slate whitespace-nowrap font-mono">{edu.year}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Education;
