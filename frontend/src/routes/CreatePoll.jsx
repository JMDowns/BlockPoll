import React from 'react';
import { GlobalStyles, } from '../components/StyledComponents/GlobalStyles.style';
import CreatePollForm from '../components/CreatePollPage/CreatePollForm';

export default function CreatePoll (){
    return (
        <div className="CreatePollPage" style={{height: "100%", display: "flex", flexDirection: "column" }}>
            <GlobalStyles /> 
            <CreatePollForm /> 
        </div>
    )
}
