import React from 'react'
import './PlaylistDetails.css'
import { Nav, Sidebar, VideoCard } from '../../components'
import { usePlaylist } from '../../context/playlist-context'
import { useParams } from 'react-router-dom'

function PlaylistDetails() {
  const {state: {playlist}} = usePlaylist()
  const {playlistId} = useParams()
  const currPlaylist = playlist.find(item => item._id === playlistId);
  
  return (
    <div className="container-playlist-details">
      <Nav />
      <Sidebar />
      <div className='playlistdetails-video-container'>
        {currPlaylist?.videos.map(item => <VideoCard video={item} videoId={item._id}/>)}
      </div>
    </div>
  )
}

export { PlaylistDetails }