import React from 'react'
import { Nav, Sidebar, VideoCard } from '../../components'
import { useWatchlater } from '../../context/watchlater-context'
import './WatchLater.css'

function WatchLater() {
    const{watchlaterVideos} = useWatchlater()
  return (
    <div className='container-watchlater'>
        <Nav />
        <Sidebar />
        <div className='watchlater-video-container'>
            {watchlaterVideos.map(item => <VideoCard video={item} videoId={item._id}/>)}
        </div>
    </div>
  )
}

export { WatchLater }