import react from 'react'
class LoginBox extends react.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                {this.props.message}
            </div>
        )
    }
}