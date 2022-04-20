import React from 'react'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'
import { useLike } from '../../context/like-context'
import { removeFromLiked } from '../../context/like-context'
import { useAuth } from '../../context/auth-context'
import './Modal.css'
import { useWatchlater , removeFromWatchLater , addToWatchLater} from '../../context/watchlater-context'
import { useHistory } from '../../context/history-context'

function Modal({video ,videoId}) {
  const navigate = useNavigate()
  const {likeVideo,setLikeVideo} = useLike()
  const {historyVideos,setHistoryVideos} = useHistory()
  const {state: {token}} = useAuth()
  const { pathname } = useLocation()
  const {watchlaterVideos,setWatchlaterVideos} = useWatchlater()

  const removeFromHistory = async() => {
    if(token) {
      try{
        const resp = await axios.delete(`/api/user/history/${videoId}` , {
          headers: {authorization: token}
        })
        console.log(resp);
        setHistoryVideos(resp.data.history)
      } catch(err) {
        console.log(err);
      }
    } else {
      navigate('/login')
    }
  }

  return (
    <div className="modal-menu">
        {watchlaterVideos.find(item => item._id === videoId) ? <button className='modal-btn' onClick={() => removeFromWatchLater(token,setWatchlaterVideos,videoId,navigate)}><i className="material-icons modal-icons">watch_later</i>Remove from watch later</button> : <button className='modal-btn' onClick={() => addToWatchLater(video,token,setWatchlaterVideos,navigate)}><i className="material-icons-outlined modal-icons">watch_later</i>Save to watch later</button>}
        <button className='modal-btn'><i className="material-icons-outlined modal-icons">playlist_add</i>Save to playlist</button>
        {likeVideo.find(item => item._id === videoId) && pathname==='/like' && <button className='modal-btn' onClick={() =>removeFromLiked(token,setLikeVideo,videoId)}><i className="material-icons-outlined modal-icons">watch_later</i>Remove from liked</button>}
        {historyVideos.find(item => item._id === videoId) && pathname==='/history' && <button className='modal-btn' onClick={removeFromHistory}><i className="material-icons modal-icons">history</i>Remove from history</button> }
    </div>
  )
}

export { Modal }