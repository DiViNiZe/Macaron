import React from 'react'
import Head from '../components/Head.jsx'
import Test from '../components/card/Test.jsx'
import styled from 'styled-components'
import SmallCard from '../components/card/SmallCard.jsx'
import { Row, Col, Card, Button } from 'react-materialize'

const BarChart = require("react-chartjs").Bar;



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
                <Div>
                    <Test />
                    <Row>
                        <Col s={6}>
                            <BarChart/>
                        </Col>
                        <Col s={6}>
                            <SmallCard />
                        </Col>
                    </Row>
                </Div>
            </div>
        )
    }
}
export default BackCom
