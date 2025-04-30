import React, { useState, useEffect } from "react";
import { Star, Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import Navbar from "../components/Navbar"; // Importing the Navbar component we created earlier

// Simulated star background
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

// Team Member Card Component
const TeamMemberCard = ({ member, onClick }) => {
  return (
    <div 
      className="bg-indigo-900 bg-opacity-70 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
      onClick={() => onClick(member)}
    >
      <div className="h-48 bg-indigo-800 flex items-center justify-center">
        <img src={member.image} alt={member.name} className="h-full object-cover" onError={(e) => {
          e.target.onerror = null;
          e.target.src = "/api/placeholder/180/180";
        }} />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold text-white">{member.name}</h3>
        <p className="text-indigo-200">{member.role}</p>
      </div>
    </div>
  );
};

// Team Member Detail Modal
const TeamMemberModal = ({ member, onClose }) => {
  if (!member) return null;
  
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70">
      <div className="bg-indigo-900 bg-opacity-90 p-6 rounded-lg max-w-md w-full m-4 relative border border-indigo-500">
        <button 
          className="absolute top-4 right-4 text-white hover:text-yellow-300"
          onClick={onClose}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <div className="flex flex-col items-center mb-4">
          <div className="h-32 w-32 rounded-full overflow-hidden mb-4 border-2 border-yellow-300">
            <img src={member.image} alt={member.name} className="h-full w-full object-cover" onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/api/placeholder/150/150";
            }} />
          </div>
          <h2 className="text-2xl font-bold text-white">{member.name}</h2>
          <p className="text-yellow-300 mb-2">{member.role}</p>
          
          <div className="flex space-x-4 mb-4">
            {member.github && (
              <a href={member.github} className="text-white hover:text-yellow-300" target="_blank" rel="noopener noreferrer">
                <Github />
              </a>
            )}
            {member.linkedin && (
              <a href={member.linkedin} className="text-white hover:text-yellow-300" target="_blank" rel="noopener noreferrer">
                <Linkedin />
              </a>
            )}
            {member.email && (
              <a href={`mailto:${member.email}`} className="text-white hover:text-yellow-300">
                <Mail />
              </a>
            )}
          </div>
        </div>
        
        <div className="text-white">
          <p className="mb-4">{member.bio}</p>
          
          {member.specialties && (
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-yellow-300 mb-2">Specialties</h3>
              <div className="flex flex-wrap gap-2">
                {member.specialties.map((specialty, index) => (
                  <span key={index} className="bg-indigo-700 px-3 py-1 rounded-full text-sm">
                    {specialty}
                  </span>
                ))}
              </div>
            </div>
          )}
          
          {member.contributions && (
            <div>
              <h3 className="text-lg font-semibold text-yellow-300 mb-2">Contributions</h3>
              <p>{member.contributions}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Main Team Page Component
export default function AboutTeam() {
  const [selectedMember, setSelectedMember] = useState(null);
  
  // Sample team data - replace with your actual team information
  const teamMembers = [
    {
      id: 1,
      name: "Rakshit Verma",
      role: "Frontend Developer,AI/ML Developer",
      image: "/image.png",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      email: "23bcs105@iiitdwd.ac.in"
    },
    {
      id: 2,
      name: "Tanmya Gupta",
      role: "Frontend Developer,AI/ML Developer",
      image: "/t1.jpeg",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      email: "23bds061@iiitdwd.ac.in"
    },
    {
      id: 3,
      name: "Rahul Soni",
      role: "Frontend Developer,AI/ML Developer",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      email: "23bcs104@iiitdwd.ac.in"
    },
    {
      id: 4,
      name: "Dhrupad Das",
      role: "Frontend Developer,AI/ML Developer",

      github: "https://github.com",
      linkedin: "https://linkedin.com",
      email: "dhrudas141993@gmail.com"
    }
  ];
  
  const openMemberDetails = (member) => {
    setSelectedMember(member);
  };
  
  const closeMemberDetails = () => {
    setSelectedMember(null);
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-950 to-black text-white">
      <StarBackground />
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center">
            <Star className="h-8 w-8 text-yellow-300 mr-2" />
            Our Team
            <Star className="h-8 w-8 text-yellow-300 ml-2" />
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-indigo-200">
            Meet the team behind CosmoPredict. 
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} onClick={openMemberDetails} />
          ))}
        </div>
        
  
      </div>
      
      {selectedMember && (
        <TeamMemberModal member={selectedMember} onClose={closeMemberDetails} />
      )}
    </div>
  );
}
