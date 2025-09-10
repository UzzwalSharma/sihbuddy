import React from "react";
import { Goal, Star, Video } from "lucide-react";
import { motion } from "framer-motion"; 
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import SIHBuddyTimeline from "./Timeline";

function Hero() {
  return (
    <div className="relative bg-gradient-to-b from-black via-[#1a0f0a] to-orange-900 text-white text-center py-20 px-6 overflow-hidden w-full">

      {/* Background Image */}
      <img
        src="/bg.jpeg"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover opacity-30 z-0"
      />


<div className="absolute top-6 right-10 z-30">
  <SignedOut>
   <Link
  to="/auth"
  className="relative inline-flex items-center px-6 py-2.5 rounded-xl font-semibold text-white 
             bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 
             shadow-lg shadow-orange-500/40 
             transition-all duration-300 ease-out 
             hover:scale-105 hover:shadow-orange-400/60"
>
  <span className="relative z-10">Sign In</span>
  {/* Glow effect */}
  <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-40"></span>
</Link>

  </SignedOut>

  <SignedIn>
    <UserButton
      appearance={{
        elements: {
          avatarBox: "w-24 h-24",
        },
      }}
    />
  </SignedIn>
</div>

      

      {/* Glowing Blobs */}
      <motion.div
        className="absolute top-10 right-10 w-48 h-48 rounded-full z-10"
        style={{
          background: "radial-gradient(circle, #FFA500, transparent)",
          filter: "blur(80px)",
        }}
        animate={{ y: [0, -20, 0], x: [0, 10, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 left-10 w-56 h-56 rounded-full z-10"
        style={{
          background: "radial-gradient(circle, #FFA500, transparent)",
          filter: "blur(100px)",
        }}
        animate={{ y: [0, 15, 0], x: [0, -15, 0], scale: [1, 0.9, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* Badge and Hero Content */}
      <div className="relative z-20 flex flex-col justify-center items-center text-center px-4 md:px-6">

        {/* Badge */}
        <div 
          className="bg-gradient-to-r from-orange-600 to-orange-500 text-white text-sm md:text-base font-bold px-6 py-3 rounded-full shadow-2xl mb-10 flex items-center justify-center gap-3 transform hover:scale-105 transition-all duration-300 border border-orange-400/50"
          style={{
            boxShadow: "0 0 30px rgba(255, 107, 26, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
          }}
        >
          <Star className="w-5 h-5 animate-spin" style={{ animationDuration: '3s' }} />
          <span className="bg-gradient-to-r from-white to-orange-100 bg-clip-text text-transparent">
            Smart India Hackathon 2025
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] font-extrabold leading-[1.05] mb-10 max-w-6xl">
          <span className="inline-block transform hover:scale-110 transition-transform duration-300 uppercase text-7xl">
            Welcome
          </span>
          <br />
          <span className="text-orange-400 inline-block transform hover:scale-110 transition-transform duration-300 delay-100 uppercase">
            To
          </span>
          <br className="md:hidden" /><br />
          <span 
            className="bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500 bg-clip-text text-transparent inline-block transform hover:scale-110 transition-transform duration-300 delay-300 text-7xl"
          >
            Your SIH2k25
          </span>
          <br />
          <span className="inline-block transform hover:scale-110 transition-transform duration-300 delay-400 uppercase">
            Buddy
          </span>
        </h1>

        {/* Subheading */}
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-white/90 mb-12 leading-relaxed">
          One-stop hub for SIH 2025. View problem statements, watch latest videos,
          and prepare smarter — <span className="text-orange-300 font-semibold">all in a single place.</span>
        </p>

        {/* Problem list */}
        <div className="relative max-w-2xl mx-auto">
          {/* Glass Card Effect */}
          <div className="bg-black/40 backdrop-blur-xl rounded-3xl p-10 md:p-12 border border-white/10 shadow-2xl">
            <h3 className="text-2xl font-bold mb-8 text-orange-300">No More:</h3>
            <ul className="space-y-6 text-left text-lg md:text-xl font-medium text-slate-100">
              <li className="flex items-start gap-4">
                <span className="text-orange-400 font-bold text-xl">×</span>
                <span>Endless scrolling for finding best problem statements</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-orange-400 font-bold text-xl">×</span>
                <span>Time wasted on random searches</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-orange-400 font-bold text-xl">×</span>
                <span>Hunting for relevant YouTube videos</span>
              </li>
            </ul>
          </div>

          {/* Enhanced Cross Overlay */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <img
              src="/wrong.png"
              alt="cross"
              className="w-68 h-68 md:w-95 md:h-95 opacity-60 animate-pulse"
              style={{ filter: 'drop-shadow(0 0 20px rgba(239, 68, 68, 0.5))' }}
            />
          </div>
        </div>

        {/* Minimal Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 mt-12">
          <Link
            to="/problems"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-lg font-semibold text-white bg-orange-500/90 hover:bg-orange-500/100 transition-all duration-300 shadow-sm hover:shadow-md transform hover:scale-105"
          >
            View Problem Statements <Goal className="w-5 h-5" />
          </Link>
          <Link
            to="/videos"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-lg font-semibold text-black bg-yellow-400/90 hover:bg-yellow-400/100 transition-all duration-300 shadow-sm hover:shadow-md transform hover:scale-105"
          >
            Latest YT Videos <Video className="w-5 h-5" />
          </Link>
        </div>

      </div>
    
    </div>
    
  );
}

export default Hero;
