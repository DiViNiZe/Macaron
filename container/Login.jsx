import React from 'react'
import {Link} from 'react-router-dom'
import LoginBox from '../components/LoginBox.jsx'

class Login extends React.Component{
    constructor(props){
        super(props)
    }
    
    render(){
        return(
            <div>
                <LoginBox>
                    Login
                </LoginBox>
            </div>
        )
    }
}

export default Login