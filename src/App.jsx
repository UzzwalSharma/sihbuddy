import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./Hero";
import SIHProblemStatements from "./Tool";
import SihVideos from "./Videos";
import ProtectedRoute from "./ProtectedRoute";
import { Toaster } from "react-hot-toast";
import SignInPage from "./SignInPage";

function App() {
  return (
    <Router>
      <div className="min-w-screen">
        {/* Toast Notifications */}
        <Toaster position="top-right" reverseOrder={false} />

        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/auth" element={<SignInPage />} />
          <Route
            path="/problems"
            element={
              <ProtectedRoute>
                <SIHProblemStatements />
              </ProtectedRoute>
            }
          />
          <Route
            path="/videos"
            element={
              <ProtectedRoute>
                <SihVideos />
              </ProtectedRoute>
            }
          />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
