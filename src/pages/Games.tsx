
import { useState } from 'react';
import { Gamepad2, Play, Pause, RotateCcw, Trophy, Volume2, Clock } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import AIAssistant from '../components/AIAssistant';

const Games = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeGame, setActiveGame] = useState(null);
  const [gameInProgress, setGameInProgress] = useState(false);

  const brainGames = [
    {
      id: 1,
      title: "Memory Pattern Challenge",
      difficulty: "Easy",
      duration: "5-10 min",
      description: "Listen to audio patterns and repeat them back using voice commands.",
      instructions: [
        "Listen carefully to the audio sequence",
        "Repeat the pattern using voice commands",
        "Patterns get longer as you progress"
      ],
      features: ["Audio-only gameplay", "Voice input", "Progressive difficulty"],
      category: "Memory"
    },
    {
      id: 2,
      title: "Word Association Lightning",
      difficulty: "Medium",
      duration: "3-5 min",
      description: "Quick-fire word association game with voice responses and time pressure.",
      instructions: [
        "Listen to the given word",
        "Say a related word as quickly as possible",
        "Keep the chain going without repetition"
      ],
      features: ["Fast-paced", "Vocabulary building", "Time-based scoring"],
      category: "Language"
    },
    {
      id: 3,
      title: "Math Mind Maze",
      difficulty: "Medium",
      duration: "10-15 min",
      description: "Solve mathematical puzzles using voice commands and audio feedback.",
      instructions: [
        "Listen to the math problem",
        "Calculate the answer mentally",
        "Speak your answer clearly"
      ],
      features: ["Mental math", "Multiple difficulty levels", "Adaptive learning"],
      category: "Logic"
    },
    {
      id: 4,
      title: "Sound Story Builder",
      difficulty: "Hard",
      duration: "15-20 min",
      description: "Create collaborative stories by responding to audio prompts and previous players.",
      instructions: [
        "Listen to the story beginning",
        "Add your continuation",
        "Build on other players' additions"
      ],
      features: ["Creative thinking", "Storytelling", "Collaborative gameplay"],
      category: "Creativity"
    },
    {
      id: 5,
      title: "Logic Puzzle Solver",
      difficulty: "Hard",
      duration: "20-30 min",
      description: "Solve complex logic puzzles through voice interaction and audio clues.",
      instructions: [
        "Listen to the puzzle description",
        "Ask for clues using voice commands",
        "State your solution when ready"
      ],
      features: ["Critical thinking", "Deductive reasoning", "Hint system"],
      category: "Logic"
    },
    {
      id: 6,
      title: "Rhythm & Rhyme",
      difficulty: "Easy",
      duration: "5-8 min",
      description: "Match rhythms and create rhymes in this musical language game.",
      instructions: [
        "Listen to the rhythm pattern",
        "Clap or tap to match the beat",
        "Create rhyming words on command"
      ],
      features: ["Musical elements", "Language skills", "Rhythm training"],
      category: "Music"
    }
  ];

  const gameCategories = ["All", "Memory", "Language", "Logic", "Creativity", "Music"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredGames = selectedCategory === "All" 
    ? brainGames 
    : brainGames.filter(game => game.category === selectedCategory);

  const startGame = (game) => {
    setActiveGame(game);
    setGameInProgress(true);
  };

  const stopGame = () => {
    setActiveGame(null);
    setGameInProgress(false);
  };

  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case 'Easy': return 'bg-green-100 text-green-700';
      case 'Medium': return 'bg-yellow-100 text-yellow-700';
      case 'Hard': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation isOpen={isNavOpen} setIsOpen={setIsNavOpen} />
      
      <main className="pt-16" role="main">
        {/* Header */}
        <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-4 flex items-center">
              <Gamepad2 className="w-10 h-10 mr-4" />
              Brain Training Games
            </h1>
            <p className="text-xl opacity-90">
              Sharpen your mind with accessible, voice-powered brain games
            </p>
          </div>
        </section>

        {/* Game Categories */}
        <section className="py-8 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-6">Game Categories</h2>
            <div className="flex flex-wrap gap-3">
              {gameCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-purple-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Games Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredGames.map((game) => (
                <div key={game.id} className="bg-white rounded-xl shadow-lg p-6 border hover:shadow-xl transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold">{game.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(game.difficulty)}`}>
                      {game.difficulty}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {game.duration}
                    </div>
                    <div className="flex items-center">
                      <Trophy className="w-4 h-4 mr-1" />
                      {game.category}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{game.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-medium mb-2 flex items-center">
                      <Volume2 className="w-4 h-4 mr-1" />
                      How to Play:
                    </h4>
                    <ol className="text-sm text-gray-600 space-y-1">
                      {game.instructions.map((instruction, index) => (
                        <li key={index} className="flex">
                          <span className="font-medium text-purple-600 mr-2">{index + 1}.</span>
                          {instruction}
                        </li>
                      ))}
                    </ol>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-medium mb-2">Features:</h4>
                    <div className="flex flex-wrap gap-1">
                      {game.features.map((feature, index) => (
                        <span 
                          key={index}
                          className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    {activeGame?.id === game.id && gameInProgress ? (
                      <button
                        onClick={stopGame}
                        className="flex-1 bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition-colors flex items-center justify-center"
                      >
                        <Pause className="w-4 h-4 mr-2" />
                        Stop Game
                      </button>
                    ) : (
                      <button
                        onClick={() => startGame(game)}
                        className="flex-1 bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center"
                      >
                        <Play className="w-4 h-4 mr-2" />
                        Start Game
                      </button>
                    )}
                    
                    <button className="bg-gray-200 text-gray-700 px-4 py-3 rounded-lg hover:bg-gray-300 transition-colors">
                      <RotateCcw className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Active Game Session */}
        {activeGame && gameInProgress && (
          <section className="fixed bottom-20 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-2xl p-6 z-40 border-2 border-purple-500 max-w-md w-full mx-4">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2 flex items-center justify-center">
                <Gamepad2 className="w-5 h-5 mr-2" />
                Active Game
              </h3>
              <p className="text-purple-600 font-medium mb-4">{activeGame.title}</p>
              
              <div className="bg-purple-50 rounded-lg p-4 mb-4">
                <p className="text-sm text-purple-700">
                  🎮 Game in progress... Follow the audio instructions!
                </p>
              </div>
              
              <div className="flex items-center justify-center gap-4">
                <button
                  onClick={stopGame}
                  className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition-colors flex items-center"
                >
                  <Pause className="w-4 h-4 mr-2" />
                  End Game
                </button>
                <button className="bg-purple-100 text-purple-700 px-4 py-2 rounded hover:bg-purple-200 transition-colors">
                  <Volume2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </section>
        )}
      </main>
      
      <AIAssistant />
      <Footer />
    </div>
  );
};

export default Games;
