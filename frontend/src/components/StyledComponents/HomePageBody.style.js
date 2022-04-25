import styled from 'styled-components';
import introImg from '../../imgs/pic1.jpg';


export const IntroCard = styled.div`
    margin-top: 119px; 
    position: absolute;
    width: 1011px;
    height: 431px;
    left: 454px;
    top: 200px;

    background: #7BA2A7;
    box-shadow: 0px 2px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 12px;

    background-image: url(${introImg});
    background-color: #cccccc; 

    transition: all .1s ease-in-out;
    &:hover {
        transform: scale(1.05); 
    }
` 
export const CardTitle = styled.h2`
    font-family: Alata;
    font-style: normal;
    font-weight: normal;
    font-size: 40px;
    line-height: 55px;
    text-align: ${(props) => props.align};
    background-color: #44A3B0;
    border-radius: 12px 12px 0px 0px;
    width: 100%;
    margin: 0px; 
    ${'' /* box-shadow: 0px 2px 4px 4px rgba(0, 0, 0, 0.25); */}

    color: #rrggbb
`

export const CardText = styled.p`
    font-family: Alata;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    line-height: 25px;
    text-align: ${(props) => props.align};
    padding: 20px; 

    color: rgba(255, 255, 255, 0.76);
`

export const DefaultCard = styled.div`

    position: absolute;
    width: ${(props) => props.width};
    height: ${(props) => props.height}; 
    left: ${(props) => props.left};
    top: ${(props) => props.top};

    background: #C4C4C4;
    box-shadow: 0px 2px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;

    background-image: url(${(props) => props.src});
    background-color: #cccccc; 

    transition: all .1s ease-in-out;
    &:hover {
        transform: scale(1.05); 
    }

`