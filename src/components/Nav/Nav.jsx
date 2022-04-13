import React from 'react'
import "./Nav.css"
import { Link } from 'react-router-dom';

function Nav() {
  return (
<header className="header">
  <div className="header-left-icons">
    
    <i class="material-icons-outlined video-icon">
    videocam
    </i>
    <Link to="/">
    <p className="header-heading">AMAZE-PLAYER</p>
    </Link>
    {/* <input type="search" className='header-search' placeholder='Search'/> */}
  </div>

  <input type="search" className='header-search' placeholder='Search'/>
  <div className="header-right-icons">
    <Link to="/login"><button className="btn btn-primary-solid header-btn">Login</button></Link>
    <div className="badge-flex-container">
      <div className="badge-container">
       
      </div>
      <div className="badge-container">
        
      </div>
    </div>
  </div>
</header>
  )
}

export { Nav }