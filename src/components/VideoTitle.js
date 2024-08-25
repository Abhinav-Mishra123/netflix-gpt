import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const VideoTitle = ({ title, overview, movieId, onPlayClick }) => {
  const navigate = useNavigate()
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  const [hideDetails, setHideDetails] = useState(true)

console.log(trailerVideo, "trailervideo");
  const handlePlayClick = ()=>{
    setHideDetails(false)
    onPlayClick()
  }
  const handleMoreInfoClick = () => {
    navigate(`/browse/movie/${movieId}`);
  };

    return (
      ( hideDetails && <div className="w-screen aspect-video pt-[16%] px-24 absolute text-white bg-gradient-to-r from-black">
        <h1 className="text-6xl font-bold">{title}</h1>
        <p className="py-6 text-lg w-1/4">{overview.slice(0,200)}...</p>
        <div className="">
          <button className=" bg-white text-black p-4 px-12 text-xl  rounded-lg hover:bg-opacity-80"  onClick={handlePlayClick}>
            ▶️ Play
          </button>
          <button className="mx-2 bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg" onClick={handleMoreInfoClick}>
            More Info
          </button>
        </div>
      </div>
      )
      
    );
  };
  export default VideoTitle;
  