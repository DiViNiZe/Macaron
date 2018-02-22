import React from 'react'
import CardSearch from '../components/card/CardSearch.jsx'
import SmallCard2 from '../components/card/SmallCard2.jsx'
import styled from 'styled-components'
import { Col, Row } from 'react-materialize'

const Div = styled.div`
padding-top:10px;
margin-bottom : 0px;
clear : both;
`

const Bar = styled.div`
    margin: 0px;
    padding: 0px;
    marginLeft: 100px;
`

const Search = () => (
    <div>
            <Bar>
                <CardSearch />
            </Bar>
            <Div>
            <Row>
                <Col s={3}>
                    <SmallCard2 />
                </Col>
                <Col s={3}>
                    <SmallCard2 />
                </Col>
                <Col s={3}>
                    <SmallCard2 />
                </Col>
                <Col s={3}>
                    <SmallCard2 />
                </Col>
            </Row>
            <Row>
                <Col s={3}>
                    <SmallCard2 />
                </Col>
                <Col s={3}>
                    <SmallCard2 />
                </Col>
                <Col s={3}>
                    <SmallCard2 />
                </Col>
                <Col s={3}>
                    <SmallCard2 />
                </Col>
            </Row>
        </Div>
    </div>
)

export default Search