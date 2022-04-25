import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

// Used
export const StyledTextField = styled(TextField)`
    width: 85%;
    background: #F8FAFC;
    border-radius: 4px;
`

// Used
export const PollFormContainer = styled.div`
    margin: auto; 
    margin-top: 12%;

    width: 50%;
    height: 100%; 


    border-radius: 10px; 
    box-shadow: 0px 2px 4px 4px rgba(0, 0, 0, 0.25);
    z-index: 10; 

    background: #C4C4C4;
`

// Used
export const PollFormHeader = styled.h2`
    text-align: center; 

    font-family: Alata;
    font-style: normal;
    font-weight: normal;
    font-size: 400%;
    line-height: 88px;

    color: #000000;

    background-color: #44A3B0;
    border-radius: 10px 10px 1px 1px; 

`

// Used needs changes 
export const PollFormContent = styled.div`
    margin: auto;
    width: 90%;
    height: 75%; 
    ${'' /* border: 3px solid red; */}
    padding: 10px;
    
;
`

// used needs changes 
export const PollForm = styled.form`
    margin: auto;
    width: 50%;
    height: 80%;
    ${'' /* border: 3px solid green; */}
    padding: 10px;
    position: absolute;


    display: flex;
    flex-direction: column;
    column-gap: 20px; 


`


// Used 
export const QuestionContainer = styled.div`
    ${'' /* display: flex;  */}
    flex-direction: column; 
    flex-wrap: wrap; 
`

export const PollFormLabel = styled.label`
    font-family: IBM Plex Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 170%;
    color: #6F7482;
    letter-spacing: 0.01em;
    padding: 4px; 

    vertical-align: middle;

    margin-bottom: 1%;

    transition: all .1s linear;
    &:hover {
        transform: scale(1.01); 
    }
`

export const PollFormInput = styled.input`

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 12px;

    position: static;
    ${'' /* width: 460px; */}
    height: 48px;
    left: 0px;
    top: 26px;

    /* Surface/Light */

    background: #F8FAFC;
    border-radius: 4px;

    /* Inside auto layout */

    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
    margin: 2px 0px;


    ::placeholder{
        ${'' /* font-size: 40px;  */}
        font-style: roboto-condensed;
        font-size: 2em;
        padding: 5px;
    }

`

export const Block = styled.div`
    margin-bottom: ${props => props.marginBottom};
    display: flex;
    flex-direction: column;
`

export const StyledButton = styled(Button)`
    width: 50%;
    position: absolute; 
`

export const CreatePollPage = styled.div`
    position: absolute;
    top:0px;
    right:0px;
    bottom:0px;
    left:0px;
`