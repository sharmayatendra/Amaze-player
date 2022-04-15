const authReducer = (state,action) => {
    switch(action.type) {
        case 'TOKEN-ADD': 
            return {...state , token: action.payload.token , user: action.payload.user ,isAuth: true}
        case 'CLEAR':
            return {...state, token: "" , user: "" , isAuth: false}
        default:
            return state
    }
}

export { authReducer }