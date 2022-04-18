import React from 'react'
import './Like.css'
import { Nav, Sidebar, VideoCard } from '../../components'
import { useLike } from '../../context/like-context'
function Like() {
  const {likeVideo} = useLike();

  return (
    <div className='container-like'>
        <Nav />
        <Sidebar />
        <div className='liked-video-container'>
        {likeVideo.map(item => <VideoCard video={item} videoId={item._id}/> )}
        </div>
    </div>
  )
}

export { Like }