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

class App extends React.Component {

    constructor(props){
        super(props)    
    }

   render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={Login}/>
                    <Route path='/notFound' component={NotFoundPage}/>
                </Switch>
            </div>
        )
   } 
}

export default App