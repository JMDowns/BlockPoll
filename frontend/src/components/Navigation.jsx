import React from 'react';
import { HeaderContainer } from './StyledComponents/HeaderContainer.style';
import { Icon } from './StyledComponents/Icon.style';
import iconImg from '../imgs/blockchain.png';
import { HeaderLinkTitle, HeaderLink, } from './StyledComponents/HeaderLink.style';
// import Login from './Login';


function Navigation() {
    return (
        <HeaderContainer>
            <div className="container">
                <Icon src={iconImg} /> 
                <HeaderLinkTitle to="/"> BlockPoll </HeaderLinkTitle>
                <HeaderLink to="/CreatePoll" left='451px'> Create Poll </HeaderLink>
                <HeaderLink to="/ViewPolls" left='727px'> View Polls </HeaderLink>
                <HeaderLink to="/About" left='983px'> About </HeaderLink>
                {/* <Login />  */}
            </div>
        </HeaderContainer>
    )
}

export default Navigation;