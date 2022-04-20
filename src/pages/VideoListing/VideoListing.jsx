import React from 'react'
import "./VideoListing.css"
import { Nav , Sidebar , VideoCard } from '../../components/index'
import { useVideo } from '../../context/video-context'

function VideoListing() {
  const { videos } = useVideo()

  return (
    <div className="container-product">
      <Nav />
      <Sidebar />
        <section className='video-listing-section'>
          {videos.map(item => <VideoCard video={item} videoId={item._id} key={item._id}/>)}
        </section>
    </div>
  )
}

export {VideoListing}