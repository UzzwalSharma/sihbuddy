import React from "react";

export default function SIHBuddyTimeline({ imageSrc }) {
  return (
    <section
      className="relative max-w-full mx-auto shadow-md overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url('/timeline.jpeg')` }}
    >
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60 z-0"></div>

      {/* Header */}
      <header className="relative z-10 p-6 text-center border-b border-orange-100">
        <h3 className="text-6xl font-black text-orange-400 drop-shadow-lg">
          SIH 2K25 — Timeline
        </h3>
        <p className="text-gray-200 mt-2 drop-shadow-md">
          Key dates & milestones for Smart India Hackathon 2025
        </p>
      </header>

      {/* Full-width timeline image */}
      <div className="relative z-10 p-4 sm:p-8 flex justify-center items-center">
        <img
          src={imageSrc || "/image.png"}
          alt="SIH timeline"
          className="w-full max-w-4xl h-auto rounded-lg object-contain shadow-lg"
        />
      </div>
    </section>
  );
}
