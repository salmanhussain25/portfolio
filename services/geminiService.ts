import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  // This is a fallback for development. In a real environment, the key should be set.
  console.warn("API_KEY environment variable not set. AI Assistant will not work.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

export const askAI = async (prompt: string): Promise<string> => {
  if (!API_KEY) {
    return "The AI assistant is currently unavailable. The API key is missing.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        systemInstruction: `You are an expert AI assistant for Salman Hussain's portfolio. You are knowledgeable about his skills in algorithms, deep learning (PyTorch, Computer Vision), and web technologies (React, Python).
        Your audience is a recruiter or hiring manager. Answer questions about his projects (Sorting Visualizer, Pathfinding Visualizer), skills, and experience (Algorithm Designer, Deep Learning Intern) based on his resume.
        Be professional, concise, and helpful.`,
      }
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API call failed:", error);
    return "Sorry, I encountered an error while processing your request. Please try again.";
  }
};
