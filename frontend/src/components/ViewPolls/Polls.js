import React, {Fragment } from 'react'
import PropTypes from 'prop-types'
import PublicPoll from './PublicPoll'
import PrivatePoll from './PrivatePoll'

// mock data
const polls = [
    {
        name: "Cats or Dogs?",
        id: 1
    },
    {
        name: "Ice Cream",
        id: 2
    },    
    {
        name: "Java || Bedrock",
        id: 3
    },
    {
        name: "Mario || Sonic",
        id: 4
    },
    {
        name: "Coke or Pepsi?",
        id: 5
    },
    {
        name: "C++ or C",
        id: 6
    },
]
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
    return (
        <div style={pollStyle}>
            {status === 'public' ? polls.map(poll => (
                <PublicPoll poll={poll} key={poll.id} />
            )) : polls2.map(poll => (
                <PrivatePoll poll={poll} key={poll.id} />
            )) }
        </div>
    )
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
