import { Star, Home, Sparkles, BookOpen, Users } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-indigo-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Star className="h-8 w-8 text-yellow-300" />
            <span className="ml-2 text-xl font-bold">CosmoPredict</span>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="flex items-center text-white hover:text-yellow-300 transition">
              <Home className="mr-1 h-5 w-5" />
              <span>Home</span>
            </a>
            <a href="/prediction" className="flex items-center text-white hover:text-yellow-300 transition">
              <Sparkles className="mr-1 h-5 w-5" />
              <span>Get Prediction</span>
            </a>
            <a href="/learn" className="flex items-center text-white hover:text-yellow-300 transition">
              <BookOpen className="mr-1 h-5 w-5" />
              <span>Learn Constellations</span>
            </a>
            <a href="/team" className="flex items-center text-white hover:text-yellow-300 transition">
              <Users className="mr-1 h-5 w-5" />
              <span>About Team</span>
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu} 
              className="text-white p-2 rounded-md hover:bg-indigo-800 focus:outline-none"
            >
              <svg 
                className="h-6 w-6" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-indigo-800 pb-4">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="/" className="flex items-center block px-3 py-2 rounded-md text-white hover:bg-indigo-700">
              <Home className="mr-2 h-5 w-5" />
              <span>Home</span>
            </a>
            <a href="/prediction" className="flex items-center block px-3 py-2 rounded-md text-white hover:bg-indigo-700">
              <Sparkles className="mr-2 h-5 w-5" />
              <span>Get Prediction</span>
            </a>
            <a href="/learn" className="flex items-center block px-3 py-2 rounded-md text-white hover:bg-indigo-700">
              <BookOpen className="mr-2 h-5 w-5" />
              <span>Learn Constellations</span>
            </a>
            <a href="/team" className="flex items-center block px-3 py-2 rounded-md text-white hover:bg-indigo-700">
              <Users className="mr-2 h-5 w-5" />
              <span>About Team</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}