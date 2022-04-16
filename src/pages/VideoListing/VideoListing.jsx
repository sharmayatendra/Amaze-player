import React , { useState , useEffect } from 'react'
import axios from 'axios'
import "./VideoListing.css"
import { Nav , Sidebar , VideoCard } from '../../components/index'

function VideoListing() {
  const [videos,setVideos] = useState([])

  useEffect(() => {
    (async function fetchVideos() {
      try {
        const resp = await axios.get("/api/videos")
        setVideos(resp.data.videos)
      }catch(error) {
        console.log(error);
      }
    })()
  })

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