import React, { useState, useEffect, useContext, Fragment, } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Grid from '@mui/material/Grid';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import HowToVoteIcon from '@mui/icons-material/HowToVote';
import PollContext from '../context/poll/pollContext'
import Spinner from '../components/layout/Spinner'

import VoteSuccess from '../components/Vote/VoteSuccess'
import {GlobalStyles, } from '../components/StyledComponents/GlobalStyles.style'

const Vote = () => {

    const { id } = useParams()
    const [option1, setOption1] = useState(false)
    const [option2, setOption2] = useState(false)
    const [option3, setOption3] = useState(false)
    const [vote, setVote] = useState('')
    const [submitted, setSubmitted] = useState(false)
    const [data, setData] = useState([])
    const [totalVotes, setTotalVotes] = useState(0)

    const pollContext = useContext(PollContext) 
    const { getPollBuckets, getPoll, poll, buckets, castVote, getVotes, loading } = pollContext

    useEffect(() => {
        getPoll(id)
        getPollBuckets(id)
    }, [])


    // get from state later
    const title = poll.poll_text

    const handleChange1 = (e) => {
        setOption1(!option1)
        setOption2(false)
        setOption3(false)
        setVote(e.target.value)
    }
    const handleChange2 = (e) => {
        setOption2(!option2)
        setOption1(false)
        setOption3(false)
        setVote(e.target.value)
    }
    const handleChange3 = (e) => {
        setOption3(!option3)
        setOption1(false)
        setOption2(false)
        setVote(e.target.value)
    }

    const buildData = async () => {
        let dataTemp = [] 

        for(let i=0; i<buckets.length; i++){
            let obj = {}
            obj.name = buckets[i].bucket_name
            const res = await axios.get(`http://localhost:8000/get_votes/${id}/${buckets[i].bucket_name}`)
            obj.value = res.data
            
            if(buckets[i].bucket_name === vote){
                obj.value = obj.value + 1
            }
            dataTemp.push(obj)
        }
        const res = await axios.get(`http://localhost:8000/get_votes/${id}`)
        setTotalVotes(res.data)
        setData(dataTemp)
    }

    const handleVote = (e) => {
        console.log(vote)
        castVote(poll.poll_id, vote)
        setSubmitted(true)
        buildData(vote)
    }

    if(loading) {
        return <Spinner /> 
    }
    else {
        return (
            <Fragment>
            <GlobalStyles />
            {submitted ? <VoteSuccess title={title} data={data} totalVotes={totalVotes} /> : 
            <div className="vote">
                <h1>{title}</h1>
                <Grid container>
                    <Grid item xs={8}>
                        <div className="poll-option">
                            <Checkbox 
                                color="primary" 
                                size='large'
                                checked={option1}
                                onChange={handleChange1}
                                value={buckets[0] ? buckets[0].bucket_name : null}    
                            />
                            {buckets[0] ? <h1>{buckets[0].bucket_name}</h1> : null}
                            
                        </div>
                    </Grid>
                    <Grid item xs={8}>
                        <div className="poll-option">
                            <Checkbox 
                                color='secondary' 
                                size='large'
                                checked={option2}
                                onChange={handleChange2}
                                value={buckets[1] ? buckets[1].bucket_name : null}
                            />
                            {buckets[1] ? <h1>{buckets[1].bucket_name}</h1> : null}
                        </div>
                    </Grid>
                    <Grid item xs={8}>
                        <div className="poll-option">
                            <Checkbox 
                                color='success'
                                size='large'
                                checked={option3}
                                onChange={handleChange3}
                                value={buckets[2] ? buckets[2].bucket_name : null}
                            />
                            {buckets[2] ? <h1>{buckets[2].bucket_name}</h1> : null}
                        </div>
                    </Grid>
                    <Grid item xs={7}>
                        <div className="poll-option">
    
                        </div>
                    </Grid>
                    <Grid item xs={5}>
                        <Button 
                            variant="contained" 
                            size="large" 
                            endIcon={<HowToVoteIcon />} 
                            style={{ width: '80%' }}
                            onClick={handleVote}
                        >
                            Vote
                        </Button>
                    </Grid>
                </Grid>
            </div>
            }
            </Fragment>
        )
    }


}

export default Vote
