import React, {useState, } from 'react'

import {PollFormContainer, PollFormContent, PollFormHeader, PollForm, QuestionContainer,  PollFormLabel,  } from '../StyledComponents/CreatePollForm.style'; 
import {StyledTextField, Block, StyledButton } from '../StyledComponents/CreatePollForm.style'; 

import Switch from '@mui/material/Switch';
import SuccessCreatePoll from './SucessCreatePoll'


export default function CreatePollForm() {

    const [values, setValues] = useState({
        title: "",
        description: "",
        answerOption1: "",
        answerOption2: "",
        answerOption3: "", 
        private: false, 
    })

    const [submitted, setSubmitted] = useState(false)

    // POST REQUEST TO THE BACKEND // 
    const handleSubmit = (e) => {
        e.preventDefault() 
        setSubmitted(true) 
    }

    const handleTitleChange = (e) => {
        setValues({...values, title: e.target.value})
    }

    const handleDescriptionChange = (e) => {
        setValues({...values, description: e.target.value})
    }

    const handleOption1Change = (e) => {
        setValues({...values, answerOption1: e.target.value})
    }

    const handleOption2Change = (e) => {
        setValues({...values, answerOption2: e.target.value})
    }

    const handleOption3Change = (e) => {
        setValues({...values, answerOption3: e.target.value})
    }

    const handlePrivateChange = () => {
        if(values.private === false){
            setValues({...values, private: true})
            return
        }
        setValues({...values, private: false})
    }

    return (
        <div className ="CreatePollPageBody">
            {submitted ? <SuccessCreatePoll sub={setSubmitted} />  : //PUT THE SUCCESSCREATEPOLL HERE
            <PollFormContainer name="pollcontainer" height="105%">
                <PollFormHeader name="header">
                    Create Poll
                </PollFormHeader>
                <PollFormContent name="content">
                    <PollForm name="form" onSubmit={ handleSubmit }>
                        <QuestionContainer name="QuestionContainer">
                            <Block marginBottom="5%">
                                <PollFormLabel htmlFor="Title">Title</PollFormLabel>
                                    <StyledTextField required={true} 
                                                    value={values.title}
                                                    onChange={handleTitleChange}
                                                    id="Title" 
                                                    label="Title" 
                                                    variant="outlined"
                                                    validation="This Field is Required" />
                            </Block>

                            <Block marginBottom="5%">
                                <PollFormLabel htmlFor="Description">Description</PollFormLabel>
                                <StyledTextField required={false} 
                                                value={values.description}
                                                onChange={handleDescriptionChange}
                                                id="Description" 
                                                label="Description" 
                                                variant="outlined"
                                                validation="This Field is Required" />
                            </Block>

                            <Block marginBottom="5%">
                                <PollFormLabel htmlFor="Answer1">Answer Options</PollFormLabel>
                                <StyledTextField required={true} 
                                                value={values.answerOption1}
                                                onChange={handleOption1Change}
                                                id="Answer1" 
                                                label="Option 1" 
                                                variant="outlined"
                                                validation="This Field is Required" />

                                <StyledTextField required={true} 
                                                value={values.answerOption2}
                                                onChange={handleOption2Change}
                                                id="Answer2" 
                                                label="Option 2" 
                                                variant="outlined"
                                                validation="This Field is Required" />
                                <StyledTextField required={false} 
                                                value={values.answerOption3}
                                                onChange={handleOption3Change}
                                                id="Answer3" 
                                                label="Option 3" 
                                                variant="outlined"
                                                validation="This Field is Required" />
                                </Block>
                                <Block marginBottom="5%">
                                    <PollFormLabel value={values.private} id="Private">Private (via link only)</PollFormLabel>
                                    <Switch
                                        onChange={handlePrivateChange}
                                        inputProps={{ 'aria-label': 'controlled' }}
                                    />
                                </Block>

                        </QuestionContainer>
                        <Block display="flex" 
                                    alignItems="center" 
                                    justifyContent="center"
                                    height="10%">
                            <StyledButton type="submit" onSubmit={handleSubmit}>Create Poll</StyledButton>
                        </Block>
                    </PollForm>
                </PollFormContent>
            </PollFormContainer>
            }
        </div>

    )
}
