import React from 'react'
import { useLocation } from 'react-router-dom'
import { useLike } from '../../context/like-context'
import { removeFromLiked } from '../../context/like-context'
import { useAuth } from '../../context/auth-context'
import './Modal.css'

function Modal({videoId}) {
  const {likeVideo,setLikeVideo} = useLike()
  const {state: {token}} = useAuth()
  const { pathname } = useLocation()
  console.log(pathname);
  return (
    <div className="modal-menu">
        <button className='modal-btn'><i className="material-icons-outlined modal-icons">watch_later</i>Save to watch later</button>
        <button className='modal-btn'><i className="material-icons-outlined modal-icons">playlist_add</i>Save to playlist</button>
        {likeVideo.find(item => item._id === videoId) && pathname==='/like' && <button className='modal-btn' onClick={() =>removeFromLiked(token,setLikeVideo,videoId)}><i className="material-icons-outlined modal-icons">watch_later</i>Remove from liked</button>}
    </div>
  )
}

export { Modal }