import React from 'react'
import Logo from './Logo'
import SearchBar from './SearchBar'
import { AlignJustify, Bell, Video } from 'lucide-react'

import "../../stylesheets/Navbar.css"
const Navbar = () => {
  return (
    <div id='nav'>
        <div id="nav-p1">
            <AlignJustify />
            <Logo/>
        </div>
        
            <SearchBar/>
        

        <div id="nav-p2">
            <Video />
            <Bell/>
            <div id="user">
                <img src="./images/user.jpg" alt="" />
            </div>
        </div>




    </div>
  )
}

export default Navbar