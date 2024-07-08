import React from 'react'
import "../stylesheets/PlayingVideo.css"
import { useParams } from 'react-router-dom'
const PlayingVideo = () => {
  let id = useParams().id;
  console.log(id);
  return (
    <div id="video-playing">
      <div id="nowVideo">
        <div id="player">
        <iframe  src={`https://www.youtube.com/embed/${id}?si=_FWj7NrAbNWOZvur`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
        <div id="video-info">
          
        </div>
      </div>
    </div>
  )
}

export default PlayingVideo