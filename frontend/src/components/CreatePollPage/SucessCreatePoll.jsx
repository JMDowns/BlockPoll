import React from 'react'
import {PollFormHeader, PollFormLabel, StyledButton, PollFormContainer, Block, } from '../StyledComponents/CreatePollForm.style'
import { NavLink } from 'react-router-dom'; 



// Needs to get some value from backend on where poll is created 
// -> Preferably the ID
export default function SucessCreatePoll() {

    // refreshes the CreatePoll page and resets state
    function refreshPage() {
        window.location.reload(false);
      }

    return (
        <PollFormContainer className="SuccessCard" height="50%">
            <PollFormHeader>Poll Created</PollFormHeader>
            <Block alignItems="center">
                <NavLink to="/viewPolls">
                    <StyledButton>View Poll</StyledButton>
                </NavLink>
                <PollFormLabel>Or</PollFormLabel>
                <StyledButton onClick={refreshPage}>Create Another</StyledButton>
            </Block>

        </PollFormContainer>
    )
}
