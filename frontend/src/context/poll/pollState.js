import React, { useReducer } from 'react'
import axios from 'axios'
import PollContext from './pollContext'
import PollReducer from './pollReducer'
import {
    GET_POLLS,
    CREATE_POLL,
    GET_BUCKET_OF_POLL,
    GET_BUCKET,
    CREATE_BUCKET,
    GET_VOTES,
    CAST_VOTE
} from '../types'


const PollState = props => {
    const initialState = {
        polls: [],
        poll: {},
        buckets: [],
        loading: false
    }

    const [state, dispatch] = useReducer(PollReducer, initialState) 

    // Get Polls

    // Create Poll 

    // Get buckets of a poll

    // Get bucket

    // Create bucket

    // Get votes

    // Cast Vote


    return <PollContext.Provider
        value={{
            polls: state.polls,
            poll: state.poll,
            buckets: state.buckets,
            loading: state.loading,
        }}>
        {props.children}
        </PollContext.Provider> 
}

export default PollState