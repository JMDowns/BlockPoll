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
        case GET_VOTES: 
            return {
                ...state,
                votes: action.payload,
                loading: false
            }
        case CREATE_POLL:
            return {
                ...state,
                polls: action.payload,
                loading: false
            }
        case GET_BUCKET_OF_POLL:
            return {
                ...state,
                buckets: action.payload,
                loading: false
            }
        case GET_BUCKET:
            return {
                ...state,
                buckets: action.payload,
                loading: false
            }
        case GET_BUCKET:
            return {
                ...state,
                buckets: action.payload,
                loading: false
            }
        case CAST_VOTE:
            return {
                ...state,
                votes: action.payload,
                loading: false
            }
        case CREATE_BUCKET:
            return {
                ...state,
                buckets: action.payload,
                loading: false
            }
        
        default: 
        
    }
}

export default Reducer