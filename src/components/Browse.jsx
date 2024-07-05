import React from 'react';
import "../stylesheets/Browse.css";
import Menubar from './Menubar/Menubar';
import VideoContainer from './VideoContainer';

const Browse = () => {
  return (
    <div id='browse' >
        <Menubar/>
        <VideoContainer/>
    </div>
  )
}

export default Browse