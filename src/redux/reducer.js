const init = {

    user: [],
    role:{}
}


const userReducer = (state=init,action) =>{
    switch (action.type) {
        case 'ADD_USER':
        return{
            ...state,
            user: action.payload
        }
        case 'LOGIN':
        return{
            ...state,
            user: action.payload
        }
        
        case 'CURRENT':
        return{
            ...state,
            user:action.payload
        }
        
       
        default: return state
    }
}

export default userReducer