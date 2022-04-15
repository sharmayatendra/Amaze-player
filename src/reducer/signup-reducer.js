const signupReducer = (state,action) => {
    switch(action.type) {
        case 'FIRST-NAME':
            return {...state , firstName: action.payload}
        case 'LAST-NAME':
            return {...state , lastName: action.payload}
        case 'EMAIL':
            return {...state , email: action.payload}
        case 'PASSWORD':
            return {...state , password: action.payload}
        case 'CONFIRM-PASSWORD':
            return {...state , confirmPassword: action.payload}
        default:
            return state
    }
}

export { signupReducer }