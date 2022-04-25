import React, { useState, Fragment, } from 'react'
import Button from '@mui/material/Button';
import { GlobalStyles, } from '../components/StyledComponents/GlobalStyles.style';
import Polls from '../components/ViewPolls/Polls'


export default function ViewPolls() {
    const [status, setStatus] = useState(null) 

    const handlePrivate = () => setStatus('private')
    const handlePublic= () => setStatus('public')

    return (
        <Fragment>
        <GlobalStyles /> 
            <h1>View Polls</h1>
            <ul>
                <li>
                    <Button variant="contained" size="large" fullWidth={true} onClick={handlePublic}>Public</Button>
                </li>
                <li>
                    <Button variant="contained" size="large" fullWidth={true} onClick={handlePrivate}>Private</Button>
                </li>
            </ul>
                {status && <Polls status={status}/>}
        </Fragment>
    )
}

