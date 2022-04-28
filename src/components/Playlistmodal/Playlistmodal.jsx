import React from 'react'
import axios from 'axios'
import { useAuth , usePlaylist ,  createPlaylistHandler , removePlaylistHandler} from '../../context/index';
import './Playlistmodal.css'

function Playlistmodal({setShowModal,video,videoId, closeCB}) {
  const {state : {token}} = useAuth()
  const {state: {playlist} , dispatch , playlistName ,setPlaylistName} = usePlaylist()
 

  const addToPlaylist = async(item) => {
    try{
      const resp = await axios.post(`/api/user/playlists/${item._id}` , {video} , {
        headers: {authorization: token}
      })
      dispatch({type: 'UPDATE-PLAYLIST' , payload: resp.data.playlists})
    } catch(err) {
      console.log(err);
    }
  }

  const closeModal = () => {
    if(closeCB) closeCB()
    setShowModal(prev => ({...prev, playlistModal: false}))
  }

  const checkVideoInPlaylist = (currentPlaylist) => {
    const checkedVideo = currentPlaylist?.videos.some(item => item._id === videoId)
    return checkedVideo
  }

  const playlistUpdationHandler = (e,item) => {
    if(e.target.checked) {
     const checkedVideo = checkVideoInPlaylist(item)
     if(!checkedVideo) {
       addToPlaylist(item)
     } 
    } else {
      removePlaylistHandler(item._id,token,dispatch)
    }
  }

  return (
    <div className='playlist-modal-container'>
        <div className='playlist-modal-heading-container'>
        <h1 className='playlist-modal-heading'>Save to...</h1>
        <span className="material-icons-outlined icon close-icon" onClick={closeModal}>close</span>
        </div>
        <ul>
            {playlist.map(item => <li className='playlist-option' key={item._id}><input placeholder='Enter playlist name' type="checkbox" checked={checkVideoInPlaylist(item) || false} onChange={(e) => playlistUpdationHandler(e,item)}/>{item.title}</li>)}
        </ul>
        <input type="text" value={playlistName} onChange={e => setPlaylistName(e.target.value)}/>
        <button className="btn" onClick={() => createPlaylistHandler(playlistName,token,dispatch,setPlaylistName)}>Create Playlist</button>
    </div>
  )
}

export { Playlistmodal }