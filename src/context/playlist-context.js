import {createContext , useContext , useReducer , useState} from 'react'
import axios from 'axios'
import { playlistReducer } from '../reducer/index'

const PlaylistContext = createContext()
const PlaylistProvider = ({children}) => {
    const [state,dispatch] = useReducer(playlistReducer,{playlist: []})
    const [playlistName,setPlaylistName] = useState('')

        return(
            <PlaylistContext.Provider value={{state,dispatch,playlistName,setPlaylistName}}>
                {children}
            </PlaylistContext.Provider>
        )
}

const createPlaylistHandler = async (playlistName,token,dispatch,setPlaylistName) => {
    try{
      const resp = await axios.post('/api/user/playlists' , {
        playlist: {title: playlistName , description: ""}
      }, {
        headers: {authorization: token}
      })
      dispatch({type: "CREATE-PLAYLIST" , payload: resp.data.playlists})
      setPlaylistName("")
    } catch(err) {
      console.log(err);
    }
  }

  const removePlaylistHandler = async(playlistId,token,dispatch) => {
    try{
      const resp = await axios.delete(`/api/user/playlists/${playlistId}` , {
        headers: {authorization: token}
      })
      dispatch({type: 'DELETE-PLAYLIST', payload: resp.data.playlists})
    } catch(err){
      console.log(err);
    }
  }

const usePlaylist = () => useContext(PlaylistContext);

export { usePlaylist , PlaylistProvider , createPlaylistHandler , removePlaylistHandler}