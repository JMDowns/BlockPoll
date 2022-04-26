import React, { useEffect, useContext } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import HowToVoteIcon from '@mui/icons-material/HowToVote';
import PollContext from '../../context/poll/pollContext'
import Spinner from '../layout/Spinner';



const PublicPoll = ({ poll }) => {

    const pollContext = useContext(PollContext) 
    const { getVotes, getPollBuckets, buckets, loading } = pollContext
    const { poll_id, poll_text } = poll

    useEffect(async() => {
        const f = await getPollBuckets(poll_id)
        console.log(buckets)
    },[])

    if(loading) {
        return <Spinner />
    }
    else{
        return (
            <div className='poll'>
                <Grid container>
                    <Grid item xs={9}>
                        <div className='poll-title'>
                            <h1>{poll_text}</h1>
                        </div>
                    </Grid>
                    <Grid item xs={8}>
                        <div className="poll-vote-count">
                            <h1>Votes: {90}</h1>
                        </div>
                    </Grid>
                    <Grid item xs={2}>
                        <div className="vote-button">
                            <Button size="small" variant="contained" endIcon={<HowToVoteIcon />} >
                                <Link to={`/poll/${poll_id}`}>Vote</Link>
                            </Button>
                        </div>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

PublicPoll.propTypes = {
    poll: PropTypes.object.isRequired,
}

export default PublicPoll
