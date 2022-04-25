import React from 'react'
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import HowToVoteIcon from '@mui/icons-material/HowToVote';
import PollIcon from '@mui/icons-material/Poll';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
// Needs to get some value from backend on where poll is created 
// -> Preferably the ID
export default function SucessCreatePoll(props) {

    const { title, description, answerOptions, privatePoll, id} = props

    // refreshes the CreatePoll page and resets state
    function refreshPage() {
        window.location.reload(false);
      }

    return (
        <div className="create-success">
            <h1><CheckBoxIcon /> Poll Created : {title}</h1>
            <Grid container>
                <Grid item xs={4}>
                    <h2>Description</h2>
                    <div className='created-description'>
                        {description}
                    </div>
                </Grid>
                <Grid item xs={8}>
                    <div className='created-options'>
                        <h2>Options</h2>
                    </div>
                    <div>
                        <ol>
                            {answerOptions.map((element, index) => <li key={index}>{element.option}</li> )}
                        </ol>
                    </div>

                </Grid>
                <Grid item xs={6}>
                    <div className="poll-button-container">
                        <Button variant='contained' endIcon={<HowToVoteIcon />}>
                            Vote on this Poll 
                        </Button>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div className="poll-button-container">
                        <Button variant='contained' endIcon={<PollIcon />}>
                            View Other Polls 
                        </Button>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}
