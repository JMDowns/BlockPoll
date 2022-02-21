import React from 'react';
import { HeaderContainer } from './HeaderContainer.style';
import { Icon } from './Icon.style';
import iconImg from '../imgs/blockchain.png';
import { HeaderLinkTitle, HeaderLink, } from './HeaderLink.style';
import Login from './Login';


function Navigation() {
    return (
        <HeaderContainer>
            <div className="container">
                <Icon src={iconImg} /> 
                <HeaderLinkTitle to="/"> BlockPoll </HeaderLinkTitle>
                <HeaderLink to="/CreatePoll" left='451px'> Create Poll </HeaderLink>
                <HeaderLink to="/ViewPolls" left='727px'> View Polls </HeaderLink>
                <HeaderLink to="/About" left='983px'> About </HeaderLink>
                <Login /> 
                {/* <LoginLink to="/Login" left='1539px' color='#C4C4C4'> Login </LoginLink> */}
                {/* <LoginLink to="/Signup" left='1723px' color='#38A0EB'> Signup </LoginLink> */}
            </div>
        </HeaderContainer>
    )
}

export default Navigation;