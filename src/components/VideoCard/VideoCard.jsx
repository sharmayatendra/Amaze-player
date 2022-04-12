import React , { useState } from 'react'
import {Modal} from '../index';
import './VideoCard.css'

function VideoCard({video , videoId}) {
    const [showModal,setShowModal] = useState(false);
  return (
<>
    <div className="card">
        <div className="card-wrapper">
            <div className="card-img">
                <img src={`https://i.ytimg.com/vi/${videoId}/hq720.jpg`} alt="mobile" />
            </div>
            <div className="card-heading-wrapper">
                <h2 className="card-main-heading">{video.title}</h2>
                <h3 className="card-sub-heading gray-text">{video.creator}</h3>
            </div>
        </div>
        <footer className="card-footer">
            <div className="card-footer-wrapper">
            <p className="footer-views">{video.views}</p>
            <p className="footer-views">•</p>
            <p className="footer-uploaded">{video.uploaded}</p>
            </div>
            <i class="material-icons-outlined kebab-menu" onClick={() => setShowModal(modalState => !modalState)}>more_vert</i>
            {showModal && <Modal />}
        </footer>
    </div> 
</>
  )
}

export { VideoCard }