import { createGlobalStyle } from 'styled-components';


// I want to add a gradient from current color to deep blue 
// but for some reason it is not working with styled components 

export const GlobalStyles = createGlobalStyle`
    body {
        background-color: #7BA2A7;
        margin: 0px; 
        padding: 0px;
    }

`