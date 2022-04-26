import React, { useState } from 'react'
import { PieChart, Pie, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, Cell } from 'recharts'
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'


const VoteSuccess = ({ title, data, totalVotes }) => {

    const [chartType, setChartType] = useState('bar')

    const barColors =['#003699', '#28a745', '#dc3545']

    const toggleChartType = () => {
        if(chartType === 'bar') {
            setChartType('pie')
        }
        else {
            setChartType('bar')
        }
    }

    return (
        <div className="vote">
        <h1>{title}</h1>
        <Grid container>
            <Grid item xs={12}>
                <div className="poll-graph">
                {chartType === 'bar' ? 
                    <PieChart width={300} height={250}>
                        <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} label>
                            {data.map((entry, index) => <Cell fill={barColors[index % barColors.length]} />)}
                        </Pie>
                        <Legend />
                    </PieChart> 
                    :
                    <BarChart width={300} height={250} data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="votes">
                            {data.map((entry, index) => <Cell fill={barColors[index % barColors.length]} />)}
                        </Bar>
                    </BarChart>
                }
                <h2>Votes: {totalVotes+1}</h2>
                </div>
            </Grid>
            <Grid item xs={1}>
                <Button variant="text" onClick={toggleChartType}>{chartType}</Button>
            </Grid>
            <Grid item xs={8}>

            </Grid>
            <Grid item xs={3}>
                <Link to='/viewPolls'>
                    <Button 
                        variant="contained" 
                        size="large" 
                        // endIcon={<HowToVoteIcon />} 
                        style={{ width: '80%' }}
                        // onClick={handleVote}
                    >
                        View Polls
                    </Button>
                </Link>

            </Grid>

        </Grid>
    </div>

    )
}

export default VoteSuccess
