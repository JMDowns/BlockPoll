import React from 'react'
import { IntroCard, CardTitle, CardText, DefaultCard } from './StyledComponents/HomePageBody.style';
import pic3 from '../imgs/pic3.jpg';
import {GlobalStyles, } from './StyledComponents/GlobalStyles.style' 

export default function HomePageBody() {
    return (
        <div>
            <GlobalStyles />
            <IntroCard> 
                <CardTitle align='center'>
                    The Most Secure Polling Platform
                </CardTitle>
                <CardText align='center'>
                    The most familiar use for blockchain is of course cryptocurrencies like Bitcoin and Ethereum. However, there are many more wide reaching applications for blockchain. With this revolutionary technology on the horizon, our team wanted to build something that would expose us to the world of blockchain to better understand the details of these increasingly important systems 
                </CardText>
            </IntroCard>

            <DefaultCard width='700px' height='300px' left='250px' top='892px' src={pic3}>
                <CardTitle align='left'>
                    Built With XRPL
                </CardTitle>
                <CardText align='left'> 
                    The XRP Ledger is a fast, energy efficient, and reliable blockchain with a strong open source foundation making it easy for developers to build upon it
                </CardText>
            </DefaultCard>

            <DefaultCard width='700px' height='300px' left='1000px' top='1334px' src={pic3}>
                <CardTitle align='left'>
                    Secure Polling  
                </CardTitle>
                <CardText align='left'> 
                    Using XRPL we can ensure that there are no issues such as double voting. The decentralized nature of the blockchain keeps track of every transaction and would catch a user trying to place a double vote   
                </CardText>
            </DefaultCard>

            <DefaultCard width='700px' height='300px' left='250px' top='1776px' src={pic3}>
                <CardTitle align='left'>
                    Tech Stack  
                </CardTitle>
                <CardText align='left'> 
                    Using ReactJS for our frontend and Django as our backend. We have created a project able to create polls and store the votes for each poll on the XRPL blockchain.    
                </CardText>
            </DefaultCard>
        </div>
    )
}
