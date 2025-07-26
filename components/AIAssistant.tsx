
import React, { useState, useEffect, useRef } from 'react';
import { Message } from '../types';
import { askAI } from '../services/geminiService';

interface AIAssistantProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AIAssistant({ isOpen, onClose }: AIAssistantProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);
  
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{ sender: 'ai', text: "Hello! I'm a backend assistant. Ask me to explain any of the concepts or code snippets you see on this page." }]);
    }
  }, [isOpen, messages.length]);


  const handleSend = async () => {
    if (input.trim() === '' || isLoading) return;
    const userMessage: Message = { sender: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const aiResponse = await askAI(input);
      const aiMessage: Message = { sender: 'ai', text: aiResponse };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      const errorMessage: Message = { sender: 'ai', text: 'Sorry, something went wrong.' };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center" onClick={onClose}>
      <div 
        className="bg-light-navy rounded-lg shadow-2xl w-full max-w-lg h-[70vh] flex flex-col transform transition-all duration-300 scale-95 opacity-0 animate-fade-in-up"
        onClick={(e) => e.stopPropagation()}
        style={{ animationFillMode: 'forwards' }}
      >
        <div className="flex justify-between items-center p-4 border-b border-lightest-navy">
          <h3 className="text-lg font-bold text-lightest-slate flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-brand" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v1.946l4.06-2.556a1 1 0 011.357 1.47l-2.556 4.062V8a1 1 0 01-2 0V6.054L8.94 8.61a1 1 0 01-1.47-1.357L11.53 3.2H10a1 1 0 010-2h1.3zm-2.6 7.908a1 1 0 01-1.47 1.357L3.2 6.254a1 1 0 011.357-1.47l4.06 2.556v-1.94a1 1 0 112 0v1.946l3.94-2.456a1 1 0 011.356 1.472l-2.455 3.94V8a1 1 0 11-2 0v-.853l-3.94 2.76zM8 12a1 1 0 011-1h1.946l-2.556-4.06a1 1 0 011.357-1.47L13.746 9.2H16a1 1 0 110 2h-2.254l-3.94 3.746a1 1 0 01-1.47-1.357L11.054 12H9a1 1 0 01-1-1zm8.954.3A1 1 0 0116 14v1.946l-4.06 2.556a1 1 0 01-1.357-1.47l2.556-4.062V11a1 1 0 112 0v1.946l3.94-2.455a1 1 0 011.47 1.356L18 16.054V18a1 1 0 11-2 0v.853l3.94-2.76a1 1 0 01-.287-1.697z" clipRule="evenodd" /></svg>
            Backend AI Assistant
          </h3>
          <button onClick={onClose} className="text-slate hover:text-brand">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="flex-1 p-4 overflow-y-auto space-y-4">
          {messages.map((msg, index) => (
            <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`rounded-lg px-4 py-2 max-w-sm ${msg.sender === 'user' ? 'bg-brand text-navy' : 'bg-lightest-navy text-lightest-slate'}`}>
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
               <div className="rounded-lg px-4 py-2 bg-lightest-navy text-lightest-slate">
                <span className="animate-pulse">...</span>
               </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        <div className="p-4 border-t border-lightest-navy">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about Node, Express, SQL..."
              className="flex-1 bg-navy border border-lightest-navy rounded-md px-4 py-2 text-lightest-slate focus:outline-none focus:ring-2 focus:ring-brand"
              disabled={isLoading}
            />
            <button
              onClick={handleSend}
              disabled={isLoading}
              className="bg-brand text-navy font-bold px-4 py-2 rounded-md disabled:bg-slate disabled:cursor-not-allowed transition-colors"
            >
              Send
            </button>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes fade-in-up {
          from { transform: scale(0.95) translateY(20px); opacity: 0; }
          to { transform: scale(1) translateY(0); opacity: 1; }
        }
        .animate-fade-in-up { animation: fade-in-up 0.3s ease-out; }
      `}</style>
    </div>
  );
}
