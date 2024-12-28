import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faCapsules,
  faUsers,
  faPlay,
  faPause,
  faForward,
} from "@fortawesome/free-solid-svg-icons";

function DashboardHome() {
  const [isPharmacyOpen, setIsPharmacyOpen] = useState(false);
  const [videos, setVideos] = useState<string[]>([]);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Simulated data
  const openingTime = 8; // 8:00 AM
  const closingTime = 20; // 8:00 PM
  const totalProducts = 120; // Example value
  const totalUsers = 35; // Example value

  // Check if the pharmacy is open
  useEffect(() => {
    const checkPharmacyStatus = () => {
      const currentHour = new Date().getHours();
      setIsPharmacyOpen(
        currentHour >= openingTime && currentHour < closingTime,
      );
    };
    checkPharmacyStatus();
    const interval = setInterval(checkPharmacyStatus, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  // Fetch videos related to medicine
  useEffect(() => {
    async function fetchVideos() {
      const videoLinks = [
        "https://www.youtube.com/embed/Z61OG7eboGo?si=dQ3X74SmwQ8PZelx",
        "https://www.youtube.com/embed/L1JEb1tRtAw?si=GG-Tge8yfCijyQZR",
        "https://www.youtube.com/embed/ADq9y4WOAIo?si=3wzcm_n5a_6aYnvk",
        "https://www.youtube.com/embed/16Qlqsu9U-g?si=VDw3FJ1QOzh_FZtf",
        "https://www.youtube.com/embed/EKpT-x75MO8?si=ifhBXVCSEQKEhc9k",
        "https://www.youtube.com/embed/q6GYrks_9H8?si=iYlfv9LY5LFYMP4G",
        "https://www.youtube.com/embed/bgSIfN01YjU?si=XcbSFRLgQJq1zUZi",
      ];
      setVideos(videoLinks);
    }
    fetchVideos();
  }, []);

  const handleNextVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    setIsPlaying(true);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="space-y-6 p-6">
      <h1 className="text-2xl font-bold">Tableau de bord de la pharmacie</h1>

      {/* Pharmacy Status */}
      <div className="flex items-center space-x-4">
        <FontAwesomeIcon icon={faClock} size="2x" />
        <span className="text-lg">
          {isPharmacyOpen ? (
            <button className="rounded-full bg-green-500 px-4 py-2 text-white">
              Ouvert
            </button>
          ) : (
            <button className="rounded-full bg-red-500 px-4 py-2 text-white">
              Fermé
            </button>
          )}
        </span>
        <span className="text-sm text-gray-600">
          Horaire : {openingTime}:00 - {closingTime}:00
        </span>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center space-x-4 rounded-md bg-blue-100 p-4 shadow-md">
          <FontAwesomeIcon
            icon={faCapsules}
            size="2x"
            className="text-blue-500"
          />
          <div>
            <p className="text-sm text-gray-600">Total des produits</p>
            <h2 className="text-xl font-bold">{totalProducts}</h2>
          </div>
        </div>
        <div className="flex items-center space-x-4 rounded-md bg-yellow-100 p-4 shadow-md">
          <FontAwesomeIcon
            icon={faUsers}
            size="2x"
            className="text-yellow-500"
          />
          <div>
            <p className="text-sm text-gray-600">Total des utilisateurs</p>
            <h2 className="text-xl font-bold">{totalUsers}</h2>
          </div>
        </div>
      </div>

      {/* Video Player */}
      <div className="rounded-md bg-gray-100 p-4 shadow-md">
        <h2 className="mb-4 text-lg font-bold">Vidéos sur la médecine</h2>
        {videos.length > 0 && (
          <div className="relative">
            <iframe
              width="100%"
              height="315"
              src={videos[currentVideoIndex]}
              title="Vidéo sur la médecine"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="rounded-md"
            ></iframe>
            <div className="mt-4 flex items-center justify-center space-x-4">
              <button
                className="rounded-full bg-blue-500 p-3 text-white hover:bg-blue-600"
                onClick={handleNextVideo}
              >
                <FontAwesomeIcon icon={faForward} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default DashboardHome;
