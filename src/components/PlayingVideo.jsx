import React from 'react'
import "../stylesheets/PlayingVideo.css"
import { useParams } from 'react-router-dom'
import usefetchComments from '../utils/customHooks/usefetchComments';
import { useDispatch, useSelector } from 'react-redux';

import Comment from './Comment';


const PlayingVideo = () => {
  let id = useParams().id;
  
  let dispatch = useDispatch();
  let comments = useSelector((store)=>(store.videoList.comments))
  usefetchComments(id);
  
  console.log(comments[0])

  return (
    <div id="video-playing">
      <div id="nowVideo">
        <div id="player">
        <iframe  src={`https://www.youtube.com/embed/${id}?si=_FWj7NrAbNWOZvur?autoplay=1&controls=0`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
        <div id="video-info"></div>
        <div id="comments">
         {comments.map((comment,index)=>(
          <Comment comment={comment}/>
         ))}
        </div>
      </div>

     

    </div>
  )
}

export default PlayingVideo