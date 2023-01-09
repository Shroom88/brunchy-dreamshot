import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import CallUs from "./pages/CallUs.jsx";
import Navbar from "./layout/Navbar.jsx";

function App() {
  return (
    <Router>
      <div className="app-body">
        <Navbar />

        <main className="app-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/callus" element={<CallUs />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
