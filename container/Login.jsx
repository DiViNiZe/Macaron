import React from 'react'
import {Link} from 'react-router-dom'
import LoginBox from '../components/LoginBox.jsx'

class Login extends React.Component{
    constructor(props){
        super(props)
    }
    
    render(){
    const style = {
        width:'100%',
        height:'100%',
        backgroundColor:'rgba(255, 255, 255, 0.8)'
    }
        return(
            <div style = {style}>
                <LoginBox>
                    Login
                </LoginBox>
            </div>
        )
    }
}

export default Login