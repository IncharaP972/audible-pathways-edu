import { Book, Code, Activity, MessageCircle, Gamepad } from 'lucide-react';

const features = [
  {
    title: 'Interactive Courses',
    description: 'Comprehensive tech and non-tech courses with voice quizzes and adaptive learning.',
    icon: Book,
    href: '/courses'
  },
  {
    title: 'Code with Voice',
    description: 'Revolutionary voice-controlled code editor for data structures, algorithms, and programming practice.',
    icon: Code,
    href: '/code-voice'
  },
  {
    title: 'Physical Education',
    description: 'Accessible yoga and physiotherapy with real-time posture feedback using AI-powered motion detection.',
    icon: Activity,
    href: '/physical-ed'
  },
  {
    title: 'AI Assistant',
    description: 'Dual-mode chatbot for friendly conversations and technical support.',
    icon: MessageCircle,
    href: '/chatbot'
  },
  {
    title: 'Brain Games',
    description: 'Engaging cognitive games with complete audio guidance, enhancing memory, logic, and problem-solving.',
    icon: Gamepad,
    href: '/games'
  }
];

const FeatureGrid = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.title}
                className="relative group bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors duration-300">
                  <IconComponent className="h-6 w-6 text-blue-600" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  {feature.description}
                </p>
                <a
                  href={feature.href}
                  className="mt-4 inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-500"
                >
                  Explore →
                  <span className="sr-only">, {feature.title}</span>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FeatureGrid;
