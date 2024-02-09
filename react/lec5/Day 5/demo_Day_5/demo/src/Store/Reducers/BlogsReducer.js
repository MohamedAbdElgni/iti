const INITIAL_VALUE = {
    blogs: []
}

export default function blogsReducer(state=INITIAL_VALUE, action){

    switch (action.type){
        case 'GET_BLOGS': 
            return {
                ...state, 
                blogs: action.payload
            }
        default: 
            return state;
    }
}