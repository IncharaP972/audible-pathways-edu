
import { useState } from 'react';
import { Camera, CameraOff, Play, Pause, RotateCcw, Heart, Activity } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import AIAssistant from '../components/AIAssistant';

const PhysicalEducation = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [cameraEnabled, setCameraEnabled] = useState(false);
  const [currentExercise, setCurrentExercise] = useState(null);
  const [isExercising, setIsExercising] = useState(false);

  const exerciseCategories = [
    {
      title: "Yoga Sessions",
      description: "Guided yoga with pose detection and voice instructions",
      exercises: [
        {
          name: "Morning Sun Salutation",
          duration: "15 min",
          difficulty: "Beginner",
          poses: ["Mountain Pose", "Forward Fold", "Downward Dog", "Cobra"],
          benefits: "Flexibility, Energy, Balance"
        },
        {
          name: "Stress Relief Flow",
          duration: "20 min", 
          difficulty: "Intermediate",
          poses: ["Child's Pose", "Cat-Cow", "Pigeon Pose", "Savasana"],
          benefits: "Relaxation, Stress Relief, Mindfulness"
        }
      ]
    },
    {
      title: "Physiotherapy Exercises",
      description: "Therapeutic exercises with real-time posture feedback",
      exercises: [
        {
          name: "Neck & Shoulder Relief",
          duration: "10 min",
          difficulty: "Beginner", 
          poses: ["Neck Rolls", "Shoulder Shrugs", "Chest Stretch", "Upper Trap Stretch"],
          benefits: "Pain Relief, Mobility, Posture"
        },
        {
          name: "Lower Back Strengthening",
          duration: "25 min",
          difficulty: "Intermediate",
          poses: ["Bird Dog", "Dead Bug", "Glute Bridge", "Plank"],
          benefits: "Core Strength, Back Health, Stability"
        }
      ]
    }
  ];

  const toggleCamera = () => {
    setCameraEnabled(!cameraEnabled);
    // Placeholder for camera access
  };

  const startExercise = (exercise) => {
    setCurrentExercise(exercise);
    setIsExercising(true);
  };

  const stopExercise = () => {
    setIsExercising(false);
    setCurrentExercise(null);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation isOpen={isNavOpen} setIsOpen={setIsNavOpen} />
      
      <main className="pt-16" role="main">
        {/* Header */}
        <section className="bg-gradient-to-r from-green-500 to-teal-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-4">Physical Education</h1>
            <p className="text-xl opacity-90">
              Yoga and physiotherapy with AI-powered pose detection and voice guidance
            </p>
          </div>
        </section>

        {/* Camera Setup */}
        <section className="py-8 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Camera Setup</h2>
              <div className="flex items-center gap-4">
                <button
                  onClick={toggleCamera}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors flex items-center ${
                    cameraEnabled
                      ? 'bg-red-500 text-white hover:bg-red-600'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  {cameraEnabled ? (
                    <>
                      <CameraOff className="w-5 h-5 mr-2" />
                      Disable Camera
                    </>
                  ) : (
                    <>
                      <Camera className="w-5 h-5 mr-2" />
                      Enable Camera
                    </>
                  )}
                </button>
                
                {cameraEnabled && (
                  <div className="flex items-center text-green-600">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                    Camera Active - Pose Detection Ready
                  </div>
                )}
              </div>
              
              {cameraEnabled && (
                <div className="mt-6 bg-gray-900 rounded-lg p-8 text-center">
                  <div className="text-white mb-4">
                    <Camera className="w-16 h-16 mx-auto mb-4 opacity-50" />
                    <p>Camera Feed (Placeholder)</p>
                    <p className="text-sm opacity-75">Real-time pose detection will appear here</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Exercise Categories */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {exerciseCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-16">
                <h2 className="text-3xl font-bold mb-4">{category.title}</h2>
                <p className="text-gray-600 mb-8">{category.description}</p>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {category.exercises.map((exercise, exerciseIndex) => (
                    <div key={exerciseIndex} className="bg-white rounded-xl shadow-lg p-6 border">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-semibold">{exercise.name}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          exercise.difficulty === 'Beginner' ? 'bg-green-100 text-green-700' :
                          exercise.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-red-100 text-red-700'
                        }`}>
                          {exercise.difficulty}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                        <div className="flex items-center">
                          <Activity className="w-4 h-4 mr-1" />
                          {exercise.duration}
                        </div>
                        <div className="flex items-center">
                          <Heart className="w-4 h-4 mr-1" />
                          {exercise.benefits}
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="font-medium mb-2">Poses/Exercises:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exercise.poses.map((pose, poseIndex) => (
                            <span 
                              key={poseIndex}
                              className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                            >
                              {pose}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        {currentExercise === exercise && isExercising ? (
                          <button
                            onClick={stopExercise}
                            className="flex-1 bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition-colors flex items-center justify-center"
                          >
                            <Pause className="w-4 h-4 mr-2" />
                            Stop Exercise
                          </button>
                        ) : (
                          <button
                            onClick={() => startExercise(exercise)}
                            className="flex-1 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center"
                            disabled={!cameraEnabled}
                          >
                            <Play className="w-4 h-4 mr-2" />
                            Start Exercise
                          </button>
                        )}
                        
                        <button className="bg-blue-100 text-blue-700 px-4 py-3 rounded-lg hover:bg-blue-200 transition-colors">
                          <RotateCcw className="w-4 h-4" />
                        </button>
                      </div>
                      
                      {!cameraEnabled && (
                        <p className="text-sm text-amber-600 mt-2 text-center">
                          Enable camera for pose detection feedback
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Active Exercise Session */}
        {currentExercise && isExercising && (
          <section className="fixed bottom-20 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-2xl p-6 z-40 border-2 border-green-500">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Active Session</h3>
              <p className="text-green-600 font-medium">{currentExercise.name}</p>
              <div className="mt-4 flex items-center justify-center gap-4">
                <div className="text-sm">
                  <span className="text-gray-600">Next: </span>
                  <span className="font-medium">{currentExercise.poses[0]}</span>
                </div>
                <button
                  onClick={stopExercise}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
                >
                  End Session
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

export default PhysicalEducation;
