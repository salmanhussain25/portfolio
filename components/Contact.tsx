import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 text-center max-w-2xl mx-auto">
      <h2 className="text-brand font-mono mb-4">06. What's Next?</h2>
      <h3 className="text-4xl md:text-5xl font-bold text-lightest-slate mb-4">Get In Touch</h3>
      <p className="text-slate mb-8">
        I'm currently seeking new opportunities and my inbox is always open. Whether you have a question, a project proposal, or just want to say hi, I'll do my best to get back to you!
      </p>
      <a
        href="mailto:salmanhussain9057@gmail.com"
        className="inline-block bg-transparent border border-brand text-brand font-mono py-4 px-8 rounded hover:bg-brand hover:bg-opacity-10 transition-colors duration-300"
      >
        Say Hello
      </a>
    </section>
  );
}
