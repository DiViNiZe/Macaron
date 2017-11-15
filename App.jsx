import React from 'react'
import {
    Route,
    Link,
    Router,
    Switch,
    } from 'react-router'
import {HashRouter} from 'react-router-dom'
import Login from './container/Login.jsx'
import NotFoundPage from './container/NotFoundPage.jsx'
import BackCom from './container/BackCom.jsx'
import Menu from './components/Menu.jsx'
import './asset/css/style.css'


class App extends React.Component {

    constructor(props){
        super(props)    
    }

   render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={Login}/>
                    <Route path='/dash' component={BackCom}/>
                </Switch>
            </div>
        )
   } 
}

export default App