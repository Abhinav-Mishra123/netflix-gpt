import { useState } from "react";
import { useNavigate } from "react-router-dom";

const VideoTitle = ({ title, overview, movieId, onPlayClick }) => {
  const navigate = useNavigate();
  const [hideDetails, setHideDetails] = useState(true);

  const handlePlayClick = () => {
    setHideDetails(false);
    onPlayClick();
  };

  const handleMoreInfoClick = () => {
    navigate(`/browse/movie/${movieId}`);
  };

  return (
    hideDetails && (
      <div className="w-full aspect-video px-4 sm:px-12 md:px-24 pt-16 sm:pt-[20%] md:pt-[16%] absolute text-white bg-gradient-to-r from-black">
        <h1 className="text-2xl sm:text-6xl font-bold">{title}</h1>
        <p className="py-4 sm:py-6 text-sm sm:text-lg md:w-1/2 lg:w-1/3">
          {overview.slice(0, 200)}...
        </p>
        <div>
          <button
            className="bg-white text-black py-2 sm:py-4 px-8 sm:px-12 text-lg sm:text-xl rounded-lg hover:bg-opacity-80"
            onClick={handlePlayClick}
          >
            ▶️ Play
          </button>
          <button
            className="mx-2 bg-gray-500 text-white py-2 sm:py-4 px-8 sm:px-12 text-lg sm:text-xl bg-opacity-50 rounded-lg hover:bg-gray-600"
            onClick={handleMoreInfoClick}
          >
            More Info
          </button>
        </div>
      </div>
    )
  );
};

export default VideoTitle;
