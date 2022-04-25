import './App.css'
import React, { Fragment } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation';
import HomePageBody from './components/HomePageBody'; 
import CreatePoll from './routes/CreatePoll'
import ViewPolls from './routes/ViewPolls'
import Vote from './routes/Vote'
import PollState from './context/poll/pollState'


const App = () => {
  return (
    <PollState>
      <Router>
        <Fragment>
          <Navigation /> 
          <div className="container">
            <Routes>
              <Route path='/' element={<HomePageBody />} />
              <Route path='/createPoll' element={<CreatePoll />} />
              <Route path='/viewPolls' element={<ViewPolls />} />
              <Route path='/poll/:id' element={<Vote />} />
            </Routes>
          </div>
        </Fragment>
      </Router>
    </PollState>
  );
}

export default App;
