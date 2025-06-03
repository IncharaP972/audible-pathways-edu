
import { Eye, Users, Lightbulb, Shield } from 'lucide-react';

const MissionSection = () => {
  const values = [
    {
      icon: Eye,
      title: "Vision Beyond Sight",
      description: "We believe that learning transcends physical limitations. Our platform empowers every learner to achieve their full potential through innovative, accessible technology."
    },
    {
      icon: Users,
      title: "Inclusive Community",
      description: "Building a supportive ecosystem where learners connect, share experiences, and grow together. No one learns alone in our community."
    },
    {
      icon: Lightbulb,
      title: "Innovation in Accessibility",
      description: "Pioneering cutting-edge solutions that make complex subjects understandable through voice, audio, and adaptive technologies."
    },
    {
      icon: Shield,
      title: "Safe Learning Environment",
      description: "Providing a secure, judgment-free space where learners can explore, make mistakes, and grow at their own pace."
    }
  ];

  return (
    <section 
      className="py-20 bg-white"
      aria-labelledby="mission-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="mission-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Our Mission
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            To democratize education by creating the world's most accessible learning platform, 
            where every individual—regardless of visual ability—can access, engage with, and excel in 
            their educational journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {values.map((value, index) => (
            <div 
              key={index}
              className="group bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100"
            >
              <div className="bg-white rounded-full w-16 h-16 mb-6 flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                <value.icon className="w-8 h-8 text-blue-600" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 sm:p-12 text-center text-white">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to Transform Your Learning Experience?
          </h3>
          <p className="text-lg sm:text-xl mb-8 opacity-90">
            Join thousands of learners who are already discovering education beyond sight.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/courses"
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-50 transition-colors focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50"
              aria-label="Explore available courses"
            >
              Explore Courses
            </a>
            <a
              href="/ai-navigation"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50"
              aria-label="Try voice navigation assistant"
            >
              Try Voice Assistant
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
