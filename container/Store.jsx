import React from 'react'
import Head from '../components/Head.jsx'
import styled from 'styled-components'
import { Row, Col, Card } from 'react-materialize'
import CardStore from '../components/card/CardStore.jsx'

const StoreCard = styled.div`
    margin-top : 10px;
`

class Store extends React.Component {
    render() {
        return (
            <div>
                <Head />
                <StoreCard>
                    <Row>
                        <Col s={12}>
                            <Col s={3}>
                                <CardStore />
                            </Col>
                            <Col s={3}>
                                <CardStore />
                            </Col>
                            <Col s={3}>
                                <CardStore />
                            </Col>
                            <Col s={3}>
                                <CardStore />
                            </Col>
                        </Col>
                    </Row>
                </StoreCard>
            </div>
        )
    }
}
export default Store
