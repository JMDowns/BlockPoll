import React from 'react';
import { Link } from 'react-router-dom'; 


function Navigation() {
    return (
        <div className="navigation">
            <div className="container">
                <Link to="/"> BlockPoll </Link>
                <Link to="/CreatePoll"> Create Poll </Link>
                <Link to="/ViewPolls"> View Polls </Link>
                <Link to="/About"> About </Link>
                <Link to="/Login"> Login </Link>
                <Link to="/Signup"> Signup </Link>

            </div>
        </div>
    )
}

export default Navigation;