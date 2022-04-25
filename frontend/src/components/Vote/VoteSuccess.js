import React, { useState } from 'react'
import { PieChart, Pie, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, Cell } from 'recharts'
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';


const data = [
    {
      "name": "Dogs",
      "votes": 30
    },
    {
      "name": "Cats",
      "votes": 30
    },
    {
      "name": "Birds",
      "votes": 30
    },
  ]
const data01 = [
    {
      "name": "Group A",
      "value": 400
    }
  ];
  const data02 = [
    {
      "name": "Dogs",
      "value": 30
    },
    {
      "name": "Cats",
      "value": 30
    },
    {
      "name": "Birds",
      "value": 30
    },
  ];

const VoteSuccess = ({ title }) => {

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
            <Grid item xs={4}>
                <h1>Dogs</h1>
            </Grid>
            <Grid item xs={4}>
                <h1>Cats</h1>
            </Grid>
            <Grid item xs={4}>
                <h1>Birds</h1>
            </Grid>
            <Grid item xs={12}>
                <div className="poll-graph">
                {chartType === 'bar' ? 
                    <PieChart width={300} height={250}>
                        {/* <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} >
                            {data01.map((entry, index) => <Cell fill={barColors[index % barColors.length]} />)}
                        </Pie> */}
                        <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} label>
                            {data02.map((entry, index) => <Cell fill={barColors[index % barColors.length]} />)}
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
                        <Bar dataKey="votes" fill="#8884d8" />
                    </BarChart>
                }
                <h2>Votes: {90}</h2>
                </div>
            </Grid>
            <Grid item xs={1}>
                <Button variant="text" onClick={toggleChartType}>{chartType}</Button>
            </Grid>
            <Grid item xs={8}>

            </Grid>
            <Grid item xs={3}>
                <Button 
                    variant="contained" 
                    size="large" 
                    // endIcon={<HowToVoteIcon />} 
                    style={{ width: '80%' }}
                    // onClick={handleVote}
                >
                        Vote
                </Button>
            </Grid>

        </Grid>
    </div>

    )
}

export default VoteSuccess
