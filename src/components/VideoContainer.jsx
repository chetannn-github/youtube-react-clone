import React, { useEffect } from 'react'
import "../stylesheets/VideoContainer.css";
import { EllipsisVertical } from 'lucide-react';
import { YT_API_LINK } from '../utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import { addVideos } from '../utils/reduxStore/VideoSlice';
const VideoContainer = () => {
    let dispatch = useDispatch();
    let videoList = useSelector((store)=>(store.videoList));

    let fetchData =async()=>{console.log("hii");
       let res=  await fetch(YT_API_LINK);
       let json = await res.json();
    //    console.log(json.items);
       dispatch(addVideos(json.items));       
    }
   
    useEffect(()=>{fetchData()},[]);
if (!videoList){return} 
    console.log(videoList[0]);
  return (
    <div id='video-container'>
        {videoList.map((video)=>(
            <div className="video">
                <img src={`${video.snippet.thumbnails.high.url}`} alt="" />
                <div className="video-info">
                    <div id="channel-img">
                    <img src={`${video.snippet.thumbnails.maxres.url}`} alt="" />
                    </div>
                    <div id="txt-wrapper">
                        <div id="title">
                        <h4>{video.snippet.title}</h4>
                    </div>
                    <div id="channel-name">
                        <p>{video.snippet.channelTitle}</p>
                    </div>
                    <div id="views">
                        <p>{ Math.round(video.statistics.viewCount/1000)}K views</p>
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