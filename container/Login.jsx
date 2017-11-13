import React from 'react'
import {Link} from 'react-router-dom'

class Login extends React.Component{
    constructor(props){
        super(props)
    }
    
    render(){
        return(
            <div>
                Login
                <ul>
                    <li><Link to='/notFound'>link</Link></li>
                </ul>
            </div>
        )
    }
}

export default Login