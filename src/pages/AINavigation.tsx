
import { useState } from 'react';
import { Navigation as NavigationIcon, Mic, MicOff, MapPin, Volume2, Settings } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import AIAssistant from '../components/AIAssistant';

const AINavigation = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [voiceCommand, setVoiceCommand] = useState('');
  const [currentLocation, setCurrentLocation] = useState('Home Page');

  const navigationCommands = [
    { command: "Go to courses", action: "Navigate to Courses page", page: "/courses" },
    { command: "Take me to pronunciation guide", action: "Navigate to Pronunciation Guide", page: "/pronunciation" },
    { command: "Open code editor", action: "Navigate to Code with Voice", page: "/code-voice" },
    { command: "Start physical education", action: "Navigate to Physical Education", page: "/physical-ed" },
    { command: "Talk to chatbot", action: "Navigate to AI Assistant", page: "/chatbot" },
    { command: "Play brain games", action: "Navigate to Games", page: "/games" },
    { command: "Go home", action: "Navigate to Home page", page: "/" }
  ];

  const quickActions = [
    { name: "Find my courses", description: "Navigate to your enrolled courses" },
    { name: "Practice pronunciation", description: "Go to pronunciation guide" },
    { name: "Start coding session", description: "Open voice-controlled code editor" },
    { name: "Begin workout", description: "Start physical education session" },
    { name: "Get help", description: "Talk to AI assistant" }
  ];

  const toggleVoiceNavigation = () => {
    setIsListening(!isListening);
    if (!isListening) {
      setVoiceCommand("Listening for navigation commands...");
      // Placeholder for voice recognition
      setTimeout(() => {
        setVoiceCommand("Say 'Go to courses' or 'Take me to pronunciation guide'");
      }, 2000);
    } else {
      setVoiceCommand("");
    }
  };

  const executeCommand = (command) => {
    const foundCommand = navigationCommands.find(cmd => 
      cmd.command.toLowerCase().includes(command.toLowerCase())
    );
    
    if (foundCommand) {
      setCurrentLocation(foundCommand.action);
      // In a real implementation, this would navigate to the page
      // window.location.href = foundCommand.page;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation isOpen={isNavOpen} setIsOpen={setIsNavOpen} />
      
      <main className="pt-16" role="main">
        {/* Header */}
        <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-4 flex items-center">
              <NavigationIcon className="w-10 h-10 mr-4" />
              AI Voice Navigation
            </h1>
            <p className="text-xl opacity-90">
              Navigate the entire platform using voice commands and AI assistance
            </p>
          </div>
        </section>

        <div className="py-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Voice Control Panel */}
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Mic className="w-6 h-6 mr-2" />
                Voice Navigation Control
              </h2>
              
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-gray-600 mb-2">Current Location:</p>
                  <div className="flex items-center text-lg font-medium">
                    <MapPin className="w-5 h-5 mr-2 text-blue-600" />
                    {currentLocation}
                  </div>
                </div>
                
                <button
                  onClick={toggleVoiceNavigation}
                  className={`px-8 py-4 rounded-xl font-semibold transition-all transform hover:scale-105 ${
                    isListening
                      ? 'bg-red-500 text-white hover:bg-red-600 shadow-lg'
                      : 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg'
                  }`}
                >
                  {isListening ? (
                    <>
                      <MicOff className="w-6 h-6 mr-2 inline" />
                      Stop Listening
                    </>
                  ) : (
                    <>
                      <Mic className="w-6 h-6 mr-2 inline" />
                      Start Voice Navigation
                    </>
                  )}
                </button>
              </div>

              {/* Voice Status */}
              {voiceCommand && (
                <div className={`p-4 rounded-lg border-l-4 ${
                  isListening ? 'bg-blue-50 border-blue-500' : 'bg-gray-50 border-gray-400'
                }`}>
                  <p className={`font-medium ${isListening ? 'text-blue-700' : 'text-gray-700'}`}>
                    {voiceCommand}
                  </p>
                  {isListening && (
                    <div className="flex items-center mt-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse mr-2"></div>
                      <span className="text-sm text-red-600">Voice recognition active</span>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Navigation Commands */}
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <h2 className="text-2xl font-bold mb-6">Voice Commands</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {navigationCommands.map((cmd, index) => (
                  <div 
                    key={index}
                    onClick={() => executeCommand(cmd.command)}
                    className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 cursor-pointer transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-blue-600">"{cmd.command}"</p>
                        <p className="text-sm text-gray-600 mt-1">{cmd.action}</p>
                      </div>
                      <Volume2 className="w-5 h-5 text-gray-400" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <h2 className="text-2xl font-bold mb-6">Quick Actions</h2>
              <div className="space-y-3">
                {quickActions.map((action, index) => (
                  <button
                    key={index}
                    className="w-full text-left p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors group"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium group-hover:text-blue-600">{action.name}</h3>
                        <p className="text-sm text-gray-600">{action.description}</p>
                      </div>
                      <NavigationIcon className="w-5 h-5 text-gray-400 group-hover:text-blue-600" />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Settings */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Settings className="w-6 h-6 mr-2" />
                Navigation Settings
              </h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Voice Recognition Language
                  </label>
                  <select className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>English (US)</option>
                    <option>English (UK)</option>
                    <option>Spanish</option>
                    <option>French</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Voice Feedback Speed
                  </label>
                  <select className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Normal</option>
                    <option>Slow</option>
                    <option>Fast</option>
                  </select>
                </div>
                
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="confirmation"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="confirmation" className="ml-2 text-sm text-gray-700">
                    Enable voice confirmation for navigation actions
                  </label>
                </div>
                
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="shortcuts"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="shortcuts" className="ml-2 text-sm text-gray-700">
                    Enable keyboard shortcuts alongside voice commands
                  </label>
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

export default AINavigation;
