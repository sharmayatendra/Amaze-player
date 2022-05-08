import React from 'react'
import { Nav, Sidebar } from '../../components'
import { PlaylistCard } from '../../components/index'
import { usePlaylist } from '../../context/playlist-context'
import './Playlist.css'

function Playlist() {
  const {state:{playlist}} = usePlaylist()
  return (
    <div className='container-playlist'>
        <Nav />
        <Sidebar />
        <div className='playlist-video-container'>
          {playlist.map(item => <PlaylistCard playlistId={item._id} playlist={item} key={item._id}/>)}
        </div>
    </div>
  )
}

export { Playlist }