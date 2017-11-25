import React from 'react'
import {
    Route,
    Link,
    Router,
    Switch,
    Redirect 
    } from 'react-router'
import {HashRouter} from 'react-router-dom'
import NotFoundPage from './container/NotFoundPage.jsx'
import BackCom from './container/BackCom.jsx'
import Home from './container/Home.jsx'
import Store from './container/Store.jsx'
import Setting from './container/Setting.jsx'
import RegisMem from './container/RegisMem.jsx'
import Emp from './container/Emp.jsx'
import Menu from './components/Menu.jsx'
import Login from './container/Login.jsx'
import './asset/css/style.css'

class App extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            username:''
        }  
    }

    checkAuth(){
        const user = localStorage.getItem('username')
        return true
    }

   render() {
    const PrivateRoute = ({ component: Component,component:Login }) => (
        <Route render={props => (
          this.state.username !=  '' ? (
            <Redirect to={{
                pathname: '/login',
                state: { from: props.location }
      }}/>          ) : (
            <Component/>
          )
        )}/>
      )

        return (
            <div>
                    {/* <PrivateRoute path="/" component={BackCom}/>
                    <Route path="/login" component={Login}/> */}
                    {/* <BackCom/> */}
                    {/* <Home /> */}
                    {/* <Store /> */}
                    {/* <Setting /> */}
                    <RegisMem />
                    {/* <Emp /> */}
            </div>
        )
   } 
}

export default App