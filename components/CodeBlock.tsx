
import React from 'react';

interface CodeBlockProps {
  title: string;
  code: string;
  language: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ title, code, language }) => {
  return (
    <div className="bg-light-navy rounded-lg overflow-hidden shadow-lg">
      <div className="bg-lightest-navy px-4 py-2 flex items-center justify-between">
        <span className="text-xs font-mono text-light-slate">{title}</span>
        <span className="text-xs font-mono text-brand capitalize">{language}</span>
      </div>
      <pre className="p-4 text-sm text-lightest-slate overflow-x-auto">
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;
