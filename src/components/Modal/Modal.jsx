import React from 'react'
import axios from 'axios'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { useLike , removeFromLiked , useAuth , useWatchlater , removeFromWatchLater , addToWatchLater , useHistory , usePlaylist} from '../../context/index'
import './Modal.css'

function Modal({video ,videoId ,setShowModal}) {
  const {playlistId} = useParams()
  const navigate = useNavigate()
  const {likeVideo,setLikeVideo} = useLike()
  const {historyVideos,setHistoryVideos} = useHistory()
  const {state: {token}} = useAuth()
  const {state: {playlist} , dispatch} = usePlaylist()
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

  const saveToPlaylistHandler = () => {
    setShowModal(prev => ({...prev , playlistModal: true}))
    setShowModal(prev => ({...prev , modal: false}))
  }

  const removeFromPlaylistHandler = async () => {
    try{
      const resp = await axios.delete(`/api/user/playlists/${playlistId}/${videoId}` , {
        headers: {authorization: token}
      })
      console.log(resp);
      dispatch({type: 'DELETE-VIDEO-FROM-PLAYLIST' , payload: resp.data.playlists})
    }catch(err) {
      console.log(err);
    }
  }

  return (
    <div className="modal-menu">
      
        {watchlaterVideos.find(item => item._id === videoId) ? <button className='modal-btn' onClick={() => removeFromWatchLater(token,setWatchlaterVideos,videoId,navigate)}><i className="material-icons modal-icons">watch_later</i>Remove from watch later</button> : <button className='modal-btn' onClick={() => addToWatchLater(video,token,setWatchlaterVideos,navigate)}><i className="material-icons-outlined modal-icons">watch_later</i>Save to watch later</button>}

        {playlist.find(item => item._id === playlistId) && pathname ===`/playlist/${playlistId}` ? <button className='modal-btn' onClick={removeFromPlaylistHandler}><i className="material-icons-outlined modal-icons">playlist_add</i>Remove from playlist</button> : <button className='modal-btn' onClick={saveToPlaylistHandler}><i className="material-icons-outlined modal-icons">playlist_add</i>Save to playlist</button>}
        

        {likeVideo.find(item => item._id === videoId) && pathname==='/like' && <button className='modal-btn' onClick={() =>removeFromLiked(token,setLikeVideo,videoId)}><i className="material-icons-outlined modal-icons">watch_later</i>Remove from liked</button>}
        
        {historyVideos.find(item => item._id === videoId) && pathname==='/history' && <button className='modal-btn' onClick={removeFromHistory}><i className="material-icons modal-icons">history</i>Remove from history</button> }

    </div>
  )
}

export { Modal }