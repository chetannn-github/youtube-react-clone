import React from 'react';
import { useSelector } from 'react-redux';
import "../stylesheets/SearchPage.css";
import { Link } from 'react-router-dom';

const SearchPage = () => {
    let searchResult = useSelector((store) =>(store.videoList.videoSearchResult));
    if (!searchResult) return
    console.log(searchResult[0])
    
  return (
    <div id="search-videos">
     {
        searchResult.map((video)=>(
            <Link to={`/${video.id.videoId}`}>
            <div className="video">
              <div id="thumbnail">
                  <img src={video.snippet.thumbnails.high.url} alt="" />
              </div>
              <div id="video-info">
                  <div id="title">
                      <h3>{video.snippet.title}</h3>
                  </div>
                  <div id="views">
                      <p></p>
                  </div>
              </div>
            </div>
            </Link>
        ))
     }
       
    </div>
  )
}

export default SearchPage