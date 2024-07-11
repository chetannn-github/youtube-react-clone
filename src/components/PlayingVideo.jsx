import React, { useState } from 'react'
import "../stylesheets/PlayingVideo.css"
import { useParams } from 'react-router-dom'
import usefetchComments from '../utils/customHooks/usefetchComments';
import { useDispatch, useSelector } from 'react-redux';

import Comment from './Comment';
import useVideoInfo from '../utils/customHooks/useVideoInfo';
import { ArrowDownToLine, Bell, Share2, ThumbsUp } from 'lucide-react';
import { YT_API_KEY, YT_CHANNEL_INFO } from '../utils/constant';
import useChannelInfo from '../utils/customHooks/useChannelInfo';
import VideoInfo from './VideoInfo';
// import FormatString from '../utils/FormatString';

const formatStringToJSX = (str) => {
  // Regular expressions to match URLs and hashtags
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const hashtagRegex = /(#\w+)/g;

  // Split the string by URLs and hashtags, and keep them in the result array
  const parts = str.split(/(https?:\/\/[^\s]+|#\w+)/g);

  // Map through the parts and return an array of JSX elements
  return parts.map((part, index) => {
    // Check if the part is a URL
    if (urlRegex.test(part)) {
      return (
        <React.Fragment key={index}>
          <a href={part} target="_blank" rel="noopener noreferrer">
            {part}
          </a>
          <br />
        </React.Fragment>
      );
    }
    // Check if the part is a hashtag
    if (hashtagRegex.test(part)) {
      return (
        <a key={index} href={`https://example.com/hashtag/${part.substring(1)}`} target="_blank" rel="noopener noreferrer">
          {part}
        </a>
      );
    }
    // Return text parts as plain text
    return <span key={index}>{part}</span>;
  });
};


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
            {formatStringToJSX(videoInfo.snippet.description)}
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