import React from 'react'
import "../stylesheets/Comment.css"
import { EllipsisVertical, ThumbsDown, ThumbsUp } from 'lucide-react'
const Comment = ({comment}) => {

  return (
    <div className="comment">
      <div id="left">
        <div id="img">
          <img src={comment.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
        </div>
        <div id="info">
          <div id="channel-name">
            <h4>{comment.snippet?.topLevelComment?.snippet?.authorDisplayName}</h4>
          </div>
          <div id="comment">
            <h4>{comment.snippet?.topLevelComment?.snippet?.textOriginal} </h4>
          </div>
          <div id="likes">
          <h4>{comment.snippet?.topLevelComment?.snippet?.likeCount}</h4>
          <ThumbsUp />

          <ThumbsDown/>
          </div>
        </div>
      </div>
      <div id="right">
      <EllipsisVertical />
      </div>
    </div>

  )
}

export default Comment