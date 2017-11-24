import React from 'react'
import Head from '../components/Head.jsx'
import Test from '../components/card/Test.jsx'
import styled from 'styled-components'
import SmallCard from '../components/card/SmallCard.jsx'
import { Row, Col, Card, Button } from 'react-materialize'

const LineChart = require('react-chartjs').Line;


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
                <Div>
                    <Test />
                    <Row>
                        <Col s={6}>
                        {/* <LineChart/> */}
                        </Col>
                        <Col s={6}>
                        </Col>
                    </Row>
                </Div>
            </div>
        )
    }
}
export default BackCom
