import React from 'react'
import Head from '../components/Head.jsx'
import Search from './Search.jsx'
import Chart from './Chart.jsx'
import styled from 'styled-components'
import {
    Switch,
    Route,
} from 'react-router'
import Store from './Store.jsx'
import Setting from './Setting.jsx'
import RegisMem from './RegisMem.jsx'
import Emp from './Emp.jsx'

 

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
                <Route path='/store' component={Store}/>
                <Route path='/setting' component={Setting}/>
                <Route path='/regis' component={RegisMem}/>
                <Route path='/emp' component={Emp}/>
            </Switch>
            </div>
        )
    }
}
export default BackCom
