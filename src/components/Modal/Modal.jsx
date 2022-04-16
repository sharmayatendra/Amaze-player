import React from 'react'
import './Modal.css'
function Modal() {
  return (
    <div className="modal-menu">
        <button className='modal-btn'><i className="material-icons-outlined modal-icons">watch_later</i>Save to watch later</button>
        <button className='modal-btn'><i className="material-icons-outlined modal-icons">playlist_add</i>Save to playlist</button>
    </div>
  )
}

export { Modal }