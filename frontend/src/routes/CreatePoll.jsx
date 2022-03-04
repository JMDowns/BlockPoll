import React from 'react';
import Navigation from '../components/Navigation';
import { GlobalStyles, } from '../components/StyledComponents/GlobalStyles.style';
import CreatePollForm from '../components/CreatePollForm';

export default function CreatePoll (){
    return (
        <div>
        <GlobalStyles /> 
            <Navigation /> 
            <CreatePollForm /> 
        </div>
    )
}
