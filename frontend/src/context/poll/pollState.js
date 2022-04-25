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
    CAST_VOTE,
    SET_LOADING
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
    const getPolls = async () => {
        setLoading()
        const res = await axios.get('http://localhost:8000/poll_list')
        dispatch({
            type: GET_POLLS,
            payload: res.data
        })
    }

    // Create Poll 

    // Get buckets of a poll

    // Get bucket

    // Create bucket

    // Get votes
    // const getVotes = async()

    // Cast Vote

    // set loading
    const setLoading = () => {
        dispatch({ type: SET_LOADING})
    }


    return <PollContext.Provider
        value={{
            polls: state.polls,
            poll: state.poll,
            buckets: state.buckets,
            loading: state.loading,
            getPolls,
        }}>
        {props.children}
        </PollContext.Provider> 
}

export default PollState