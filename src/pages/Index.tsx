import { useEffect, useState, useRef } from 'react';
import { Volume2 } from 'lucide-react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import FeatureGrid from '../components/FeatureGrid';
import MissionSection from '../components/MissionSection';

const AutoVoiceAssistant = () => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [error, setError] = useState<string>('');
  const recognitionRef = useRef<any>(null);

  const speak = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel(); // Cancel any ongoing speech
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = 1;
      utterance.pitch = 1;
      
      utterance.onend = () => {
        setTimeout(() => {
          startListening();
        }, 1000);
      };
      
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleVoiceCommand = (command: string) => {
    const lowerCommand = command.toLowerCase();
    let response = '';

    // Initial greeting and menu options
    if (lowerCommand.includes('hello') || lowerCommand.includes('hi')) {
      response = "Welcome to EduVision! I can help you navigate to any of these sections: Interactive Courses, Code with Voice, Physical Education, AI Assistant, or Brain Games. Which would you like to explore?";
    }
    // Handle navigation commands
    else if (lowerCommand.includes('course') || lowerCommand.includes('interactive')) {
      response = "Taking you to Interactive Courses";
      window.location.href = '/courses';
    }
    else if (lowerCommand.includes('code') || lowerCommand.includes('voice code')) {
      response = "Opening Code with Voice editor";
      window.location.href = '/code-voice';
    }
    else if (lowerCommand.includes('physical') || lowerCommand.includes('yoga')) {
      response = "Taking you to Physical Education section";
      window.location.href = '/physical-ed';
    }
    else if (lowerCommand.includes('assistant') || lowerCommand.includes('ai')) {
      response = "Connecting you with our AI Assistant";
      window.location.href = '/chatbot';
    }
    else if (lowerCommand.includes('game') || lowerCommand.includes('brain')) {
      response = "Loading Brain Games";
      window.location.href = '/games';
    }
    else if (lowerCommand.includes('home')) {
      response = "Returning to Home page";
      window.location.href = '/';
    }
    else if (lowerCommand.includes('menu') || lowerCommand.includes('options')) {
      response = "Available sections are: Interactive Courses, Code with Voice, Physical Education, AI Assistant, and Brain Games. Which would you like to visit?";
    }
    else {
      response = "I didn't catch that. You can say 'menu' to hear all available options, or directly ask for any section you'd like to visit.";
    }

    speak(response);
  };

  const startListening = () => {
    try {
      if (!('webkitSpeechRecognition' in window)) {
        throw new Error('Speech recognition not supported');
      }

      const SpeechRecognition = window.webkitSpeechRecognition;
      const recognition = new SpeechRecognition();

      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = 'en-US';

      recognition.onstart = () => {
        setIsListening(true);
        setError('');
      };

      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setTranscript(transcript);
        handleVoiceCommand(transcript);
      };

      recognition.onerror = (event: any) => {
        if (event.error === 'no-speech') {
          // Silently restart listening instead of showing error
          startListening();
        } else {
          console.error('Speech recognition error:', event.error);
          setError(event.error);
          setIsListening(false);
        }
      };

      recognition.onend = () => {
        // Don't set isListening to false here
        // Just restart listening
        startListening();
      };

      recognitionRef.current = recognition;
      recognition.start();
    } catch (err) {
      console.error('Speech recognition error:', err);
      setError('Speech recognition failed to initialize');
      setIsListening(false);
    }
  };

  useEffect(() => {
    // Request microphone permission on component mount
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(() => {
        speak("Welcome to EduVision! How can I help you today?");
      })
      .catch((err) => {
        setError('Please enable microphone access to use voice features');
        console.error('Microphone access error:', err);
      });

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
      window.speechSynthesis.cancel();
    };
  }, []);

  return (
    <div
      className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg z-50 flex items-center gap-3"
      role="status"
      aria-live="polite"
    >
      <Volume2 className={`w-5 h-5 ${isListening ? 'animate-pulse' : ''}`} aria-hidden="true" />
      <div className="flex flex-col">
        <span className="font-medium">
          {isListening ? "Listening..." : "Voice Assistant Ready"}
        </span>
        {error && (
          <span className="text-sm text-red-200">{error}</span>
        )}
        {transcript && (
          <span className="text-sm text-blue-200">Last heard: "{transcript}"</span>
        )}
      </div>
    </div>
  );
};

const Index = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Skip to main content link for screen readers */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50"
        aria-label="Skip to main content"
      >
        Skip to main content
      </a>
      
      <Navigation isOpen={isNavOpen} setIsOpen={setIsNavOpen} />
      
      <main id="main-content" role="main" className="pt-16">
        <Hero />
        <MissionSection />
        <FeatureGrid />
      </main>
      <AutoVoiceAssistant />
    </div>
  );
};

export default Index;
