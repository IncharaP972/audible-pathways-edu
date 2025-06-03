
import { Book, Code, Activity, MessageSquare, Gamepad2, Navigation, Mic, Users } from 'lucide-react';

const FeatureGrid = () => {
  const features = [
    {
      icon: Book,
      title: "Pronunciation Guide",
      description: "Master pronunciation with AI-powered audio examples, phonetic breakdowns, and real-time feedback.",
      href: "/pronunciation",
      color: "from-green-400 to-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    },
    {
      icon: Users,
      title: "Interactive Courses",
      description: "Comprehensive tech and non-tech courses with voice quizzes, progress tracking, and adaptive learning.",
      href: "/courses",
      color: "from-blue-400 to-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      icon: Code,
      title: "Code with Voice",
      description: "Revolutionary voice-controlled code editor for data structures, algorithms, and programming practice.",
      href: "/code-voice",
      color: "from-purple-400 to-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    },
    {
      icon: Activity,
      title: "Physical Education",
      description: "Accessible yoga and physiotherapy with real-time posture feedback using AI-powered motion detection.",
      href: "/physical-ed",
      color: "from-red-400 to-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200"
    },
    {
      icon: MessageSquare,
      title: "AI Assistant",
      description: "Dual-mode chatbot: Mitra for friendly conversations and Professional for technical support.",
      href: "/chatbot",
      color: "from-indigo-400 to-indigo-600",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200"
    },
    {
      icon: Gamepad2,
      title: "Brain Games",
      description: "Engaging cognitive games with complete audio guidance, enhancing memory, logic, and problem-solving.",
      href: "/games",
      color: "from-yellow-400 to-yellow-600",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200"
    },
    {
      icon: Navigation,
      title: "Voice Navigation",
      description: "Smart AI assistant that helps you navigate the entire platform using just your voice commands.",
      href: "/ai-navigation",
      color: "from-teal-400 to-teal-600",
      bgColor: "bg-teal-50",
      borderColor: "border-teal-200"
    },
    {
      icon: Mic,
      title: "Speech Technology",
      description: "Advanced speech recognition and synthesis powering every interaction on our platform.",
      href: "#speech-tech",
      color: "from-pink-400 to-pink-600",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-200"
    }
  ];

  return (
    <section 
      className="py-20 bg-gray-50"
      aria-labelledby="features-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="features-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Learning Made Accessible
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive suite of educational tools designed specifically for 
            accessible learning experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <a
              key={index}
              href={feature.href}
              className={`group ${feature.bgColor} ${feature.borderColor} border-2 p-6 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50`}
              aria-label={`Learn more about ${feature.title}: ${feature.description}`}
            >
              <div className={`bg-gradient-to-br ${feature.color} rounded-full w-16 h-16 mb-6 flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow group-hover:scale-110 transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" aria-hidden="true" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-500 transition-colors">
                {feature.description}
              </p>
              
              <div className="mt-4 text-sm font-medium text-blue-600 group-hover:text-blue-700 transition-colors">
                Explore →
              </div>
            </a>
          ))}
        </div>

        {/* Accessibility features highlight */}
        <div className="mt-16 bg-white rounded-2xl p-8 border-2 border-blue-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Built for Every Learning Style
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl" role="img" aria-label="Voice">🎤</span>
              </div>
              <h4 className="font-semibold text-gray-900">Voice-First</h4>
              <p className="text-sm text-gray-600">Complete voice control</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl" role="img" aria-label="Keyboard">⌨️</span>
              </div>
              <h4 className="font-semibold text-gray-900">Keyboard Navigation</h4>
              <p className="text-sm text-gray-600">Full keyboard support</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl" role="img" aria-label="Screen Reader">📱</span>
              </div>
              <h4 className="font-semibold text-gray-900">Screen Reader</h4>
              <p className="text-sm text-gray-600">Optimized for all readers</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl" role="img" aria-label="High Contrast">🔆</span>
              </div>
              <h4 className="font-semibold text-gray-900">High Contrast</h4>
              <p className="text-sm text-gray-600">Clear, readable design</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
