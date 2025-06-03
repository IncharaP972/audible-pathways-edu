
import { useState } from 'react';
import { MessageSquare, Heart, Code, Send, Mic, MicOff } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import AIAssistant from '../components/AIAssistant';

const Chatbot = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeMode, setActiveMode] = useState('mitra');
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isListening, setIsListening] = useState(false);

  const chatModes = [
    {
      id: 'mitra',
      name: 'Mitra',
      description: 'Your friendly learning companion',
      icon: Heart,
      color: 'from-pink-500 to-rose-500',
      personality: 'Supportive, encouraging, and patient. Perfect for motivation and emotional support.',
      sampleMessages: [
        "Hi! I'm Mitra, your learning buddy. How are you feeling about your studies today?",
        "Remember, every small step counts! What would you like to learn together?",
        "You're doing great! Don't worry if something seems difficult - we'll figure it out together."
      ]
    },
    {
      id: 'professional',
      name: 'TechMentor',
      description: 'Professional technical assistant',
      icon: Code,
      color: 'from-blue-500 to-indigo-500',
      personality: 'Technical, precise, and solution-focused. Great for coding help and technical guidance.',
      sampleMessages: [
        "Hello! I'm TechMentor, your technical assistant. What programming challenge can I help you with?",
        "Let's break down this problem step by step. What specific area would you like to focus on?",
        "Here's the optimal solution. Would you like me to explain the time and space complexity?"
      ]
    }
  ];

  const currentMode = chatModes.find(mode => mode.id === activeMode);

  const sendMessage = () => {
    if (!inputMessage.trim()) return;
    
    const newMessage = {
      id: Date.now(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, newMessage]);
    
    // Simulate AI response
    setTimeout(() => {
      const responses = currentMode.sampleMessages;
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      
      const aiMessage = {
        id: Date.now() + 1,
        text: randomResponse,
        sender: 'ai',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiMessage]);
    }, 1000);
    
    setInputMessage('');
  };

  const toggleListening = () => {
    setIsListening(!isListening);
    // Placeholder for voice input
  };

  const switchMode = (modeId) => {
    setActiveMode(modeId);
    const switchMessage = {
      id: Date.now(),
      text: `Switched to ${chatModes.find(m => m.id === modeId).name} mode`,
      sender: 'system',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, switchMessage]);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation isOpen={isNavOpen} setIsOpen={setIsNavOpen} />
      
      <main className="pt-16" role="main">
        {/* Header */}
        <section className={`bg-gradient-to-r ${currentMode.color} text-white py-16`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-4 flex items-center">
              <currentMode.icon className="w-10 h-10 mr-4" />
              {currentMode.name} - AI Assistant
            </h1>
            <p className="text-xl opacity-90">{currentMode.description}</p>
          </div>
        </section>

        <div className="py-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Mode Selector */}
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4">Choose Your Assistant</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {chatModes.map((mode) => (
                  <div
                    key={mode.id}
                    onClick={() => switchMode(mode.id)}
                    className={`cursor-pointer rounded-lg p-6 border-2 transition-all ${
                      activeMode === mode.id
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center mb-3">
                      <div className={`p-3 rounded-full bg-gradient-to-r ${mode.color} text-white mr-4`}>
                        <mode.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{mode.name}</h3>
                        <p className="text-gray-600">{mode.description}</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-700">{mode.personality}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Chat Interface */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Chat Header */}
              <div className={`bg-gradient-to-r ${currentMode.color} text-white p-4`}>
                <div className="flex items-center">
                  <currentMode.icon className="w-6 h-6 mr-3" />
                  <div>
                    <h3 className="font-semibold">{currentMode.name}</h3>
                    <p className="text-sm opacity-90">Online • Ready to help</p>
                  </div>
                </div>
              </div>

              {/* Messages Area */}
              <div className="h-96 overflow-y-auto p-4 space-y-4">
                {messages.length === 0 && (
                  <div className="text-center py-8">
                    <currentMode.icon className="w-16 h-16 mx-auto text-gray-300 mb-4" />
                    <p className="text-gray-500">Start a conversation with {currentMode.name}!</p>
                  </div>
                )}
                
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${
                      message.sender === 'user' ? 'justify-end' : 
                      message.sender === 'system' ? 'justify-center' : 'justify-start'
                    }`}
                  >
                    <div
                      className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                        message.sender === 'user'
                          ? 'bg-blue-600 text-white'
                          : message.sender === 'system'
                          ? 'bg-gray-200 text-gray-700 text-sm'
                          : 'bg-gray-100 text-gray-900'
                      }`}
                    >
                      <p>{message.text}</p>
                      <p className={`text-xs mt-1 ${
                        message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
                      }`}>
                        {message.timestamp.toLocaleTimeString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Input Area */}
              <div className="border-t border-gray-200 p-4">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                    placeholder={`Ask ${currentMode.name} anything...`}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  
                  <button
                    onClick={toggleListening}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      isListening
                        ? 'bg-red-500 text-white hover:bg-red-600'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                    aria-label={isListening ? "Stop voice input" : "Start voice input"}
                  >
                    {isListening ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
                  </button>
                  
                  <button
                    onClick={sendMessage}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    disabled={!inputMessage.trim()}
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
                
                {isListening && (
                  <div className="mt-2 flex items-center text-red-600 text-sm">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse mr-2"></div>
                    Listening for voice input...
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <AIAssistant />
      <Footer />
    </div>
  );
};

export default Chatbot;
