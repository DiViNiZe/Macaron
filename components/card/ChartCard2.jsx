import React from 'react'
import styled from 'styled-components'
import { Row, Col, Card, Button } from 'react-materialize'
import Chart from 'chart.js'

const Div = styled.div`
padding-top:7px;
`

class ChartCard extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        let chartCanvas = this.refs.chart;

        let myChart = new Chart(chartCanvas, {
            type: 'line',
            data: this.props.data,
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });

        this.setState({ chart: myChart });
    }

    componentDidUpdate() {
        let chart = this.state.chart;
        let data = this.props.data;

        data.datasets.forEach((dataset, i) => chart.data.datasets[i].data = dataset.data);

        chart.data.labels = data.labels;
        chart.update();
    }

    render() {
        return (
            <div>
                <Card>
                    <canvas ref={'chart'} height={'400'} width={'600'}></canvas>
                </Card>
            </div>
        )
    }
}
export default ChartCard
