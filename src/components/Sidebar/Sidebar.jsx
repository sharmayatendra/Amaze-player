import React from 'react'
import { Link } from 'react-router-dom'
import "./Sidebar.css"

function Sidebar() {
  return (
    
        <div className="drawer-container">
           
            <div className="drawer-list-container">
                <div className="list">
                    <i className="material-icons-outlined icons">
                        explore
                    </i>
                    <p className="list-item sidebar-text">Explore</p>
                </div>

                <div className="list">
                    <i className="material-icons-outlined icons">
                        playlist_add
                    </i>
                    <p className="list-item sidebar-text">Playlist</p>
                </div>

                <Link to='/like'>
                <div className="list">
                    <i className="material-icons-outlined icons">
                        thumb_up
                    </i>
                    <p className="list-item sidebar-text">Liked</p>
                </div>
                </Link>

                <div className="list">
                    <i className="material-icons-outlined icons">
                        watch_later
                    </i>
                    <p className="list-item sidebar-text">Watch Later</p>
                </div>
                
                <div className="list">
                    <i className="material-icons-outlined icons">
                        history
                    </i>
                    <p className="list-item sidebar-text">History</p>
                </div>
                
                
                
                
                
            </div>
        </div>
    
  )
}

export { Sidebar }