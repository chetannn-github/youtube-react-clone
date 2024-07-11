import React  from 'react'
import "../stylesheets/VideoContainer.css";
import { EllipsisVertical } from 'lucide-react';

import { useSelector } from 'react-redux';
import usefetchVideoList from '../utils/customHooks/usefetchVideoList';
import { Link } from 'react-router-dom';
import VideoCard from './VideoCard';

const VideoContainer = () => {
   let videoList = useSelector((store)=>(store.videoList.homepage));
    usefetchVideoList();
   
    if (!videoList){return} 
    console.log(videoList[0]);
  return (
    <div id='video-container'>
        {videoList.map((video)=>(
          <Link to={`/${video.id}`} key={video.id} >
              <VideoCard channelId={video.snippet.channelId} video={video}/>
          </Link>
        ))}
        
       
    </div>
  )
}

export default VideoContainer