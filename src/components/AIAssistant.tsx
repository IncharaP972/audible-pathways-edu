
import { useState, useRef, useEffect } from 'react';
import { MessageSquare, Mic, MicOff, Volume2, VolumeX, Settings, X } from 'lucide-react';

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [message, setMessage] = useState('');
  const [conversation, setConversation] = useState([
    { type: 'assistant', text: 'Hello! I\'m your AI navigation assistant. I can help you navigate the site, find courses, or answer questions. How can I assist you today?' }
  ]);
  
  const assistantRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Handle escape key to close assistant
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Focus management
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const toggleListening = () => {
    if (isListening) {
      // Stop listening
      setIsListening(false);
      // In real implementation, stop speech recognition
    } else {
      // Start listening
      setIsListening(true);
      // In real implementation, start speech recognition
      // Placeholder: simulate recognition after 3 seconds
      setTimeout(() => {
        setMessage("Navigate to courses");
        setIsListening(false);
      }, 3000);
    }
  };

  const speakMessage = (text: string) => {
    if ('speechSynthesis' in window) {
      if (isSpeaking) {
        window.speechSynthesis.cancel();
        setIsSpeaking(false);
      } else {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 0.8;
        utterance.pitch = 1;
        utterance.onend = () => setIsSpeaking(false);
        window.speechSynthesis.speak(utterance);
        setIsSpeaking(true);
      }
    }
  };

  const sendMessage = () => {
    if (!message.trim()) return;
    
    // Add user message
    const newConversation = [
      ...conversation,
      { type: 'user', text: message }
    ];
    
    // Simulate AI response
    const responses = [
      "I'll help you navigate to the courses section. Would you like to see tech courses or non-tech courses?",
      "Here are the available pronunciation guides. Would you like me to read them out loud?",
      "I can guide you through the voice-controlled code editor. Let's start with the basics.",
      "The physical education section has yoga and physiotherapy exercises. Shall I navigate you there?"
    ];
    
    setTimeout(() => {
      const aiResponse = responses[Math.floor(Math.random() * responses.length)];
      setConversation(prev => [...prev, { type: 'assistant', text: aiResponse }]);
    }, 1000);
    
    setConversation(newConversation);
    setMessage('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <>
      {/* Floating Assistant Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-blue-300 z-50 ${isOpen ? 'hidden' : 'block'}`}
        aria-label="Open AI Navigation Assistant"
      >
        <MessageSquare className="w-6 h-6" aria-hidden="true" />
        {isListening && (
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse" aria-hidden="true"></div>
        )}
      </button>

      {/* Assistant Panel */}
      {isOpen && (
        <div 
          ref={assistantRef}
          className="fixed bottom-6 right-6 w-96 max-w-[calc(100vw-3rem)] bg-white rounded-2xl shadow-2xl border border-gray-200 z-50"
          role="dialog"
          aria-labelledby="ai-assistant-title"
          aria-modal="true"
        >
          {/* Header */}
          <div className="bg-blue-600 text-white p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <MessageSquare className="w-4 h-4" aria-hidden="true" />
              </div>
              <h3 id="ai-assistant-title" className="font-semibold">AI Navigation Assistant</h3>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
              aria-label="Close AI Assistant"
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>

          {/* Conversation Area */}
          <div className="h-80 overflow-y-auto p-4 space-y-4">
            {conversation.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl ${
                    msg.type === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-900'
                  }`}
                >
                  <p className="text-sm">{msg.text}</p>
                  {msg.type === 'assistant' && (
                    <button
                      onClick={() => speakMessage(msg.text)}
                      className="mt-2 text-xs text-blue-600 hover:text-blue-700 focus:outline-none focus:underline flex items-center gap-1"
                      aria-label={isSpeaking ? "Stop reading message" : "Read message aloud"}
                    >
                      {isSpeaking ? <VolumeX className="w-3 h-3" /> : <Volume2 className="w-3 h-3" />}
                      {isSpeaking ? 'Stop' : 'Listen'}
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your question or use voice..."
                className="flex-1 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Type your message to AI assistant"
              />
              <button
                onClick={toggleListening}
                className={`p-3 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  isListening
                    ? 'bg-red-500 hover:bg-red-600 text-white'
                    : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                }`}
                aria-label={isListening ? "Stop voice input" : "Start voice input"}
              >
                {isListening ? (
                  <MicOff className="w-5 h-5" aria-hidden="true" />
                ) : (
                  <Mic className="w-5 h-5" aria-hidden="true" />
                )}
              </button>
              <button
                onClick={sendMessage}
                className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Send message"
              >
                Send
              </button>
            </div>
            
            {isListening && (
              <div className="mt-3 flex items-center gap-2 text-sm text-red-600">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" aria-hidden="true"></div>
                Listening... (Speak now)
              </div>
            )}
          </div>
        </div>
      )}

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-25 z-40" 
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default AIAssistant;
