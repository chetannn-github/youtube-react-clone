import React, { useState } from 'react'
import "../stylesheets/PlayingVideo.css"
import { useParams } from 'react-router-dom'
import usefetchComments from '../utils/customHooks/usefetchComments';
import { useSelector } from 'react-redux';

import Comment from './Comment';
import useVideoInfo from '../utils/customHooks/useVideoInfo';
import { ArrowDownToLine, Bell, Share2, ThumbsUp } from 'lucide-react';
import { YT_API_KEY, YT_CHANNEL_INFO } from '../utils/constant';
import useChannelInfo from '../utils/customHooks/useChannelInfo';
import VideoInfo from './VideoInfo';
import FormatString from '../utils/FormatString';




const PlayingVideo = () => {
  let id = useParams().id;
  let [showDescription,setShowDescription] = useState(false);
  
  
  let comments = useSelector((store)=>(store.videoList.comments));
  let videoInfo = useSelector((store)=>(store.videoList.videoInfo));

  usefetchComments(id);
  useVideoInfo(id);

  
  if (!comments  || !videoInfo) return
  // console.log(comments[0])
  
  let viewCount = videoInfo.statistics.viewCount;
  let viewsInt = parseInt(viewCount);

  let isoDateStr =videoInfo.snippet.publishedAt;
  let date = new Date(isoDateStr);

  let options = { day: 'numeric', month: 'short', year: 'numeric' };
  let formattedDate = date.toLocaleDateString('en-GB', options);

 
  
  return (
    <div id="video-playing">
      <div id="nowVideo">
        <div id="player">
        <iframe  src={`https://www.youtube.com/embed/${id}?si=_FWj7NrAbNWOZvur?autoplay=1`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
        <VideoInfo videoInfo={videoInfo}/>

        <div id="description"className={showDescription? "fit-content":""} onClick={()=>{setShowDescription(!showDescription)}}>
          <p>{viewsInt.toLocaleString('en-US')} views &nbsp; {formattedDate }</p>
          <p >
            {FormatString(videoInfo.snippet.description)}
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