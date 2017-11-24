import React from 'react'
import Head from '../components/Head.jsx'
import styled from 'styled-components'
import { Row, Col, Card, Button } from 'react-materialize'
import ChartCard from '../components/card/ChartCard.jsx'
import ChartCard2 from '../components/card/ChartCard2.jsx'

const Div = styled.div`
padding-top:25px;
`

const chartData ={
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri","Sat"],
    datasets: [{
        label: 'Sells History',
        data: [12, 19, 3, 5, 2, 3,20],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
        ],
        borderColor: [
            'rgba(255,99,132,1)', 
        ],
        borderWidth: 1
    }]
}
const chartData2 ={
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
    datasets: [{
        label: 'Sells History',
        data: [12, 19, 3, 5, 2, 3,20,11,50,35,12,62],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
        ],
        borderColor: [
            'rgba(255,99,132,1)', 
        ],
        borderWidth: 1
    }]
}


class Chart extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Div s>
                    <Row>
                        <Col s={6}>
                            <ChartCard data={chartData} />
                        </Col>
                        <Col s={6}>
                            <ChartCard data={chartData2} />
                        </Col>
                    </Row>
                </Div>
            </div>
        )
    }
}
export default Chart
