import React from 'react';
import { Link } from 'react-router-dom'

function Navigation() {
    return (
        <div className="navbar bg-primary">
            <h1>
                BlockPoll
            </h1>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/createPoll'>Create Poll</Link>
                </li>
                <li>
                    <Link to='/viewPolls'>View Polls</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navigation;





















        // <HeaderContainer className="Header">
        //     <div className="container">
        //         <Icon src={iconImg} /> 
        //         <HeaderLinkTitle to="/"> BlockPoll </HeaderLinkTitle>
        //         <HeaderLink to="/CreatePoll" left='451px'> Create Poll </HeaderLink>
        //         <HeaderLink to="/ViewPolls" left='727px'> View Polls </HeaderLink>
        //         <HeaderLink to="/About" left='983px'> About </HeaderLink>
        //         {/* <Login />  */}
        //     </div>
        // </HeaderContainer>