import React, { useState } from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  const [mute, setMute] = useState(true)
  if(movies === null) return;
  const mainMovie = movies[1];
// console.log("mainMovie", mainMovie);
  const {original_title, overview, id} = mainMovie;

  const handlePlayClick = () =>{
    setMute(false)
  }

  return (
    <div>
      <VideoTitle title = {original_title} overview={overview} movieId={id} onPlayClick={handlePlayClick}/>
      <VideoBackground movieId={id} mute={mute} />
    </div>
  );
};

export default MainContainer;
