import { createContext , useContext , useState } from 'react'
import axios from 'axios'

const LikeContext = createContext()

const LikeProvider = ({children}) => {
    const [likeVideo,setLikeVideo] = useState([])

    return(
        <LikeContext.Provider value={{likeVideo,setLikeVideo}}>
            {children}
        </LikeContext.Provider>
    )
}

const removeFromLiked = async(token,setLikeVideo,videoId) => {
    try {
      const resp = await axios.delete(`/api/user/likes/${videoId}` , {
        headers: {authorization: token}
      })
      console.log(resp);
      setLikeVideo(resp.data.likes)
    } catch(err) {
      console.log(err);
    }
  }

const useLike = () => useContext(LikeContext)

export { useLike , LikeProvider , removeFromLiked }