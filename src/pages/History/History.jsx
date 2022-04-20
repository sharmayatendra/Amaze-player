import React from 'react'
import axios from 'axios'
import { useHistory } from '../../context/history-context'
import { Nav, Sidebar, VideoCard } from '../../components'
import './History.css'
import { useAuth } from '../../context/auth-context'
import { useNavigate } from 'react-router-dom'
function History() {
    const {historyVideos,setHistoryVideos} = useHistory()
    const {state: {token}} = useAuth()
    const navigate = useNavigate()
    const clearHistoryHandler = async () => {
        if(token) {
            try{
                const resp = await axios.delete('/api/user/history/all' , {
                    headers: {authorization: token}
                })
                setHistoryVideos(resp.data.history)
            } catch(err) {
                console.log(err);
            }
        } else {
            navigate('/login')
        }
    }
  return (
    <div className='container-history'>
        <Nav />
        <Sidebar />
        <button className='clear-btn' onClick={clearHistoryHandler}>Clear all</button>
        <div className='history-video-container'>
            {historyVideos.map(item => <VideoCard video={item} videoId={item._id}/>)}
        </div>
    </div>
  )
}

export { History }