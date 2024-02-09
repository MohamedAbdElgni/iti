const INITIAL_VALUE = {
    lang: "EN"
}

export default function langReducer(state=INITIAL_VALUE, action){

    switch (action.type){
        case 'CHANGE_LANG': 
            return {
                ...state, 
                lang: action.payload
            }
        default: 
            return state;
    }
}