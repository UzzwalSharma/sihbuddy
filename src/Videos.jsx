import React, { useEffect, useState } from "react";
import { Play, Loader2, Share2, Heart } from "lucide-react";
import Footer from "./Footer";

function SihVideos() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [nextPageToken, setNextPageToken] = useState(null);

  const API_KEY = "AIzaSyCC0dFfFTWosFfQmK8VxxWBwpYM_qN5P9A"; // replace with your key
  const QUERY = "Smart India Hackathon 2025";

  const fetchVideos = async (pageToken = "") => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(
          QUERY
        )}&type=video&maxResults=6&order=date&pageToken=${pageToken}&key=${API_KEY}`
      );
      const data = await res.json();

      if (data.items) {
        setVideos((prev) => [...prev, ...data.items]);
        setNextPageToken(data.nextPageToken || null);
      }
    } catch (err) {
      console.error("Error fetching YouTube videos:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleShare = (videoId) => {
    const url = `https://www.youtube.com/watch?v=${videoId}`;
    if (navigator.share) {
      navigator.share({ title: "SIH 2K25 Video", url });
    } else {
      navigator.clipboard.writeText(url);
      alert("Video link copied to clipboard!");
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  return (
    <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-950 text-white min-h-screen p-6 flex flex-col">
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-1 h-8 bg-orange-500 rounded-full"></div>
          <h1 className="text-2xl md:text-3xl font-semibold text-white">
            Latest SIH 2K25 YT Videos
          </h1>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 flex-1">
        {videos.map((video) => (
          <div
            key={video.id.videoId}
            className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition bg-gray-900 border border-gray-700"
          >
            <a
              href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={video.snippet.thumbnails.high.url}
                alt={video.snippet.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Play className="w-12 h-12 text-orange-400" />
              </div>
            </a>
            <div className="p-4 flex flex-col gap-2 bg-gray-900">
              <p className="text-sm md:text-base font-semibold text-white line-clamp-2">
                {video.snippet.title}
              </p>
             
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {nextPageToken && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => fetchVideos(nextPageToken)}
            disabled={loading}
            className="bg-orange-600 hover:bg-orange-700 text-white cursor-pointer font-semibold px-6 py-3 rounded-lg shadow-lg transition disabled:opacity-50"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin" /> Loading...
              </span>
            ) : (
              "Load More"
            )}
          </button>
        </div>
      )}
<hr  className="h-4 mt-4"/>
      {/* Made with ❤️ */}
      <div className="flex justify-center items-center gap-2 mt-10 text-white/80">
        <span>Made with</span>
        <Heart className="text-red-500 w-5 h-5" fill="red" /> By Ujjwal
      </div>

      {/* <Footer /> */}
    </div>
  );
}

export default SihVideos;
