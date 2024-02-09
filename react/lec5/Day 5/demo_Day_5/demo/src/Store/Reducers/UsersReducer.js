const INITIAL_VALUE = {
    users: []
}

export default function userReducer(state= INITIAL_VALUE, action){
    switch(action.type){
        case 'GET_USERS_LIST':
            return{
                ...state,
                users: action.payload
            }
        default: 
           return state
    }
}