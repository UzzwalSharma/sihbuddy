import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./Hero";
import SIHProblemStatements from "./Tool";
import SihVideos from "./Videos";
import Footer from "./Footer";

function App() {
  return (
    <Router>
      <div className="min-w-screen ">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/problems" element={<SIHProblemStatements />} />
          <Route path="/videos" element={<SihVideos />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
