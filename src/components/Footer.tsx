
import { Heart, Mail, Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: "Learning Areas",
      links: [
        { name: "Pronunciation Guide", href: "/pronunciation" },
        { name: "Interactive Courses", href: "/courses" },
        { name: "Code with Voice", href: "/code-voice" },
        { name: "Physical Education", href: "/physical-ed" }
      ]
    },
    {
      title: "AI Tools",
      links: [
        { name: "AI Assistant", href: "/chatbot" },
        { name: "Voice Navigation", href: "/ai-navigation" },
        { name: "Brain Games", href: "/games" },
        { name: "Speech Technology", href: "#speech-tech" }
      ]
    },
    {
      title: "Accessibility",
      links: [
        { name: "Keyboard Shortcuts", href: "#shortcuts" },
        { name: "Screen Reader Guide", href: "#screen-reader" },
        { name: "Voice Commands", href: "#voice-commands" },
        { name: "Support Center", href: "#support" }
      ]
    }
  ];

  const socialLinks = [
    { name: "Twitter", href: "#", icon: Twitter, label: "Follow us on Twitter" },
    { name: "LinkedIn", href: "#", icon: Linkedin, label: "Connect on LinkedIn" },
    { name: "GitHub", href: "#", icon: Github, label: "View our open source code" },
    { name: "Email", href: "mailto:support@eduvision.com", icon: Mail, label: "Contact support" }
  ];

  return (
    <footer className="bg-gray-900 text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand section */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4">
              📚✨ EduVision
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Empowering learners through accessible, voice-powered education. 
              Breaking barriers, building futures.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors focus:outline-none focus:underline"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Accessibility commitment */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="bg-gray-800 rounded-2xl p-6">
            <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <span role="img" aria-label="Accessibility">♿</span>
              Our Accessibility Commitment
            </h4>
            <p className="text-gray-300 leading-relaxed">
              We are committed to ensuring digital accessibility for people with disabilities. 
              We continually improve the user experience for everyone and apply relevant accessibility standards. 
              If you experience any difficulty accessing any part of our platform, please contact our support team.
            </p>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-gray-300">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500" aria-hidden="true" />
            <span>for accessible education</span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-400">
            <a href="#privacy" className="hover:text-white transition-colors focus:outline-none focus:underline">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-white transition-colors focus:outline-none focus:underline">
              Terms of Service
            </a>
            <a href="#accessibility" className="hover:text-white transition-colors focus:outline-none focus:underline">
              Accessibility Statement
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 pt-8 border-t border-gray-800">
          <p className="text-gray-400">
            © 2024 EduVision - Education Beyond Sight. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
