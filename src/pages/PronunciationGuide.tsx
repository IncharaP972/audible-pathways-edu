
import { useState } from 'react';
import { Volume2, Play, Pause, RotateCcw } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import AIAssistant from '../components/AIAssistant';

const PronunciationGuide = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [currentAudio, setCurrentAudio] = useState<string | null>(null);

  const pronunciationTopics = [
    {
      title: "Basic English Sounds",
      description: "Learn fundamental English phonemes with audio examples",
      words: [
        { word: "cat", phonetic: "/kæt/", difficulty: "beginner" },
        { word: "thought", phonetic: "/θɔːt/", difficulty: "intermediate" },
        { word: "through", phonetic: "/θruː/", difficulty: "advanced" }
      ]
    },
    {
      title: "Technical Terms",
      description: "Programming and technology pronunciation guide",
      words: [
        { word: "algorithm", phonetic: "/ˈælɡərɪðəm/", difficulty: "intermediate" },
        { word: "asynchronous", phonetic: "/eɪˈsɪŋkrənəs/", difficulty: "advanced" },
        { word: "boolean", phonetic: "/ˈbuːliən/", difficulty: "beginner" }
      ]
    }
  ];

  const playAudio = (word: string) => {
    setCurrentAudio(word);
    // Placeholder for text-to-speech functionality
    setTimeout(() => setCurrentAudio(null), 2000);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation isOpen={isNavOpen} setIsOpen={setIsNavOpen} />
      
      <main className="pt-16" role="main">
        {/* Header */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-4">Pronunciation Guide</h1>
            <p className="text-xl opacity-90">
              Master pronunciation with audio examples and phonetic guides
            </p>
          </div>
        </section>

        {/* Audio Controls */}
        <section className="py-8 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Audio Settings</h2>
              <div className="flex flex-wrap gap-4">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <Volume2 className="w-5 h-5 inline mr-2" />
                  Enable Audio
                </button>
                <select className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Speed: Normal</option>
                  <option>Speed: Slow</option>
                  <option>Speed: Fast</option>
                </select>
                <select className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Voice: Female</option>
                  <option>Voice: Male</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Pronunciation Topics */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {pronunciationTopics.map((topic, index) => (
              <div key={index} className="mb-12">
                <h2 className="text-3xl font-bold mb-4">{topic.title}</h2>
                <p className="text-gray-600 mb-8">{topic.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {topic.words.map((item, wordIndex) => (
                    <div key={wordIndex} className="bg-white rounded-lg shadow-md p-6 border">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-semibold">{item.word}</h3>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          item.difficulty === 'beginner' ? 'bg-green-100 text-green-700' :
                          item.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-red-100 text-red-700'
                        }`}>
                          {item.difficulty}
                        </span>
                      </div>
                      
                      <p className="text-gray-600 mb-4 font-mono text-lg">{item.phonetic}</p>
                      
                      <div className="flex gap-2">
                        <button
                          onClick={() => playAudio(item.word)}
                          className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center justify-center"
                          aria-label={`Play pronunciation of ${item.word}`}
                        >
                          {currentAudio === item.word ? (
                            <Pause className="w-4 h-4 mr-2" />
                          ) : (
                            <Play className="w-4 h-4 mr-2" />
                          )}
                          {currentAudio === item.word ? 'Playing...' : 'Play'}
                        </button>
                        
                        <button
                          onClick={() => playAudio(item.word)}
                          className="bg-gray-200 text-gray-700 px-3 py-2 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
                          aria-label={`Repeat pronunciation of ${item.word}`}
                        >
                          <RotateCcw className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      
      <AIAssistant />
      <Footer />
    </div>
  );
};

export default PronunciationGuide;
