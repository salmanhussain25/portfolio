
import React from 'react';

interface SectionHeaderProps {
  number: string;
  title: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ number, title }) => (
  <h2 className="flex items-center text-2xl md:text-3xl font-bold text-lightest-slate mb-8">
    <span className="text-brand font-mono text-xl md:text-2xl mr-4">{number}.</span>
    {title}
    <span className="flex-grow h-px bg-lightest-navy ml-6"></span>
  </h2>
);

export default SectionHeader;
