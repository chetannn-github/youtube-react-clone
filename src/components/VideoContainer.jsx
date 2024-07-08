import React  from 'react'
import "../stylesheets/VideoContainer.css";
import { EllipsisVertical } from 'lucide-react';

import { useSelector } from 'react-redux';
import usefetchVideoList from '../utils/customHooks/usefetchVideoList';

const VideoContainer = () => {
   let videoList = useSelector((store)=>(store.videoList));
    usefetchVideoList();
   
    if (!videoList){return} 
    // console.log(videoList[0]);
  return (
    <div id='video-container'>
        {videoList.map((video)=>(
            <div className="video">
                <img src={`${video.snippet.thumbnails?.maxres?.url || video.snippet.thumbnails?.high?.url}`} alt="" />
                <div className="video-info">
                    <div id="channel-img">
                    <img src={`${video.snippet.thumbnails?.maxres?.url || video.snippet.thumbnails?.high?.url}`} alt="" />
                    </div>
                    <div id="txt-wrapper">
                        <div id="title">
                        <h4>{video.snippet.title}</h4>
                    </div>
                    <div id="channel-name">
                        <p>{video.snippet.channelTitle}</p>
                    </div>
                    <div id="views">
                       <p>{`${Math.round(video.statistics.viewCount/1000)<999 ? Math.round(video.statistics.viewCount/1000):(video.statistics.viewCount/1000000).toFixed(1)}${Math.round(video.statistics.viewCount/1000)<999 ?"K":"M"}`} views</p>
                    </div>
                </div>
                <div id="more-info">
                <EllipsisVertical />
                </div>
            </div>
        </div>
        ))}
        
       
    </div>
  )
}

export default VideoContainer