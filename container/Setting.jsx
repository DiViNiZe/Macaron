import React from 'react'
import Head from '../components/Head.jsx'
import styled from 'styled-components'
import { Row, Col, Card } from 'react-materialize'
import CardSetting from '../components/card/CardSetting.jsx'

const Con = styled.div`
    margin-left : 243px;
    margin-top : 10px;
`

class Setting extends React.Component {
    render() {
        return (
            <div>
                <Head />
                <Con>
                    <Row>
                        <Col s={9}>
                            <CardSetting />
                        </Col>
                    </Row>
                </Con>
            </div>
        )
    }
}
export default Setting
