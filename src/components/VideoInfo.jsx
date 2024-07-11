import { ArrowDownToLine, Bell, ChevronDown, Share2, ThumbsUp } from 'lucide-react'
import React from 'react'
import useChannelInfo from '../utils/customHooks/useChannelInfo';
import { useSelector } from 'react-redux';

const VideoInfo = ({videoInfo}) => {
       let channelInfo=  useChannelInfo(videoInfo.snippet?.channelId);
        // let channelInfo = useSelector((store)=>(store.videoList.channelInfo))
        if(!channelInfo ) return

    console.log(channelInfo)
  return (
    <div id="video-info">
            <div id="title">
              <h3>{videoInfo.snippet.title}</h3>
            </div>
            
            <div id="stats">
             <div id="left">
                <div id="channel-logo">
                  <img src={`${channelInfo.snippet.thumbnails.high.url}`} alt="" />
                </div>
                <div id="channel">
                  <div id="name">
                    <h4>{videoInfo.snippet.channelTitle}</h4>
                    {/* <h4>{channelInfo.statistics.subscriberCount}</h4> */}
                    <p>{`${Math.round(channelInfo.statistics?.subscriberCount/1000)<999 ? Math.round(channelInfo.statistics?.subscriberCount/1000):(channelInfo.statistics?.subscriberCount/1000000).toFixed(1)}${Math.round(channelInfo.statistics?.subscriberCount/1000)<999 ?"K":"M"}`} subscribers</p>
                </div>
                
                <div id="subscribe"> <Bell />Subscribed <ChevronDown /></div>
              </div>
             </div>
              <div id="buttons">
              <div id="like">
              <ThumbsUp/> {Math.round(videoInfo.statistics.likeCount/1000)}K
              </div>
              <div id="like">
              <Share2 />
             Share
              </div>  
              <div id="like">
              <ArrowDownToLine />
            Download
              </div>
              </div>
            </div>
           
        </div>
  )
}

export default VideoInfo