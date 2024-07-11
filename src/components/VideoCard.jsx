import { EllipsisVertical } from 'lucide-react'
import React from 'react'
import useChannelInfo from '../utils/customHooks/useChannelInfo'

const VideoCard = ({video,channelId}) => {
   let channelInfo= useChannelInfo(channelId);

   if(!channelInfo) return

  return (
    <div className="video">
                <img src={`${video.snippet.thumbnails?.maxres?.url || video.snippet.thumbnails?.high?.url || video.snippet.thumbnails?.medium?.url}`} alt="" />
                <div className="video-info">
                    <div id="channel-img">
                    <img src={`${channelInfo.snippet.thumbnails?.maxres?.url || channelInfo.snippet.thumbnails?.high?.url}`} alt="" />
                    </div>
                    <div id="txt-wrapper">
                        <div id="title">
                        <h4>{video.snippet?.title}</h4>
                    </div>
                    <div id="channel-name">
                        <p>{video.snippet?.channelTitle}</p>
                    </div>
                    <div id="views">
                       <p>{`${Math.round(video.statistics?.viewCount/1000)<999 ? Math.round(video.statistics?.viewCount/1000):(video.statistics?.viewCount/1000000).toFixed(1)}${Math.round(video.statistics?.viewCount/1000)<999 ?"K":"M"}`} views</p>
                    </div>
                    </div>
                <div id="more-info">
                    <EllipsisVertical />
                </div>
            </div>
        </div>
  )
}

export default VideoCard