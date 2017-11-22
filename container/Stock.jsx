import React from 'react'
import Head from '../components/Head.jsx'
import Test from '../components/card/Test.jsx'
import styled from 'styled-components'
import Search from '../container/Search.jsx'
import { Row, Col, Card, Button , Input , Icon } from 'react-materialize'


const Div = styled.div`
padding-top:10px;
`

class BackCom extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <Head />
                <Search/>
            </div>
        )
    }
}
export default Stock