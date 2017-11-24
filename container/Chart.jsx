import React from 'react'
import Head from '../components/Head.jsx'
import Test from '../components/card/Test.jsx'
import styled from 'styled-components'
import SmallCard from '../components/card/SmallCard.jsx'
import { Row, Col, Card, Button } from 'react-materialize'
import Chart from 'chart.js'

const Div = styled.div`
padding-top:7px;
`

const chartData ={
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
    }]
}


class BackCom extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount(){
        let chartCanvas = this.refs.chart;
        
          let myChart = new Chart(chartCanvas, {
            type: 'line',
            data: chartData,
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }
          });
        
          this.setState({chart: myChart});
    }

    componentDidUpdate () {
        let chart = this.state.chart;
        let data = this.props.data;
    
        data.datasets.forEach((dataset, i) => chart.data.datasets[i].data = dataset.data);
    
        chart.data.labels = data.labels;
        chart.update();
    }

    render() {
        return (
            <div>
                <Div>
                    <Row>
                        <Col s={6}>
                        <Card>
                        <canvas ref={'chart'} height={'400'} width={'600'}></canvas>
                        </Card>
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
