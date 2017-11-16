import React from 'react'
import CardSearch from '../components/card/CardSearch.jsx'
import SmallCard2 from '../components/card/SmallCard2.jsx'
import styled from 'styled-components'
import {Col,Row} from 'react-materialize'

const Div = styled.div`
padding-top:10px;
`

const Search = () =>(
    <div>
        <Div>
                    <Row>
                            <CardSearch />
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