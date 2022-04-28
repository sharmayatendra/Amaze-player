const playlistReducer = (state,action) => {
    switch(action.type) {
        case 'CREATE-PLAYLIST': 
            return {...state , playlist: action.payload}
        case 'UPDATE-PLAYLIST':
            return {...state , playlist: action.payload}
        case 'DELETE-PLAYLIST':
            return {...state , playlist: action.payload}
        case 'DELETE-VIDEO-FROM-PLAYLIST':
            return {...state , playlist: action.payload}
        default:
            return state
    }
}

export { playlistReducer }