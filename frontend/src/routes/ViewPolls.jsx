import React, { useState, useEffect, useContext, Fragment, } from 'react'
import Button from '@mui/material/Button';
import { GlobalStyles, } from '../components/StyledComponents/GlobalStyles.style';
import Polls from '../components/ViewPolls/Polls'
import PublicIcon from '@mui/icons-material/Public';
import PublicOffIcon from '@mui/icons-material/PublicOff';
import PollContext from '../context/poll/pollContext'


export default function ViewPolls() {
    const [status, setStatus] = useState(null) 

    const handlePrivate = () => setStatus('private')
    const handlePublic= () => setStatus('public')

    const pollContext = useContext(PollContext) 

    useEffect(() => {
        pollContext.getPolls() 
    }, [])

    return (
        <Fragment>
        <GlobalStyles /> 
            <h1>View Polls</h1>
            <ul>
                <li>
                    <Button 
                        variant="contained" 
                        size="large" 
                        fullWidth={true} 
                        onClick={handlePublic}
                        endIcon={<PublicIcon />}
                    >
                        Public
                    </Button>
                </li>
                <li>
                    <Button 
                    variant="contained" 
                    size="large" fullWidth={true} 
                    onClick={handlePrivate}
                    endIcon={<PublicOffIcon />}
                >
                    Private
                </Button>
                </li>
            </ul>
                {status && <Polls status={status}/>}
        </Fragment>
    )
}

