import {createContext,useContext,useState} from 'react'
import axios from 'axios'
const WatchlaterContext = createContext();

const WatchlaterProvider = ({children}) => {
    const [watchlaterVideos,setWatchlaterVideos] = useState([]);

    return(
        <WatchlaterContext.Provider value={{watchlaterVideos,setWatchlaterVideos}}>
            {children}
        </WatchlaterContext.Provider>
    )
}

const addToWatchLater = async (video,token,setWatchlaterVideos,navigate) => {
    if(token) {
        try{
            const resp = await axios.post('/api/user/watchlater' , {video} , {
              headers: {authorization: token}
            })
            console.log(resp);
            setWatchlaterVideos(resp.data.watchlater)
          } catch(err) {
            console.log(err);
          }
    } else {
        navigate('/login')
    }
    
  }

const removeFromWatchLater = async (token,setWatchlaterVideos,videoId,navigate) => {
    if(token) {
        try{
            const resp = await axios.delete(`/api/user/watchlater/${videoId}` , {
                headers: {authorization: token}
            })
            console.log(resp);
            setWatchlaterVideos(resp.data.watchlater)
        } catch(err) {
            console.log(err);
        }
    } else {
        navigate('/login')
    }
}
const useWatchlater = () => useContext(WatchlaterContext)

export {useWatchlater , WatchlaterProvider , removeFromWatchLater , addToWatchLater}