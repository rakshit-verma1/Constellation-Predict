import React, { useState, useEffect } from "react";
import { Star, Calendar, MapPin, Search, ArrowRight, Clock, Award } from "lucide-react";
import Navbar from "../components/Navbar"; // Importing the Navbar component we created earlier

// Animated Star Background (same as in Team page for consistency)
const StarBackground = () => {
  const [stars, setStars] = useState([]);
  
  useEffect(() => {
    const generateStars = () => {
      const newStars = [];
      for (let i = 0; i < 100; i++) {
        newStars.push({
          id: i,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          size: `${0.5 + Math.random() * 2}px`,
          animationDuration: `${3 + Math.random() * 7}s`
        });
      }
      setStars(newStars);
    };

    generateStars();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute bg-white rounded-full animate-pulse"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            animationDuration: star.animationDuration
          }}
        />
      ))}
    </div>
  );
};

// Constellation SVG for hero section
const ConstellationSVG = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full absolute opacity-50">
    <circle cx="40" cy="40" r="3" fill="#FFF" />
    <circle cx="80" cy="30" r="2" fill="#FFF" />
    <circle cx="130" cy="50" r="4" fill="#FFEB3B" />
    <circle cx="160" cy="80" r="3" fill="#FFF" />
    <circle cx="120" cy="110" r="2" fill="#FFF" />
    <circle cx="70" cy="100" r="3" fill="#FFF" />
    <circle cx="100" cy="160" r="2" fill="#FFF" />
    
    <line x1="40" y1="40" x2="80" y2="30" stroke="#6366F1" strokeWidth="0.5" strokeOpacity="0.6" />
    <line x1="80" y1="30" x2="130" y2="50" stroke="#6366F1" strokeWidth="0.5" strokeOpacity="0.6" />
    <line x1="130" y1="50" x2="160" y2="80" stroke="#6366F1" strokeWidth="0.5" strokeOpacity="0.6" />
    <line x1="160" y1="80" x2="120" y2="110" stroke="#6366F1" strokeWidth="0.5" strokeOpacity="0.6" />
    <line x1="120" y1="110" x2="70" y2="100" stroke="#6366F1" strokeWidth="0.5" strokeOpacity="0.6" />
    <line x1="70" y1="100" x2="40" y2="40" stroke="#6366F1" strokeWidth="0.5" strokeOpacity="0.6" />
    <line x1="70" y1="100" x2="100" y2="160" stroke="#6366F1" strokeWidth="0.5" strokeOpacity="0.6" />
  </svg>
);

// Featured Constellation Card
const ConstellationCard = ({ constellation }) => (
  <div className="bg-indigo-900 bg-opacity-80 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-indigo-400 hover:scale-105">
    <div className="h-48 relative">

      <div className="absolute inset-0 bg-gradient-to-t from-indigo-900 to-transparent"></div>
      <div className="absolute bottom-4 left-4">
        <h3 className="text-xl font-bold text-white">{constellation.name}</h3>
        <p className="text-indigo-200">{constellation.season}</p>
      </div>
    </div>
    <div className="p-4">
      <p className="text-white mb-4">{constellation.description}</p>
      <div className="flex justify-between items-center">
        <div className="flex items-center text-yellow-300">
          <Star className="h-4 w-4 mr-1" />
          <span>{constellation.visibility}</span>
        </div>

      </div>
    </div>
  </div>
);

// Prediction Form Component
const PredictionForm = () => {
  return (
    <div className="bg-indigo-900 bg-opacity-70 p-6 rounded-lg shadow-lg border border-indigo-700">
      <h3 className="text-xl font-bold text-white mb-4 flex items-center">
        <Search className="h-5 w-5 mr-2 text-yellow-300" />
        Find Your Constellation
      </h3>
      <form className="space-y-4">
 
        
        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center"
        >
          <Star className="h-5 w-5 mr-2" />
          Get Prediction
        </button>
      </form>
    </div>
  );
};

// Feature Component
const Feature = ({ icon, title, description }) => (
  <div className="bg-indigo-900 bg-opacity-50 p-6 rounded-lg border border-indigo-700 transition-all duration-300 hover:bg-opacity-70">
    <div className="bg-indigo-800 rounded-full w-12 h-12 flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-indigo-200">{description}</p>
  </div>
);

// Main Home Page Component
export default function HomePage() {
  // Sample featured constellations data
  const featuredConstellations = [
    {
      id: "ursa-major",
      name: "Ursa Major",
      season: "Best viewed in Spring",
      description: "Known as the Great Bear, this constellation contains the famous Big Dipper asterism. It's one of the most recognizable patterns in the northern sky.",
      visibility: "Year-round in Northern Hemisphere",
      image: "/api/placeholder/400/250"
    },
    {
      id: "orion",
      name: "Orion",
      season: "Best viewed in Winter",
      description: "The Hunter is one of the most recognizable constellations, with its distinctive three-star belt and bright Betelgeuse and Rigel stars.",
      visibility: "Visible worldwide",
      image: "/api/placeholder/400/250"
    },
    {
      id: "cassiopeia",
      name: "Cassiopeia",
      season: "Best viewed in Fall",
      description: "This distinctive W-shaped constellation represents the vain queen from Greek mythology who boasted about her beauty.",
      visibility: "Year-round in Northern Hemisphere",
      image: "/api/placeholder/400/250"
    }
  ];
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-950 to-black text-white">
      <StarBackground />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <ConstellationSVG />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Discover the <span className="text-yellow-300">Stars</span> Above You
              </h1>
              <p className="text-xl text-indigo-200 mb-8">
              Our project focuses on the automated identification of constellations from star pattern images using machine learning and computer vision techniques.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="/prediction" 
                  className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center"
                >
                  <Star className="h-5 w-5 mr-2" />
                  Get Your Prediction
                </a>
                <a 
                  href="/learn" 
                  className="bg-transparent border border-indigo-400 hover:border-white text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
                >
                  Learn About Constellations
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <PredictionForm />
            </div>
          </div>
        </div>
      </section>
      
      {/* Mobile Prediction Form (only visible on mobile) */}
      <section className="md:hidden px-4 pb-12">
        <PredictionForm />
      </section>
      
      {/* Featured Constellations */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What are Constellations?</h2>
            <p className="text-indigo-200 max-w-2xl mx-auto">
            Constellations are patterns of stars in the night sky that have been historically identified and named by various cultures.
            Here are few examples.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredConstellations.map((constellation) => (
              <ConstellationCard key={constellation.id} constellation={constellation} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="/learn" 
              className="inline-flex items-center text-yellow-300 hover:text-yellow-100"
            >
              View all constellations
              <ArrowRight className="h-5 w-5 ml-2" />
            </a>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
     
      
      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Explore the Night Sky?</h2>
          <p className="text-xl text-indigo-200 mb-8">
            Get started with your personalized constellation prediction today and discover
            the wonders waiting above you.
          </p>
          <a 
            href="/prediction" 
            className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 px-8 rounded-lg transition-colors duration-300 inline-flex items-center"
          >
            <Star className="h-5 w-5 mr-2" />
            Start Your Cosmic Journey
          </a>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-indigo-950 py-8 px-4 border-t border-indigo-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Star className="h-6 w-6 text-yellow-300 mr-2" />
            <span className="text-xl font-bold">Constellation Predict</span>
          </div>

        </div>
      </footer>
    </div>
  );
}