
import { useState } from 'react';
import { Code, BookOpen, Users, Clock, Award, Play } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import AIAssistant from '../components/AIAssistant';

const Courses = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');

  const courses = [
    {
      id: 1,
      title: "JavaScript Fundamentals",
      category: "tech",
      difficulty: "Beginner",
      duration: "8 weeks",
      students: 1250,
      rating: 4.8,
      description: "Learn JavaScript from scratch with voice-guided lessons and audio feedback.",
      features: ["Voice quizzes", "Audio examples", "Progress tracking"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400"
    },
    {
      id: 2,
      title: "Data Structures & Algorithms",
      category: "tech",
      difficulty: "Intermediate",
      duration: "12 weeks",
      students: 890,
      rating: 4.9,
      description: "Master DSA concepts through voice explanations and interactive coding.",
      features: ["Voice coding", "Step-by-step audio", "Practice problems"],
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400"
    },
    {
      id: 3,
      title: "Creative Writing Workshop",
      category: "non-tech",
      difficulty: "Beginner",
      duration: "6 weeks",
      students: 650,
      rating: 4.7,
      description: "Develop your writing skills with audio prompts and voice feedback.",
      features: ["Audio prompts", "Voice recording", "Peer feedback"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400"
    },
    {
      id: 4,
      title: "Business Communication",
      category: "non-tech",
      difficulty: "Intermediate",
      duration: "10 weeks",
      students: 1100,
      rating: 4.6,
      description: "Master professional communication through voice practice and feedback.",
      features: ["Speech practice", "Presentation skills", "Voice analysis"],
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400"
    }
  ];

  const filteredCourses = activeCategory === 'all' 
    ? courses 
    : courses.filter(course => course.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      <Navigation isOpen={isNavOpen} setIsOpen={setIsNavOpen} />
      
      <main className="pt-16" role="main">
        {/* Header */}
        <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-4">Interactive Courses</h1>
            <p className="text-xl opacity-90">
              Learn with voice-powered courses and audio feedback
            </p>
          </div>
        </section>

        {/* Course Categories */}
        <section className="py-8 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  activeCategory === 'all'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                All Courses
              </button>
              <button
                onClick={() => setActiveCategory('tech')}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  activeCategory === 'tech'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Code className="w-4 h-4 inline mr-2" />
                Technology
              </button>
              <button
                onClick={() => setActiveCategory('non-tech')}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  activeCategory === 'non-tech'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                <BookOpen className="w-4 h-4 inline mr-2" />
                General Skills
              </button>
            </div>
          </div>
        </section>

        {/* Courses Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course) => (
                <div key={course.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <img
                    src={course.image}
                    alt={`${course.title} course illustration`}
                    className="w-full h-48 object-cover"
                  />
                  
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        course.difficulty === 'Beginner' ? 'bg-green-100 text-green-700' :
                        course.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {course.difficulty}
                      </span>
                      <div className="flex items-center text-yellow-500">
                        <Award className="w-4 h-4 mr-1" />
                        <span className="text-sm font-medium">{course.rating}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                    <p className="text-gray-600 mb-4">{course.description}</p>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {course.duration}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {course.students}
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-medium mb-2">Features:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {course.features.map((feature, index) => (
                          <li key={index} className="flex items-center">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
                      <Play className="w-4 h-4 mr-2" />
                      Start Course
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <AIAssistant />
      <Footer />
    </div>
  );
};

export default Courses;
