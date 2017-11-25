import React from 'react'
import Head from '../components/Head.jsx'
import Search from './Search.jsx'
import Chart from './Chart.jsx'
import styled from 'styled-components'
import {
    Switch,
    Route,
} from 'react-router'
 

const Div = styled.div`
padding-top:7px;
`

class BackCom extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <Head />              
            <Switch>
                <Route exact path='/' component={Chart}/>
                <Route path='/search' component={Search} />
            </Switch>
            </div>
        )
    }
}
export default BackCom
