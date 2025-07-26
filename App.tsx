
import React, { useState } from 'react';
import Header from './components/Header';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';

export default function App() {
  const [isAIAssistantOpen, setIsAIAssistantOpen] = useState(false);

  return (
    <div className="bg-navy text-slate font-sans leading-relaxed antialiased selection:bg-brand selection:text-navy">
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="container mx-auto px-6 md:px-12 lg:px-24 py-12 space-y-24">
          <Education />
          <Experience />
          <Projects />
          <Achievements />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
      
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsAIAssistantOpen(!isAIAssistantOpen)}
          className="bg-brand text-navy p-4 rounded-full shadow-lg hover:bg-opacity-80 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-brand focus:ring-opacity-50"
          aria-label="Open AI Assistant"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
            <path fillRule="evenodd" d="M12.965 2.54a1 1 0 00-1.93 0l-1.332 4.024a1 1 0 01-.95.69h-4.22a1 1 0 00-.97 1.233l2.095 5.238a1 1 0 01.028 1.05l-2.095 5.238a1 1 0 00.97 1.233h4.22a1 1 0 01.95.69l1.332 4.024a1 1 0 001.93 0l1.332-4.024a1 1 0 01.95-.69h4.22a1 1 0 00.97-1.233l-2.095-5.238a1 1 0 01-.028-1.05l2.095-5.238a1 1 0 00-.97-1.233h-4.22a1 1 0 01-.95-.69L12.965 2.54z" clipRule="evenodd" />
            <path d="M14 6a1 1 0 011 1v1a1 1 0 11-2 0V7a1 1 0 011-1zM12 11a1 1 0 100 2h.01a1 1 0 100-2H12zM14 16a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1z" />
          </svg>
        </button>
      </div>

      <AIAssistant isOpen={isAIAssistantOpen} onClose={() => setIsAIAssistantOpen(false)} />
    </div>
  );
}
