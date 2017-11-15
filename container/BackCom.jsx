import React from 'react'
import Head from '../components/Head.jsx'
import Test from '../components/card/Test.jsx'
import styled from 'styled-components'

const Div = styled.div`
padding-top:10px;
`

class BackCom extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <Head/>
                <Div>
                    <Test/>
                </Div>
            </div>
        )
    }
}
export default BackCom