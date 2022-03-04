import styled from 'styled-components';
import TextField from '@mui/material/TextField';


export const StyledTextField = styled(TextField)`
    width: 90%;
    background: #F8FAFC;
    border-radius: 4px;
`


export const PollFormContainer = styled.div`
    margin-top: 119px; 

    position: absolute;
    width: 1048px;
    height: 1032px;
    left: 403px;
    top: 207px;

    border-radius: 10px; 
    box-shadow: 0px 2px 4px 4px rgba(0, 0, 0, 0.25);
    z-index: 10; 

    background: #C4C4C4;
`

export const PollFormHeader = styled.h2`
    text-align: center; 

    font-family: Alata;
    font-style: normal;
    font-weight: normal;
    font-size: 64px;
    line-height: 88px;

    color: #000000;

`

export const PollFormContent = styled.div`
    margin: auto;
    width: 90%;
    height: 75%; 
    border: 3px solid green;
    padding: 10px;
    
;
`

export const PollForm = styled.form`
    margin: auto;
    width: 80%;
    height: 80%;
    border: 3px solid green;
    padding: 10px;
    position: absolute;


    display: flex;
    flex-direction: column;
    column-gap: 20px; 


`

export const QuestionContainer = styled.div`
    ${'' /* display: flex;  */}
    flex-direction: column; 
    flex-wrap: wrap; 
`

export const PollTitle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;
    ${'' /* margin: auto;  */}

    width: 90%; 

    border: 3px solid green;



    position: absolute;
`

export const PollFormLabel = styled.label`
    font-family: IBM Plex Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 170%;
    color: #6F7482;
    letter-spacing: 0.01em;
    padding: 4px; 

    transition: all .1s ease-in-out;
    &:hover {
        transform: scale(1.05); 
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