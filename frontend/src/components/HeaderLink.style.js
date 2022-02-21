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


// export const LoginLink = styled(NavLink)`
//     position: absolute;
//     width: 144px;
//     height: 62px;
//     left: ${(props) => props.left};
//     top: 29px;

//     background: #C4C4C4;
//     box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
//     border-radius: 22px;

//     font-family: Alata;
//     font-style: normal;
//     font-weight: normal;
//     font-size: 44px;
//     line-height: 50px;

//     text-decoration: none; 
//     padding-left: 30px;
//     padding-top: 10px;

//     background-color: ${(props) => props.color};
//     color: rgba(255, 255, 255, 0.76);

// `