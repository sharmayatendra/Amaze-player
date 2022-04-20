import { createContext , useContext , useState , useEffect} from "react";
import axios from 'axios'

const VideoContext = createContext();

const VideoProvider = ({children}) => {
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
      },[])

    return(
        <VideoContext.Provider value={{videos,setVideos}}>
            {children}
        </VideoContext.Provider>
    )
}

const useVideo = () => useContext(VideoContext);

export { useVideo , VideoProvider }