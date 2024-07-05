import { House } from 'lucide-react'
import React from 'react'
import "../../stylesheets/Menubar/Minimenu.css"

const MiniMenu = () => {
  return (
    <div id='minimenu'>
        <div className="links">
            <div id="logo">
                <House />
            </div>
            <p>Home</p>
        </div>
        <div className="links">
            <div id="logo">
                <House />
            </div>
            <p>Shorts</p>
        </div>
        <div className="links">
            <div id="logo">
                <House />
            </div>
            <p>Subscriptions</p>
        </div>
        <div className="links">
            <div id="logo">
                <House />
            </div>
            <p>You</p>
        </div>
    </div>
  )
}

export default MiniMenu