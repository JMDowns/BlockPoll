import {
    GET_POLLS,
    CREATE_POLL,
    GET_BUCKET_OF_POLL,
    GET_BUCKET,
    CREATE_BUCKET,
    GET_VOTES,
    CAST_VOTE
} from '../types'


const Reducer = (state, action) => {
    switch(action.type) {
        case GET_POLLS: {
            return {
                ...state,
                polls: action.payload,
                loading: false
            }
        }
        default: 
            return state
    }
}

export default Reducer