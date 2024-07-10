import React from 'react'
import "../stylesheets/PlayingVideo.css"
import { useParams } from 'react-router-dom'
import usefetchComments from '../utils/customHooks/usefetchComments';
import { useDispatch, useSelector } from 'react-redux';

import Comment from './Comment';
import useVideoInfo from '../utils/customHooks/useVideoInfo';
import { ThumbsUp } from 'lucide-react';


const PlayingVideo = () => {
  let id = useParams().id;
  
  
  let comments = useSelector((store)=>(store.videoList.comments));
  let videoInfo = useSelector((store)=>(store.videoList.videoInfo));
  usefetchComments(id);
  useVideoInfo(id);
  
  if (!comments  || !videoInfo) return
  // console.log(comments[0])

  return (
    <div id="video-playing">
      <div id="nowVideo">
        <div id="player">
        <iframe  src={`https://www.youtube.com/embed/${id}?si=_FWj7NrAbNWOZvur?autoplay=1`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
        <div id="video-info">
            <div id="title">
              <h3>{videoInfo.snippet.title}</h3>
            </div>
            
            <div id="stats">
              <div id="channel-logo">
                <img src="" alt="" />
              </div>
              <div id="channel">
                <div id="name">
                  <h4>{videoInfo.snippet.channelTitle}</h4>
                </div>
                <div id="join">Join</div>
                <div id="subscribe">Subscribe</div>
              </div>
            </div>
            <div id="like">
              <ThumbsUp/> {videoInfo.statistics.likeCount}
            </div>
        </div>

        <div id="description">
          <p>
            {videoInfo.snippet.description}
          </p>
        </div>
        <div id="comments">
          <h2>Comments :{videoInfo.statistics.commentCount} </h2>
         {comments.map((comment,index)=>(
          <Comment comment={comment}/>
         ))}
        </div>
      </div>

     

    </div>
  )
}

export default PlayingVideo