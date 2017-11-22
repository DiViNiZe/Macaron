import React from 'react'
import Head from '../components/Head.jsx'
import Test from '../components/card/Test.jsx'
import styled from 'styled-components'
import SmallCard from '../components/card/SmallCard.jsx'
import { Row, Col, Card, Button } from 'react-materialize'


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
                <Row>
                    <Col s={4}>
                    <Test />
                    </Col>
                    
                    <Col s={4}>
                    <Test />
                    </Col>
                    <Col s={4}>
                    <Test />
                    </Col>
                    </Row>
            </div>
        )
    }
}
export default BackCom
