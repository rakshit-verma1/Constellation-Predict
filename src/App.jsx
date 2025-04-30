// src/App.jsx
import { Routes, Route, Link } from 'react-router-dom'
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
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<Team />} />
        <Route path="/prediction" element={<Predict />} />
        <Route path="/learn" element={<Learn />} />
        <Route
          path="*"
          element={
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                textAlign: "center",
                fontFamily: "Arial, sans-serif"
              }}
            >
              <h1
                style={{
                  fontSize: "48px",
                  color: "#ff4c4c",
                  margin: 0,
                  fontWeight: "bolder"
                }}
              >
                404 Page Not Found
              </h1>
              <Link
                to="/"
                style={{
                  fontSize: "18px",
                  color: "#007bff",
                  textDecoration: "none",
                  marginTop: "20px",
                  display: "inline-block",
                  fontWeight: "bolder"
                }}
              >
                Return To Home
              </Link>
            </div>
          }
        />
      </Routes>
    </div>
  )
}

export default App
