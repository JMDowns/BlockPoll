import React, { useState, } from 'react'
import { useParams } from 'react-router-dom'
import Grid from '@mui/material/Grid';
import Checkbox from '@mui/material/Checkbox';

const Vote = () => {

    const { id } = useParams()

    // get from state later
    const title = 'Cats or Dogs or Birds?'


    return (
        <div className="vote">
            <h1>{title}</h1>
            <Grid container>
                <Grid item xs={8}>
                    <div className="poll-option">
                        <Checkbox  size='large'/>
                        <h1>Dogs</h1>
                    </div>
                </Grid>
                <Grid item xs={8}>
                    <div className="poll-option">
                        <Checkbox  size='large'/>
                        <h1>Cats</h1>
                    </div>
                </Grid>
                <Grid item xs={8}>
                    <div className="poll-option">
                        <Checkbox  size='large'/>
                        <h1>Birds</h1>
                    </div>
                </Grid>
                <Grid item xs={8}>
                    <div className="poll-option">
                        <Checkbox  size='large'/>
                        <h1>Birds</h1>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Vote
