
import React from 'react';
import SectionHeader from './SectionHeader';

export default function About() {
  return (
    <section id="about" className="py-24 max-w-4xl">
      <SectionHeader number="01" title="About Me" />
      <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-start">
        <div className="md:col-span-3 text-slate text-lg space-y-4">
          <p>
            Hello! I'm Alex, a software developer with a deep interest in backend technologies. My journey into programming began with a fascination for how complex systems work behind the scenes, which naturally led me to the world of servers, databases, and APIs.
          </p>
          <p>
            I recently graduated with a degree in Computer Science, where I honed my skills in Node.js, Express, and both SQL and NoSQL databases. I am driven by the challenge of architecting and building the backbone of applications, ensuring they are not only functional but also scalable and secure.
          </p>
          <p>
            I'm a quick learner, a collaborative team player, and I'm eager to apply my skills to real-world challenges and contribute to impactful projects.
          </p>
        </div>
        <div className="md:col-span-2 flex justify-center">
            <div className="relative w-64 h-64 group">
                <div className="absolute inset-0 bg-brand rounded-lg transform transition-transform duration-300 group-hover:translate-x-3 group-hover:translate-y-3"></div>
                <img 
                    className="absolute inset-0 w-full h-full object-cover rounded-lg z-10" 
                    src="https://picsum.photos/300/300" 
                    alt="Alex Doe"
                />
            </div>
        </div>
      </div>
    </section>
  );
}
