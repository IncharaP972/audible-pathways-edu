
import { useState } from 'react';
import { Mic, MicOff, Play, Code, Volume2, RotateCcw } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import AIAssistant from '../components/AIAssistant';

const CodeWithVoice = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [currentCode, setCurrentCode] = useState('// Say "create function" to start coding\n// Voice commands: "function", "variable", "if statement", "for loop"\n');
  const [voiceCommand, setVoiceCommand] = useState('');

  const voiceCommands = [
    { command: "Create function", result: "function myFunction() {\n  // function body\n}" },
    { command: "Declare variable", result: "let variableName = value;" },
    { command: "If statement", result: "if (condition) {\n  // code block\n}" },
    { command: "For loop", result: "for (let i = 0; i < length; i++) {\n  // loop body\n}" }
  ];

  const dsaProblems = [
    {
      title: "Two Sum Problem",
      difficulty: "Easy",
      description: "Find two numbers in an array that add up to a target sum.",
      voiceHints: ["Use a hash map", "Iterate through array", "Check complement"]
    },
    {
      title: "Binary Search",
      difficulty: "Medium",
      description: "Implement binary search algorithm using voice commands.",
      voiceHints: ["Define left and right pointers", "Calculate middle", "Compare with target"]
    },
    {
      title: "Merge Sort",
      difficulty: "Hard",
      description: "Implement merge sort with voice-guided steps.",
      voiceHints: ["Divide array in half", "Recursively sort", "Merge sorted arrays"]
    }
  ];

  const toggleListening = () => {
    setIsListening(!isListening);
    if (!isListening) {
      // Placeholder for starting voice recognition
      setVoiceCommand("Listening for voice commands...");
    } else {
      setVoiceCommand("");
    }
  };

  const executeVoiceCommand = (command: string) => {
    const foundCommand = voiceCommands.find(vc => 
      vc.command.toLowerCase() === command.toLowerCase()
    );
    
    if (foundCommand) {
      setCurrentCode(prev => prev + '\n' + foundCommand.result + '\n');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation isOpen={isNavOpen} setIsOpen={setIsNavOpen} />
      
      <main className="pt-16" role="main">
        {/* Header */}
        <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-4">Code with Voice</h1>
            <p className="text-xl opacity-90">
              Practice Data Structures & Algorithms with voice-controlled coding
            </p>
          </div>
        </section>

        <div className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Code Editor Section */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold">Voice Code Editor</h2>
                  <div className="flex gap-2">
                    <button
                      onClick={toggleListening}
                      className={`px-4 py-2 rounded-lg transition-colors flex items-center ${
                        isListening
                          ? 'bg-red-500 text-white hover:bg-red-600'
                          : 'bg-blue-600 text-white hover:bg-blue-700'
                      }`}
                      aria-label={isListening ? "Stop listening" : "Start voice input"}
                    >
                      {isListening ? <MicOff className="w-4 h-4 mr-2" /> : <Mic className="w-4 h-4 mr-2" />}
                      {isListening ? 'Stop' : 'Voice'}
                    </button>
                    <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                      <Play className="w-4 h-4 mr-2 inline" />
                      Run
                    </button>
                  </div>
                </div>

                {/* Voice Status */}
                {voiceCommand && (
                  <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                    <p className="text-blue-700 font-medium">{voiceCommand}</p>
                  </div>
                )}

                {/* Code Editor */}
                <div className="border border-gray-300 rounded-lg">
                  <textarea
                    value={currentCode}
                    onChange={(e) => setCurrentCode(e.target.value)}
                    className="w-full h-96 p-4 font-mono text-sm bg-gray-900 text-green-400 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Start coding with voice commands..."
                    aria-label="Code editor"
                  />
                </div>

                {/* Voice Commands Reference */}
                <div className="mt-4">
                  <h3 className="font-semibold mb-2">Voice Commands:</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {voiceCommands.map((cmd, index) => (
                      <button
                        key={index}
                        onClick={() => executeVoiceCommand(cmd.command)}
                        className="text-left p-2 bg-gray-100 rounded hover:bg-gray-200 transition-colors"
                      >
                        <span className="text-sm font-medium text-blue-600">"{cmd.command}"</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* DSA Problems Section */}
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h2 className="text-2xl font-bold mb-4">DSA Practice Problems</h2>
                  
                  {dsaProblems.map((problem, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4 mb-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-lg">{problem.title}</h3>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          problem.difficulty === 'Easy' ? 'bg-green-100 text-green-700' :
                          problem.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-red-100 text-red-700'
                        }`}>
                          {problem.difficulty}
                        </span>
                      </div>
                      
                      <p className="text-gray-600 mb-3">{problem.description}</p>
                      
                      <div className="mb-3">
                        <h4 className="font-medium mb-2 flex items-center">
                          <Volume2 className="w-4 h-4 mr-1" />
                          Voice Hints:
                        </h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {problem.voiceHints.map((hint, hintIndex) => (
                            <li key={hintIndex} className="flex items-center">
                              <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                              {hint}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex gap-2">
                        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors flex items-center">
                          <Code className="w-4 h-4 mr-2" />
                          Start Problem
                        </button>
                        <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 transition-colors flex items-center">
                          <Volume2 className="w-4 h-4 mr-2" />
                          Listen to Hints
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
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

export default CodeWithVoice;
