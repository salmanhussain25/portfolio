import React from 'react';

const SocialLink = ({ href, ariaLabel, children }: { href: string; ariaLabel: string; children: React.ReactNode }) => (
  <a
    href={href}
    aria-label={ariaLabel}
    target="_blank"
    rel="noopener noreferrer"
    className="text-light-slate hover:text-brand transition-colors duration-300"
  >
    {children}
  </a>
);

export default function Header() {
  return (
    <header className="container mx-auto px-6 md:px-12 lg:px-24 pt-24 pb-12">
      <div className="flex flex-col md:flex-row justify-between md:items-start">
        <div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-lightest-slate">Salman Hussain</h2>
          <p className="text-lg text-slate mt-2">B.Tech - Electronics and Electrical Engineering</p>
          <p className="text-lg text-slate">Indian Institute of Technology, Guwahati</p>
        </div>
        <div className="text-left md:text-right text-sm font-mono text-slate mt-4 md:mt-0">
          <a href="tel:+91-7017201094" className="hover:text-brand transition-colors">+91-7017201094</a>
          <br />
          <a href="mailto:salmanhussain9057@gmail.com" className="hover:text-brand transition-colors">salmanhussain9057@gmail.com</a>
          <br />
          <a href="mailto:h.salman@alumni.iitg.ac.in" className="hover:text-brand transition-colors">h.salman@alumni.iitg.ac.in</a>
          <div className="flex md:justify-end space-x-4 mt-2">
            <SocialLink href="#" ariaLabel="LinkedIn">LinkedIn</SocialLink>
            <SocialLink href="#" ariaLabel="GitHub">GitHub</SocialLink>
          </div>
        </div>
      </div>
      <p className="mt-8 max-w-3xl text-lg text-slate">
        A final year undergraduate at IIT Guwahati with a passion for Algorithm Design and Deep Learning. Proven experience in developing and optimizing complex systems through internships and projects. Eager to leverage skills in Python, C++, and machine learning to tackle challenging problems and build innovative solutions.
      </p>
      <div className="mt-8">
        <a href="#" className="inline-block bg-transparent border border-brand text-brand font-mono py-3 px-6 rounded hover:bg-brand hover:bg-opacity-10 transition-colors duration-300">
          View Resume
        </a>
      </div>
    </header>
  );
}
