import React, { Fragment, } from 'react'
import spinner from './spinner.gif'
import {GlobalStyles} from '../StyledComponents/GlobalStyles.style'

const Spinner = () => 
        <Fragment>
        <GlobalStyles /> 
            <img src={spinner} alt="loading..." style={{ width: '100px', margin: 'auto', display: 'block', marginTop: '10%' }} />
        </Fragment>

export default Spinner
