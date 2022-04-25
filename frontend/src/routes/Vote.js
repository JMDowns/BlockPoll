import React, { useState, Fragment, } from 'react'
import { useParams } from 'react-router-dom'
import Grid from '@mui/material/Grid';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import HowToVoteIcon from '@mui/icons-material/HowToVote';

import VoteSuccess from '../components/Vote/VoteSuccess'

const Vote = () => {

    const { id } = useParams()
    const [option1, setOption1] = useState(false)
    const [option2, setOption2] = useState(false)
    const [option3, setOption3] = useState(false)
    const [vote, setVote] = useState('')
    const [submitted, setSubmitted] = useState(false)


    // get from state later
    const title = 'Cats or Dogs or Birds?'

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

    const handleVote = (e) => {
        console.log(vote)
        setSubmitted(true)
    }

    return (
        <Fragment>
        {submitted ? <VoteSuccess title={title}/> : 
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
                            value={'Dogs'}    
                        />
                        <h1>Dogs</h1>
                    </div>
                </Grid>
                <Grid item xs={8}>
                    <div className="poll-option">
                        <Checkbox 
                            color='secondary' 
                            size='large'
                            checked={option2}
                            onChange={handleChange2}
                            value={'Cats'} 
                        />
                        <h1>Cats</h1>
                    </div>
                </Grid>
                <Grid item xs={8}>
                    <div className="poll-option">
                        <Checkbox 
                            color='success'
                            size='large'
                            checked={option3}
                            onChange={handleChange3}
                            value={'Birds'} 
                        />
                        <h1>Birds</h1>
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

export default Vote
