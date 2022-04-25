import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

const PublicPoll = ({ poll }) => {
    return (
        <div className='poll'>
            <Grid container>
                <Grid item xs={9}>
                    <div className='poll-title'>
                        <h1>{poll.name}</h1>
                    </div>
                </Grid>
                <Grid item xs={8}>
                    <div className="poll-vote-count">
                        <h1>Votes: {90}</h1>
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <div className="vote-button">
                        <Button color="success" variant="contained">
                            <Link to={`/poll/${poll.id}`}>Vote</Link>
                        </Button>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

PublicPoll.propTypes = {
    poll: PropTypes.object.isRequired,
}

export default PublicPoll
