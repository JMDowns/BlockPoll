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
    SET_LOADING,
    GET_TOTAL_VOTES,
    GET_POLL
} from '../types'


const PollState = props => {
    const initialState = {
        polls: [],
        poll: {
            votes: 0 
        },
        buckets: [],
        loading: false,
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

    const getPoll = async (poll_id) => {
        setLoading()
        const res = await axios.get(`http://localhost:8000/get_poll/${poll_id}`)
        dispatch({
            type: GET_POLL,
            payload: res.data
        })
    }

    // Create Poll   
    const createPoll = async (poll_id, poll_text) => {
        setLoading()
        const res = await axios.post(`http://localhost:8000/poll_create/${poll_id}/${poll_text}`)
            dispatch({
                type: CREATE_POLL,
            payload: res.data
            })
        }

    // Get buckets of a poll
    const getPollBuckets = async (poll_id) => {
        setLoading()
        const res = await axios.get(`http://localhost:8000/get_buckets_of_poll/${poll_id}`)
        dispatch({
            type: GET_BUCKET_OF_POLL,
            payload: res.data
        })
    }

    // Get bucket
    const getBucket = async (poll, bucket_name) => {
        setLoading()
        const res = await axios.get(`http://localhost:8000/bucket_details/${poll}/${bucket_name}`)
        dispatch({
            type: GET_BUCKET,
            payload: res.data
        })
    }

    // Create bucket
    const createBucket = async (poll, bucket_name) => {
        setLoading()
        const res = await axios.post(`http://localhost:8000/bucket_create/${poll}/${bucket_name}`)
        dispatch({
            type: GET_BUCKET,
            payload: res.data
        })
    }

    // Get votes    
    const getVotes = async (poll_id, bucket_name) => {
        setLoading()
        const res = await axios.get(`http://localhost:8000/get_votes/${poll_id}/${bucket_name}`)
        dispatch({
            type: GET_VOTES,
            payload: res.data
        })
    }

    const getTotalVotes = async (poll_id) => {
        setLoading()
        const res = await axios.get(`http://localhost:8000/get_votes/${poll_id}`)
        console.log(res.data)
        dispatch({
            type: GET_TOTAL_VOTES,
            payload: res.data
        })
    }


    // Cast Vote
    const castVote = async (poll_id, bucket_name) => {
        setLoading()
        const res = await axios.post(`http://localhost:8000/cast_vote/${poll_id}/${bucket_name}`)
        dispatch({
            type: CAST_VOTE,
            payload: res.data
        })
    }
   

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
            votes: state.poll.votes,
            getPolls,
            getPoll,
            createPoll,
            getPollBuckets,
            getBucket,
            createBucket,
            getVotes,
            castVote,
            setLoading,
            getTotalVotes
        }}>
        {props.children}
        </PollContext.Provider> 
}

export default PollState