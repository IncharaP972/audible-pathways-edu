
import { useState, useRef, useEffect } from 'react';
import { Menu, X, Home, Book, Users, Code, Activity, MessageSquare, Gamepad2, Navigation as NavigationIcon } from 'lucide-react';

interface NavigationProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Navigation = ({ isOpen, setIsOpen }: NavigationProps) => {
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const navigationItems = [
    { href: '/', label: 'Home', icon: Home, description: 'Return to homepage' },
    { href: '/pronunciation', label: 'Pronunciation Guide', icon: Book, description: 'Learn pronunciation with audio examples' },
    { href: '/courses', label: 'Courses', icon: Users, description: 'Access educational courses' },
    { href: '/code-voice', label: 'Code with Voice', icon: Code, description: 'Voice-controlled coding practice' },
    { href: '/physical-ed', label: 'Physical Education', icon: Activity, description: 'Accessible exercise and wellness' },
    { href: '/chatbot', label: 'AI Assistant', icon: MessageSquare, description: 'Get help from AI chatbot' },
    { href: '/games', label: 'Brain Games', icon: Gamepad2, description: 'Play accessible educational games' },
    { href: '/ai-navigation', label: 'Voice Navigation', icon: NavigationIcon, description: 'Voice-powered site navigation' }
  ];

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      switch (e.key) {
        case 'Escape':
          setIsOpen(false);
          buttonRef.current?.focus();
          break;
        case 'ArrowDown':
          e.preventDefault();
          setFocusedIndex(prev => (prev + 1) % navigationItems.length);
          break;
        case 'ArrowUp':
          e.preventDefault();
          setFocusedIndex(prev => prev <= 0 ? navigationItems.length - 1 : prev - 1);
          break;
        case 'Home':
          e.preventDefault();
          setFocusedIndex(0);
          break;
        case 'End':
          e.preventDefault();
          setFocusedIndex(navigationItems.length - 1);
          break;
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen, navigationItems.length, setIsOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-b-2 border-blue-600 z-40" role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-blue-900">
              <span className="sr-only">Education Beyond Sight</span>
              <span aria-hidden="true">📚✨ EduVision</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigationItems.slice(0, 4).map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:bg-blue-100 hover:text-blue-900 px-3 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  aria-label={item.description}
                >
                  <item.icon className="inline w-4 h-4 mr-1" aria-hidden="true" />
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              ref={buttonRef}
              onClick={() => setIsOpen(!isOpen)}
              className="bg-blue-600 inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-colors"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? 'Close main menu' : 'Open main menu'}
            >
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div 
          ref={menuRef}
          className="md:hidden bg-white border-t border-gray-200" 
          id="mobile-menu"
          role="menu"
          aria-orientation="vertical"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigationItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-gray-700 hover:bg-blue-100 hover:text-blue-900 block px-3 py-2 rounded-md text-base font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                  focusedIndex === index ? 'bg-blue-100 text-blue-900' : ''
                }`}
                role="menuitem"
                aria-label={item.description}
                tabIndex={focusedIndex === index ? 0 : -1}
              >
                <item.icon className="inline w-5 h-5 mr-2" aria-hidden="true" />
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Overlay for mobile menu */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-25 md:hidden" 
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </nav>
  );
};

export default Navigation;
