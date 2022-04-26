import React, {useEffect, useContext } from 'react'
import PropTypes from 'prop-types'
import PublicPoll from './PublicPoll'
import PrivatePoll from './PrivatePoll'
import PollContext from '../../context/poll/pollContext'


const Polls = ({ status }) => {
    const pollContext = useContext(PollContext) 

    const { polls } = pollContext

    return (
        <div style={pollStyle}>
            {status === 'public' ? polls.map(poll => (
                <PublicPoll poll={poll} key={poll.poll_id} />
            )) : polls.map(poll => (
                <PrivatePoll poll={poll} key={poll.poll_id} />
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
