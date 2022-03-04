import React from 'react'
import {PollFormContainer, PollFormContent, PollFormHeader, PollForm, QuestionContainer, PollTitle,  PollFormLabel, PollFormInput,  } from './StyledComponents/CreatePollForm.style'; 
import {StyledTextField, } from './StyledComponents/CreatePollForm.style'; 

//on SUBMIT HANDLE POST REQUEST TO BACKEND 



export default function CreatePollForm() {
    return (
        <PollFormContainer name="pollcontainer">
            <PollFormHeader name="header">
                Create Poll
            </PollFormHeader>
            <PollFormContent name="content">
                <PollForm name="form">
                    <QuestionContainer name="QuestionContainer">
                        <PollTitle>
                            <PollFormLabel>Title</PollFormLabel>
                            <StyledTextField required={true} 
                                            id="outlined-basic" 
                                            label="Title" 
                                            variant="outlined"
                                            validation="This Field is Required" />
                        </PollTitle>

                        <PollTitle>
                            <PollFormLabel>Title</PollFormLabel>
                            <StyledTextField required={false} 
                                            id="outlined-basic" 
                                            label="Description" 
                                            variant="outlined"
                                            validation="This Field is Required" />
                        </PollTitle>
                    </QuestionContainer>
                </PollForm>
            </PollFormContent>
        </PollFormContainer>
    )
}
