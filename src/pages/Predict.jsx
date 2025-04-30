import React, { useState, useEffect } from "react";
import { Star, Upload, AlertCircle } from "lucide-react";
import Navbar from "../components/Navbar";

// Simplified Star Background
const StarBackground = () => {
  const [stars] = useState(() => {
    const newStars = [];
    for (let i = 0; i < 50; i++) {
      newStars.push({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: `${0.5 + Math.random() * 2}px`,
        animationDuration: `${3 + Math.random() * 7}s`
      });
    }
    return newStars;
  });

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

// Loading Animation Component
const LoadingAnimation = () => (
  <div className="flex flex-col items-center justify-center py-8">
    <div className="relative w-16 h-16">
      <div className="absolute inset-0 flex items-center justify-center">
        <Star className="h-8 w-8 text-yellow-300 animate-pulse" />
      </div>
      <div className="absolute inset-0 border-4 border-indigo-400 border-t-yellow-300 rounded-full animate-spin"></div>
    </div>
    <p className="mt-4 text-indigo-200">Analyzing your night sky image...</p>
  </div>
);

// Error Message Component
const ErrorMessage = ({ message, onRetry }) => (
  <div className="bg-red-900 bg-opacity-30 border border-red-700 rounded-lg p-6 text-center">
    <AlertCircle className="h-12 w-12 text-red-400 mx-auto mb-3" />
    <h3 className="text-xl font-bold text-white mb-2">Analysis Error</h3>
    <p className="text-red-200 mb-4">{message}</p>
    <button
      onClick={onRetry}
      className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300"
    >
      Try Again
    </button>
  </div>
);

// Result Card Component
const ResultCard = ({ constellation }) => (
  <div className="bg-indigo-900 bg-opacity-80 rounded-lg overflow-hidden shadow-lg border border-indigo-700">
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-2xl font-bold text-white flex items-center">
          <Star className="h-6 w-6 mr-2 text-yellow-300" />
          {constellation.name}
        </h3>
        <div className="bg-indigo-700 px-3 py-1 rounded-full text-sm">
          {constellation.confidence}% Match
        </div>
      </div>
      
      <div className="space-y-4">
        <p className="text-indigo-100">{constellation.description}</p>
        
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-indigo-300">Best Visibility</p>
            <p className="text-white">{constellation.visibility}</p>
          </div>
          <div>
            <p className="text-indigo-300">Best Season</p>
            <p className="text-white">{constellation.season}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default function PredictionPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  
  const handleImageUpload = (file) => {
    if (!file) return;
    
    setError(null);
    setResult(null);
    
    // Create preview
    const reader = new FileReader();
    reader.onload = (e) => {
      setPreviewImage(e.target.result);
      // Auto-submit after preview is loaded
      submitImage(file);
    };
    reader.readAsDataURL(file);
  };
  
  const submitImage = (file) => {
    setError(null);
    setResult(null);
    setIsLoading(true);
    
    // Form data for API call
    const formData = new FormData();
    formData.append('image', file);
    
    // API call simulation (replace with actual endpoint)
    setTimeout(() => {
      // Simulating API response
      try {
        // For demonstration, we'll pretend the API identified Orion
        setResult({
          id: "orion",
          name: "Orion",
          confidence: 92,
          description: "Orion is one of the most recognizable constellations in the night sky. Known as 'The Hunter,' it features bright stars forming the figure of a human with a belt and sword.",
          visibility: "Visible worldwide",
          season: "Winter (Northern Hemisphere)",
        });
        setIsLoading(false);
      } catch (err) {
        setError("Unable to analyze your image. Please try again with a clearer image of the night sky.");
        setIsLoading(false);
      }
    }, 3000);
    
    // Actual API call would be something like:
    /*
    fetch('/api/predict-constellation/', {
      method: 'POST',
      body: formData,
    })
      .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
      })
      .then(data => {
        setResult(data);
        setIsLoading(false);
      })
      .catch(error => {
        setError("Unable to analyze your image. Please try again with a clearer image of the night sky.");
        setIsLoading(false);
      });
    */
  };
  
  const handleReset = () => {
    setError(null);
    setResult(null);
    setPreviewImage(null);
  };
  
  // Handle drag and drop functionality
  const [dragActive, setDragActive] = useState(false);
  
  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };
  
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleImageUpload(e.dataTransfer.files[0]);
    }
  };

  return (
    <div 
      className="min-h-screen bg-gradient-to-b from-indigo-950 to-black text-white"
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
    >
      <StarBackground />
      <Navbar />
      
      {/* Simplified Header */}
      <section className="py-8 md:py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Identify <span className="text-yellow-300">Constellations</span>
            </h1>
            <p className="text-lg text-indigo-200">
              Upload a night sky image to identify constellations
            </p>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-4 md:py-6 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-indigo-900 bg-opacity-60 rounded-lg p-6 border border-indigo-700">
            {!result && !isLoading && !error && (
              <>
                {previewImage ? (
                  <div className="space-y-4 text-center">
                    <div className="relative w-full max-w-md mx-auto aspect-video bg-indigo-900 rounded-lg overflow-hidden">
                      <img 
                        src={previewImage} 
                        alt="Preview" 
                        className="w-full h-full object-contain" 
                      />
                    </div>
                    <p className="text-indigo-200">Processing your image...</p>
                  </div>
                ) : (
                  <label className="relative block cursor-pointer">
                    <div className={`border-2 border-dashed rounded-lg p-8 text-center transition-all ${
                      dragActive ? "border-yellow-300 bg-indigo-900" : "border-indigo-600 hover:border-indigo-400"
                    }`}>
                      <div className="flex flex-col items-center justify-center space-y-4">
                        <div className="bg-indigo-800 rounded-full p-4">
                          <Upload className="h-8 w-8 text-yellow-300" />
                        </div>
                        <div>
                          <p className="text-white text-lg font-medium">Upload night sky image</p>
                          <p className="text-indigo-300 mt-1">Click to browse or drop your image here</p>
                        </div>
                      </div>
                    </div>
                    <input
                      type="file"
                      id="fileInput"
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      onChange={(e) => {
                        if (e.target.files && e.target.files[0]) {
                          handleImageUpload(e.target.files[0]);
                        }
                      }}
                      accept="image/jpeg,image/png"
                      style={{ fontSize: '0' }}
                    />
                  </label>
                )}
              </>
            )}
            
            {isLoading && <LoadingAnimation />}
            
            {error && <ErrorMessage message={error} onRetry={handleReset} />}
            
            {result && (
              <div>
                <ResultCard constellation={result} />
                <div className="mt-6 text-center">
                  <button 
                    onClick={handleReset}
                    className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-300"
                  >
                    Identify Another Image
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      
      {/* Simple Footer */}
      <footer className="bg-indigo-950 py-6 px-4 border-t border-indigo-800 mt-16">
        <div className="max-w-7xl mx-auto flex justify-center items-center">
          <div className="flex items-center">
            <Star className="h-5 w-5 text-yellow-300 mr-2" />
            <span className="font-bold">CosmoPredict</span>
          </div>
        </div>
      </footer>
    </div>
  );
}