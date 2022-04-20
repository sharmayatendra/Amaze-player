import {createContext,useState,useContext} from 'react'

const HistoryContext = createContext()

const HistoryProvider = ({children}) => {
    const [historyVideos,setHistoryVideos] = useState([])

    return(
        <HistoryContext.Provider value={{historyVideos,setHistoryVideos}}>
            {children}
        </HistoryContext.Provider>
    )
}

const useHistory = () => useContext(HistoryContext)

export {useHistory,HistoryProvider}