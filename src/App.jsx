// src/App.jsx
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Team from './pages/Team.jsx'
import Predict from './pages/Predict.jsx'
import Learn from './pages/Learn.jsx'
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="/team" element={<Team />} />
        <Route path="/prediction" element={<Predict />} />
        <Route path="/learn" element={<Learn />} />
<Route
  path="*"
  element={
    <h1
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        fontSize: "48px",
        fontFamily: "Arial, sans-serif",
        color: "#ff4c4c",
        textAlign: "center"
      }}
    >
      404 Page Not Found
    </h1>
    <a href="/">Return To Home</a>
  }
/>

      </Routes>
    </div>
  )
}

export default App
