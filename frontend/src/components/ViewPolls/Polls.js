import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import PublicPoll from './PublicPoll'
import PrivatePoll from './PrivatePoll'
import PollContext from '../../context/poll/pollContext'
import Spinner from '../layout/Spinner'

// mock data
const polls2 = [
    {
        name: "no",
        id: 1
    },
    {
        name: "no",
        id: 2
    },    
    {
        name: "no",
        id: 3
    },
]
const Polls = ({ status }) => {
    const pollContext = useContext(PollContext) 

    const { polls, loading } = pollContext

    if(loading) {
        return <Spinner />
    }
    else {
        return (
            <div style={pollStyle}>
                {status === 'public' ? polls.map(poll => (
                    <PublicPoll poll={poll} key={poll.poll_id} />
                )) : polls2.map(poll => (
                    <PrivatePoll poll={poll} key={poll.poll_id} />
                )) }
            </div>
        )
    }
}

const pollStyle ={
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    gridColumnGap: '2rem',
    gridRowGap: '1rem',
    marginTop: '5%'
}

Polls.propTypes = {
    status: PropTypes.string.isRequired,
}

export default Polls
