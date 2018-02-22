import React from 'react'
import Head from '../components/Head.jsx'
import styled from 'styled-components'
import { Row, Col, Card } from 'react-materialize'
import SmallCard from '../components/card/SmallCard.jsx'
import SmallCard2 from '../components/card/SmallCard2.jsx'
import ChartCard from '../components/card/ChartCard.jsx'

const chartData = {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [{
        label: 'Sells History',
        data: [12, 19, 3, 5, 2, 3, 20],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
        ],
        borderColor: [
            'rgba(255,99,132,1)',
        ],
        borderWidth: 1
    }]
}

const BigBox = styled.div`
    margin-top : 10px;
`
const Box = styled.div`
    margin-top : 4px;
`

class Home extends React.Component {
    render() {
        return (
            <div>
                <Head />
                <BigBox>
                    <Row>
                        <Col s={12}>
                            <Col s={6}>
                                <ChartCard data={chartData} />
                            </Col>
                            <Box>
                                <Col s={6}>
                                    <Row>
                                        <SmallCard2 />
                                    </Row>
                                    <Row>
                                        <SmallCard2 />
                                    </Row>
                                </Col>
                            </Box>
                        </Col>
                    </Row>
                </BigBox>
            </div>
        )
    }
}
export default Home
