import styled from 'styled-components';
import { NavLink } from 'react-router-dom'; 


export const HeaderLinkTitle = styled(NavLink) `

    position: absolute;
    width: 281px;
    height: 87px;
    left: 122px;
    top: 20px;

    font-family: Rosario;
    font-style: normal;
    font-weight: normal;
    font-size: 72px;
    line-height: 87px;
    color: #000000;

    text-decoration: none; 

    transition: all .1s ease-in-out;
    &:hover {
        transform: scale(1.05); 
    }
`


export const HeaderLink = styled(NavLink) `

    position: absolute;
    width: 50vw;
    height: 66px;
    left: ${(props) => props.left};
    top: 34px;

    font-family: Alata;
    font-style: normal;
    font-weight: normal;
    font-size: 48px;
    line-height: 66px;
    text-decoration: none; 

    color: rgba(255, 255, 255, 0.76);
`
