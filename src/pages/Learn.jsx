import React, { useState, useEffect } from "react";
import { Star, Search, Grid, List } from "lucide-react";
import Navbar from "../components/Navbar";

// Star Background component (reused from the original code)
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

// Constellation Data
const constellationData = [
  { id: 0, name: "Andromeda", description: "The Royal Sea Monster Bait, a princess chained to a rock as sacrifice", image: "image0.jpg" },
  { id: 1, name: "Antlia", description: "The Air Pump, a scientific instrument invented in the 17th century", image: "image1.jpg" },
  { id: 2, name: "Apus", description: "The Bird of Paradise, representing exotic birds from New Guinea", image: "image2.jpg" },
  { id: 3, name: "Aquarius", description: "The Water-Bearer, representing a figure pouring water from a jar", image: "image3.jpg" },
  { id: 4, name: "Aquila", description: "The Thunderbolt Eagle, Zeus's eagle that carried his thunderbolts", image: "image4.jpg" },
  { id: 5, name: "Ara", description: "The Altar, where gods formed an alliance before battling the Titans", image: "image5.jpg" },
  { id: 6, name: "Aries", description: "The Ram with the golden fleece from Greek mythology", image: "image6.jpg" },
  { id: 7, name: "Auriga", description: "The Charioteer, a skilled chariot driver in Greek mythology", image: "image7.jpg" },
  { id: 8, name: "Boötes", description: "The Herdsman, said to be hunting the bears of Ursa Major and Minor", image: "image8.jpg" },
  { id: 9, name: "Caelum", description: "The Chisel, a tool used by sculptors to create artistic works", image: "image9.jpg" },
  { id: 10, name: "Camelopardalis", description: "The Giraffe, one of the larger but fainter constellations", image: "image10.jpg" },
  { id: 11, name: "Cancer", description: "The Crab sent by Hera to distract Hercules during his labors", image: "image11.jpg" },
  { id: 12, name: "Canes Venatici", description: "The Hunting Dogs, represented by two dogs named Asterion and Chara", image: "image12.jpg" },
  { id: 13, name: "Canis Major", description: "The Big Dog, containing Sirius, the brightest star in our night sky", image: "image13.jpg" },
  { id: 14, name: "Canis Minor", description: "The Small Dog, companion to Orion the hunter", image: "image14.jpg" },
  { id: 15, name: "Capricornus", description: "The Sea Goat, a mythological creature with a goat's head and fish's tail", image: "image15.jpg" },
  { id: 16, name: "Carina", description: "The Keel of the ship Argo Navis from Jason and the Argonauts", image: "image16.jpg" },
  { id: 17, name: "Cassiopeia", description: "The Vain Queen whose boasting led to her daughter being sacrificed", image: "image17.jpg" },
  { id: 18, name: "Centaurus", description: "The Centaur, containing Alpha Centauri, the closest star system to our own", image: "image18.jpg" },
  { id: 19, name: "Cepheus", description: "The King, husband of Cassiopeia and father of Andromeda", image: "image19.jpg" },
  { id: 20, name: "Cetus", description: "The Whale or sea monster sent to devour Andromeda", image: "image20.jpg" },
  { id: 21, name: "Chamaeleon", description: "The Chameleon, a small southern constellation named after the reptile", image: "image21.jpg" },
  { id: 22, name: "Circinus", description: "The Compass used for drawing circles, a modern scientific constellation", image: "image22.jpg" },
  { id: 23, name: "Columba", description: "The Dove, representing the bird that Noah sent from the Ark", image: "image23.jpg" },
  { id: 24, name: "Coma Berenices", description: "Berenice's Hair, named after Queen Berenice II who sacrificed her hair", image: "image24.jpg" },
  { id: 25, name: "Corona Australis", description: "The Southern Crown, representing a crown worn by centaurs", image: "image25.jpg" },
  { id: 26, name: "Corona Borealis", description: "The Northern Crown, a crown given to Ariadne by Dionysus", image: "image26.jpg" },
  { id: 27, name: "Corvus", description: "The Raven, Apollo's sacred bird in Greek mythology", image: "image27.jpg" },
  { id: 28, name: "Crater", description: "The Cup, representing the cup of Apollo in Greek mythology", image: "image28.jpg" },
  { id: 29, name: "Crux", description: "The Southern Cross, the smallest constellation but one of the most recognizable", image: "image29.jpg" },
  { id: 30, name: "Cygnus", description: "The Swan, representing Zeus in disguise or the friend of Phaethon", image: "image30.jpg" },
  { id: 31, name: "Delphinus", description: "The Dolphin, representing the creature that saved the poet Arion", image: "image31.jpg" },
  { id: 32, name: "Dorado", description: "The Goldfish or Swordfish, home to most of the Large Magellanic Cloud", image: "image32.jpg" },
  { id: 33, name: "Draco", description: "The Dragon that guarded the golden apples in the Garden of Hesperides", image: "image33.jpg" },
  { id: 34, name: "Equuleus", description: "The Little Horse, representing the brother of Pegasus given to Castor", image: "image34.jpg" },
  { id: 35, name: "Eridanus", description: "The River, representing the path Phaethon fell after failing to drive the sun chariot", image: "image35.jpg" },
  { id: 36, name: "Fornax", description: "The Furnace, a modern constellation representing a chemist's furnace", image: "image36.jpg" },
  { id: 37, name: "Gemini", description: "The Twins Castor and Pollux from Greek mythology", image: "image37.jpg" },
  { id: 38, name: "Grus", description: "The Crane, a southern bird constellation created in the 16th century", image: "image38.jpg" },
  { id: 39, name: "Hercules", description: "The Strong Man, representing the Greek hero known for his twelve labors", image: "image39.jpg" },
  { id: 40, name: "Horologium", description: "The Pendulum Clock, a modern constellation representing a timekeeping device", image: "image40.jpg" },
  { id: 41, name: "Hydra", description: "The Water Serpent, the largest constellation in the sky", image: "image41.jpg" },
  { id: 42, name: "Hydrus", description: "The Watersnake, a southern constellation distinct from Hydra", image: "image42.jpg" },
  { id: 43, name: "Indus", description: "The Indian, representing a native of the East Indies", image: "image43.jpg" },
  { id: 44, name: "Lacerta", description: "The Lizard, a small and faint northern constellation", image: "image44.jpg" },
  { id: 45, name: "Leo", description: "The Lion that Hercules slew as his first labor", image: "image45.jpg" },
  { id: 46, name: "Leo Minor", description: "The Little Lion, a small constellation near Leo", image: "image46.jpg" },
  { id: 47, name: "Lepus", description: "The Hare/Rabbit hunted by Orion and his dogs", image: "image47.jpg" },
  { id: 48, name: "Libra", description: "The Scales, the only zodiac constellation representing an inanimate object", image: "image48.jpg" },
  { id: 49, name: "Lupus", description: "The Wolf, an ancient constellation associated with various myths", image: "image49.jpg" },
  { id: 50, name: "Lynx", description: "The Lynx, named for the keen eyesight needed to see its faint stars", image: "image50.jpg" },
  { id: 51, name: "Lyra", description: "The Harp played by Orpheus, containing the bright star Vega", image: "image51.jpg" },
  { id: 52, name: "Mensa", description: "The Table Mountain in South Africa, containing part of the Large Magellanic Cloud", image: "image52.jpg" },
  { id: 53, name: "Microscopium", description: "The Microscope, a modern constellation representing the scientific instrument", image: "image53.jpg" },
  { id: 54, name: "Monoceros", description: "The Unicorn, a faint constellation between Orion and Hydra", image: "image54.jpg" },
  { id: 55, name: "Musca", description: "The Fly, a small southern constellation near the Southern Cross", image: "image55.jpg" },
  { id: 56, name: "Norma", description: "The Level, a carpenter's square used for measuring right angles", image: "image56.jpg" },
  { id: 57, name: "Octans", description: "The Octant, a measuring instrument containing the south celestial pole", image: "image57.jpg" },
  { id: 58, name: "Ophiuchus", description: "The Serpent-Bearer, representing the healer Asclepius holding a serpent", image: "image58.jpg" },
  { id: 59, name: "Orion", description: "The Hunter with his distinctive belt of three stars", image: "image59.jpg" },
  { id: 60, name: "Pavo", description: "The Peacock, a southern constellation representing the beautiful bird", image: "image60.jpg" },
  { id: 61, name: "Pegasus", description: "The Winged Horse that sprang from Medusa's blood", image: "image61.jpg" },
  { id: 62, name: "Perseus", description: "The Greek Hero who rescued Andromeda from Cetus", image: "image62.jpg" },
  { id: 63, name: "Phoenix", description: "The Firebird that rises from its own ashes", image: "image63.jpg" },
  { id: 64, name: "Pictor", description: "The Painter's Easel, a modern constellation representing an artist's tool", image: "image64.jpg" },
  { id: 65, name: "Pisces", description: "The Fishes, representing Venus and Cupid transformed to escape Typhon", image: "image65.jpg" },
  { id: 66, name: "Piscis Austrinus", description: "The Southern Fish, drinking the water poured by Aquarius", image: "image66.jpg" },
  { id: 67, name: "Puppis", description: "The Stern of the ship Argo Navis from Greek mythology", image: "image67.jpg" },
  { id: 68, name: "Pyxis", description: "The Compass of the ship Argo Navis, a navigational instrument", image: "image68.jpg" },
  { id: 69, name: "Reticulum", description: "The Reticle, a small net-like pattern used in telescope eyepieces", image: "image69.jpg" },
  { id: 70, name: "Sagitta", description: "The Arrow shot by Hercules or used by Apollo to slay the Cyclops", image: "image70.jpg" },
  { id: 71, name: "Sagittarius", description: "The Archer, a centaur with a bow pointed at Scorpius", image: "image71.jpg" },
  { id: 72, name: "Scorpius", description: "The Scorpion that killed Orion in Greek mythology", image: "image72.jpg" },
  { id: 73, name: "Sculptor", description: "The Sculptor, representing an artist's studio with tools", image: "image73.jpg" },
  { id: 74, name: "Scutum", description: "The Shield, created to honor King John Sobieski of Poland", image: "image74.jpg" },
  { id: 75, name: "Serpens", description: "The Serpent, the only constellation split into two parts (Caput and Cauda)", image: "image75.jpg" },
  { id: 76, name: "Sextans", description: "The Sextant, a navigational instrument used by astronomers", image: "image76.jpg" },
  { id: 77, name: "Taurus", description: "The Bull, representing Zeus disguised to abduct Europa", image: "image77.jpg" },
  { id: 78, name: "Telescopium", description: "The Telescope, honoring the invention that revolutionized astronomy", image: "image78.jpg" },
  { id: 79, name: "Triangulum", description: "The Triangle, one of the smallest but oldest recognized constellations", image: "image79.jpg" },
  { id: 80, name: "Triangulum Australe", description: "The Southern Triangle, a small but distinctive southern constellation", image: "image80.jpg" },
  { id: 81, name: "Tucana", description: "The Toucan, home to the Small Magellanic Cloud galaxy", image: "image81.jpg" },
  { id: 82, name: "Ursa Major", description: "The Big Bear, containing the famous Big Dipper asterism", image: "image82.jpg" },
  { id: 83, name: "Ursa Minor", description: "The Small Bear, containing Polaris, the North Star", image: "image83.jpg" },
  { id: 84, name: "Vela", description: "The Sails of the ship Argo Navis, containing several bright stars", image: "image84.jpg" },
  { id: 85, name: "Virgo", description: "The Young Maiden, the second largest constellation containing bright star Spica", image: "image85.jpg" },
  { id: 86, name: "Volans", description: "The Flying Fish, a small southern constellation", image: "image86.jpg" },
  { id: 87, name: "Vulpecula", description: "The Little Fox, home to the famous Dumbbell Nebula", image: "image87.jpg" }
];

// Constellation Card Component
const ConstellationCard = ({ constellation }) => (
  <div className="bg-indigo-900 bg-opacity-80 p-6 rounded-lg shadow-lg border border-indigo-700 transition-all duration-300 hover:shadow-indigo-400 hover:-translate-y-1">
    <div className="mb-4 relative h-48 bg-indigo-800 rounded-md overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <img 
          src={`/api/placeholder/300/200`} 
          alt={constellation.name} 
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-indigo-900 to-transparent"></div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <div className="flex items-center">
          <Star className="h-5 w-5 text-yellow-300 mr-2" />
          <h3 className="text-xl font-bold text-white">{constellation.name}</h3>
        </div>
      </div>
    </div>
    <p className="text-indigo-200">{constellation.description}</p>
  </div>
);

// Main Constellations Page Component
export default function ConstellationsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState("grid"); // grid or list
  
  // Filter constellations based on search term
  const filteredConstellations = constellationData.filter(
    constellation => constellation.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                      constellation.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-950 to-black text-white">
      <StarBackground />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            All <span className="text-yellow-300">88</span> Constellations
          </h1>
          <p className="text-xl text-indigo-200 max-w-3xl mx-auto mb-8">
            Explore the complete catalog of officially recognized constellations, each with its own unique story and significance in the night sky.
          </p>
          
          {/* Search and Filter */}
          <div className="max-w-xl mx-auto mb-12">
            <div className="relative">
              <input
                type="text"
                placeholder="Search constellations..."
                className="w-full bg-indigo-900 bg-opacity-50 border border-indigo-700 rounded-lg py-3 px-4 pl-12 text-white placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-4 top-3.5 h-5 w-5 text-indigo-300" />
            </div>
          </div>
          
          {/* View toggle */}
          <div className="flex justify-center mb-8">
            <div className="bg-indigo-900 bg-opacity-50 rounded-lg p-1 inline-flex">
              <button
                className={`px-4 py-2 rounded-md flex items-center ${viewMode === 'grid' ? 'bg-indigo-600 text-white' : 'text-indigo-300 hover:text-white'}`}
                onClick={() => setViewMode('grid')}
              >
                <Grid className="h-4 w-4 mr-2" />
                Grid
              </button>
              <button
                className={`px-4 py-2 rounded-md flex items-center ${viewMode === 'list' ? 'bg-indigo-600 text-white' : 'text-indigo-300 hover:text-white'}`}
                onClick={() => setViewMode('list')}
              >
                <List className="h-4 w-4 mr-2" />
                List
              </button>
            </div>
          </div>
          
          {/* Results count */}
          <p className="text-indigo-300 mb-8">
            Showing {filteredConstellations.length} of {constellationData.length} constellations
          </p>
        </div>
      </section>
      
      {/* Constellations Grid/List */}
      <section className="py-8 px-4 mb-16">
        <div className="max-w-7xl mx-auto">
          {viewMode === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredConstellations.map(constellation => (
                <ConstellationCard key={constellation.id} constellation={constellation} />
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredConstellations.map(constellation => (
                <div 
                  key={constellation.id}
                  className="bg-indigo-900 bg-opacity-80 p-4 rounded-lg border border-indigo-700 flex items-center hover:bg-opacity-90 transition-all duration-300"
                >
                  <div className="w-16 h-16 rounded-full bg-indigo-800 flex items-center justify-center mr-4">
                    <Star className="h-8 w-8 text-yellow-300" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-bold text-white">{constellation.name}</h3>
                    <p className="text-indigo-200 text-sm">{constellation.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {/* No results message */}
          {filteredConstellations.length === 0 && (
            <div className="text-center py-12">
              <div className="mb-4">
                <Star className="h-12 w-12 text-indigo-400 mx-auto" />
              </div>
              <h3 className="text-xl font-bold mb-2">No constellations found</h3>
              <p className="text-indigo-300">Try adjusting your search terms</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Fun Facts Section */}
      <section className="py-12 px-4 bg-indigo-900 bg-opacity-30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">Constellation Fun Facts</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-indigo-800 bg-opacity-50 p-6 rounded-lg border border-indigo-600">
              <h3 className="text-lg font-bold mb-2 text-yellow-300">Ancient History</h3>
              <p className="text-indigo-200">Many constellations date back to ancient Mesopotamia and were later adopted by the Greeks and Romans, who associated them with their mythology.</p>
            </div>
            <div className="bg-indigo-800 bg-opacity-50 p-6 rounded-lg border border-indigo-600">
              <h3 className="text-lg font-bold mb-2 text-yellow-300">Navigation</h3>
              <p className="text-indigo-200">Before modern navigational tools, sailors used constellations like Ursa Minor (which contains the North Star) to navigate the seas.</p>
            </div>
            <div className="bg-indigo-800 bg-opacity-50 p-6 rounded-lg border border-indigo-600">
              <h3 className="text-lg font-bold mb-2 text-yellow-300">Modern Recognition</h3>
              <p className="text-indigo-200">The 88 official constellations were standardized by the International Astronomical Union in 1922, creating the definitive map of the night sky we use today.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-indigo-950 py-8 px-4 border-t border-indigo-800 mt-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Star className="h-6 w-6 text-yellow-300 mr-2" />
            <span className="text-xl font-bold">Constellation Predict</span>
          </div>
          <p className="text-indigo-300 text-sm">
            Explore the wonders of the night sky with our complete constellation guide
          </p>
        </div>
      </footer>
    </div>
  );
}