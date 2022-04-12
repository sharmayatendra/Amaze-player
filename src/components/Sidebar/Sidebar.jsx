import React from 'react'
import "./Sidebar.css"

function Sidebar() {
  return (
    
        <div class="drawer-container">
           
            <div class="drawer-list-container">
                <div class="list">
                    <i class="material-icons-outlined icons">
                        explore
                    </i>
                    <p class="list-item sidebar-text">Explore</p>
                </div>

                <div class="list">
                    <i class="material-icons-outlined icons">
                        playlist_add
                    </i>
                    <p class="list-item sidebar-text">Playlist</p>
                </div>

                <div class="list">
                    <i class="material-icons-outlined icons">
                        thumb_up
                    </i>
                    <p class="list-item sidebar-text">Liked</p>
                </div>

                <div class="list">
                    <i class="material-icons-outlined icons">
                        watch_later
                    </i>
                    <p class="list-item sidebar-text">Watch Later</p>
                </div>
                
                <div class="list">
                    <i class="material-icons-outlined icons">
                        history
                    </i>
                    <p class="list-item sidebar-text">History</p>
                </div>
                
                
                
                
                
            </div>
        </div>
    
  )
}

export { Sidebar }