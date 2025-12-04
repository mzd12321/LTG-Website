import React, { useState, useEffect, useRef, FormEvent } from 'react';
import { GoogleGenAI, Chat } from '@google/genai';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import ChatIcon from '../../assets/ChatIcon';
import { SYSTEM_INSTRUCTION } from '../../constants';

interface Message {
  role: 'user' | 'model';
  text: string;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [chat, setChat] = useState<Chat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (process.env.API_KEY) {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const chatSession = ai.chats.create({
        model: 'gemini-2.5-flash',
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
        },
      });
      setChat(chatSession);
    }
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);
  
  const handleSendMessage = async (e: FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || !chat || isLoading) return;

    const userMessage: Message = { role: 'user', text: inputValue };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
        const responseStream = await chat.sendMessageStream({ message: inputValue });
        
        let fullResponse = '';
        setMessages(prev => [...prev, { role: 'model', text: '' }]);

        for await (const chunk of responseStream) {
            fullResponse += chunk.text;
            setMessages(prev => {
                const newMessages = [...prev];
                newMessages[newMessages.length - 1].text = fullResponse;
                return newMessages;
            });
        }
    } catch (error) {
      console.error("Gemini API Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "Sorry, something went wrong. Please try again." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Chatbot Window */}
      <div className={`fixed bottom-20 right-4 sm:right-6 w-[calc(100%-2rem)] max-w-sm h-[70vh] max-h-[600px] bg-navy-light rounded-2xl shadow-2xl flex flex-col transition-all duration-300 ease-in-out z-50 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
        <header className="flex items-center justify-between p-4 bg-navy rounded-t-2xl">
          <h3 className="font-bold text-white text-lg">LTG AI Assistant</h3>
          <button onClick={() => setIsOpen(false)} className="text-accent hover:text-white" aria-label="Close chat">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </header>

        <div className="flex-1 p-4 overflow-y-auto">
            {messages.length === 0 && !isLoading && (
                <div className="flex flex-col items-center justify-center h-full text-center">
                    <img src="/assets/LTGlogo.png" alt="LTG Logo" className="w-16 h-16 mb-4 opacity-50"/>
                    <p className="text-accent">Hi, I'm Adam! Ask me about tutoring, our mission, or how to book a session. ✨</p>
                </div>
            )}
            <div className="space-y-4">
            {messages.map((msg, index) => (
                <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs md:max-w-sm rounded-xl px-4 py-2 ${msg.role === 'user' ? 'bg-accent text-navy' : 'bg-navy text-white'}`}>
                    <div className="prose prose-sm prose-invert prose-p:my-2 text-white">
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>{msg.text}</ReactMarkdown>
                    </div>
                </div>
                </div>
            ))}
            {isLoading && (
                <div className="flex justify-start">
                    <div className="bg-navy text-white rounded-xl px-4 py-3 flex items-center space-x-2">
                        <span className="h-2 w-2 bg-accent rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                        <span className="h-2 w-2 bg-accent rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                        <span className="h-2 w-2 bg-accent rounded-full animate-bounce"></span>
                    </div>
                </div>
            )}
            <div ref={messagesEndRef} />
            </div>
        </div>

        <form onSubmit={handleSendMessage} className="p-4 border-t border-navy">
          <div className="flex items-center bg-navy rounded-full">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask a question..."
              className="flex-1 w-full bg-transparent text-white px-5 py-3 rounded-full focus:outline-none placeholder-gray-400"
              aria-label="Chat input"
              disabled={isLoading || !chat}
            />
            <button type="submit" disabled={isLoading || !inputValue.trim() || !chat} className="p-2 mr-2 text-accent rounded-full hover:bg-navy-light disabled:opacity-50 disabled:cursor-not-allowed transition-colors" aria-label="Send message">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M3.105 3.106a.5.5 0 01.682-.16L18.5 9.5a.5.5 0 010 .9L3.787 17.06a.5.5 0 01-.682-.161l-1.6-3.2a.5.5 0 01.107-.638L10 12 2.112 8.293a.5.5 0 01-.107-.638l1.6-3.2z"/></svg>
            </button>
          </div>
        </form>
      </div>

      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(prev => !prev)}
        className="fixed bottom-4 right-4 sm:right-6 bg-accent text-navy p-4 rounded-full shadow-lg hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-navy-light focus:ring-white transform transition-transform hover:scale-110 z-50"
        aria-label="Toggle chat"
      >
        {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        ) : (
            <ChatIcon className="h-6 w-6" />
        )}
      </button>
    </>
  );
};

export default Chatbot;
