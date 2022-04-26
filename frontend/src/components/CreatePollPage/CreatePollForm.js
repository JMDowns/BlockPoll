import React, {useState, useContext, Fragment, } from 'react'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid';
import Switch from '@mui/material/Switch';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import SuccessCreatePoll from './SucessCreatePoll'
import Spinner from '../layout/Spinner'
import PollContext from '../../context/poll/pollContext'



export default function CreatePollForm() {

    const pollContext = useContext(PollContext) 
    const { createPoll, loading, createBucket } = pollContext


    // CREATE UNIQUE ID WHEN CONNECTION HAPPENS 
    const [values, setValues] = useState({
        title: "",
        description: "",
        answerOptions: [{
            option: ''
        },{
            option: ''
        }],
        privatePoll: false, 
        id: 0
    })

    const [submitted, setSubmitted] = useState(false)


    // POST REQUEST TO THE BACKEND // 
    const handleSubmit = async (e) => {

        // generate id and create poll 
        const id = Math.floor(Math.random() * 100000)
        setValues({...values, id: id})
        await createPoll(id, values.title)
        
        // create correct number of buckets 
        for(let i=0; i<values.answerOptions.length; i++) {
            createBucket(id, values.answerOptions[i].option)
        }

        e.preventDefault() 
        setSubmitted(true) 
    }

    const handleChange = (i, e) => {
        let newValues = [...values.answerOptions]
        newValues[i][e.target.id] = e.target.value
        setValues({...values, answerOptions: newValues})
    }

    const addFormFields = () => {
        setValues({ ...values, answerOptions: [...values.answerOptions, { option: '' }] }) 
    }

    const removeFormFields = (i) => {
        const newValues = [...values.answerOptions];
        newValues.splice(i, 1);
        setValues({ ...values, answerOptions: newValues })
    }

    const handleTitleChange = (e) => {
        setValues({...values, title: e.target.value})
    }

    const handleDescriptionChange = (e) => {
        setValues({...values, description: e.target.value})
    }

    const handlePrivateChange = () => {
        if(values.privatePoll === false){
            setValues({...values, privatePoll: true})
            return
        }
        setValues({...values, privatePoll: false})
    }



    if(loading) {
        return <Spinner /> 
    }
    else {
        return (
            <div className="create-poll-container">
                {submitted ? 
                    <SuccessCreatePoll 
                        title={values.title}
                        description={values.description}
                        privatePoll={values.privatePoll}
                        answerOptions={values.answerOptions}
                        id={values.id}
                        sub={setSubmitted} 
                        
                    />  :
                    <Fragment>
                    <form name="create-poll" onSubmit={handleSubmit}>
                    <Grid container>
                        <Grid item xs={6}>
                            <h1>Create Poll</h1>
                        </Grid>
                        <Grid item xs={6}>
                        </Grid>
                        <Grid item xs={6}>
                            <div className="question-container">
                                <label>Title</label>
                                <TextField
                                    required={true}
                                    value={values.title}
                                    onChange={handleTitleChange}
                                    id="Title" 
                                    placeholder="Title" 
                                    variant="outlined"
                                    validation="This Field is Required" 
                                    sx={{ backgroundColor: '#F8FAFC' }}
                                />
                                <label>Description</label>
                                <TextareaAutosize
                                    value={values.description}
                                    onChange={handleDescriptionChange}
                                    id="Description" 
                                    label="Description" 
                                    placeholder="Description"
                                    variant="outlined"
                                    minRows={3}
                                    validation="This Field is Required"
                                    sx={{ backgroundColor: '#F8FAFC' }} 
                                />
                                <label>Private</label>
                                    <Switch
                                        onChange={handlePrivateChange}
                                        inputProps={{ 'aria-label': 'controlled' }}
                                />
                                <Button  
                                    type="submit" 
                                    variant="contained">Create Poll
                                </Button>
                            </div>
                        </Grid>
                        <Grid item xs={6}>
                            <div className="option-container">
                                <label>Answer Options</label>
                                {values.answerOptions.map((element, index) => (
                                    <Fragment key={index}>
                                        <TextField
                                            required={true}
                                            value={element.option}
                                            onChange={e => handleChange(index, e)}
                                            id="option"
                                            placeholder={`Option ${index+1}`} 
                                            variant="outlined"
                                            validation="This Field is Required"
                                            sx={{ backgroundColor: '#F8FAFC' }}
                                        />
                                    </Fragment>
                                ))}
                                {values.answerOptions.length < 5 ?
                                    <Button 
                                        variant="text"
                                        onClick={() => addFormFields()}
                                    >
                                        Add Option
                                    </Button>
                                : null}
                                {values.answerOptions.length > 2 ? 
                                    <Button 
                                        variant="text"
                                        color="error"
                                        onClick={() => removeFormFields()}
                                    >
                                    Remove Option
                                    </Button>                        
                                : null}
                            </div>
                        </Grid>
                    </Grid>
                    </form>
                    </Fragment>
                }
            </div>
        )
    }


}
