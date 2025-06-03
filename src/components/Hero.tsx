
import { useState, useEffect } from 'react';
import { Play, Pause, Volume2, Heart, Star, Users } from 'lucide-react';

const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const inspirationalTexts = [
    "Every learner deserves access to knowledge",
    "Your vision is not a limitation—it's your superpower",
    "Technology breaks barriers, education builds futures",
    "Together, we learn beyond what eyes can see"
  ];

  // Cycle through inspirational texts
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex(prev => (prev + 1) % inspirationalTexts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [inspirationalTexts.length]);

  const handleTextToSpeech = () => {
    if ('speechSynthesis' in window) {
      if (isPlaying) {
        window.speechSynthesis.cancel();
        setIsPlaying(false);
      } else {
        const utterance = new SpeechSynthesisUtterance(
          "Welcome to Education Beyond Sight. A revolutionary platform where learning knows no boundaries. Every student deserves access to world-class education, and we're here to make that vision a reality."
        );
        utterance.rate = 0.8;
        utterance.pitch = 1;
        utterance.onend = () => setIsPlaying(false);
        window.speechSynthesis.speak(utterance);
        setIsPlaying(true);
      }
    }
  };

  return (
    <section 
      className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 pt-20 pb-16"
      role="banner"
      aria-labelledby="hero-heading"
    >
      {/* Background pattern for visual interest (hidden from screen readers) */}
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main heading */}
          <h1 
            id="hero-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Education{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Beyond Sight
            </span>
          </h1>

          {/* Dynamic inspirational text */}
          <div className="h-16 mb-8 flex items-center justify-center">
            <p 
              className="text-xl sm:text-2xl text-gray-700 font-medium transition-all duration-1000 ease-in-out"
              aria-live="polite"
              aria-atomic="true"
            >
              {inspirationalTexts[currentTextIndex]}
            </p>
          </div>

          {/* Mission statement */}
          <p className="text-lg sm:text-xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            A revolutionary platform where learning knows no boundaries. Every student deserves access to 
            world-class education, and we're here to make that vision a reality through voice-powered learning, 
            accessible design, and cutting-edge technology.
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              onClick={handleTextToSpeech}
              className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300 flex items-center gap-3 shadow-lg"
              aria-label={isPlaying ? "Stop reading introduction" : "Listen to introduction"}
            >
              {isPlaying ? (
                <Pause className="w-5 h-5" aria-hidden="true" />
              ) : (
                <Volume2 className="w-5 h-5" aria-hidden="true" />
              )}
              {isPlaying ? 'Stop Audio' : 'Listen to Introduction'}
            </button>
            
            <a
              href="/courses"
              className="group bg-white hover:bg-gray-50 text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300 flex items-center gap-3 shadow-lg"
              aria-label="Start your learning journey"
            >
              <Play className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              Start Learning
            </a>
          </div>

          {/* Impact stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-lg">
                <Heart className="w-8 h-8 text-red-500" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Empowering</h3>
              <p className="text-gray-600">Breaking barriers through accessible education</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-lg">
                <Star className="w-8 h-8 text-yellow-500" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Excellence</h3>
              <p className="text-gray-600">World-class curriculum designed for everyone</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-lg">
                <Users className="w-8 h-8 text-blue-500" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Community</h3>
              <p className="text-gray-600">Learning together, growing together</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
