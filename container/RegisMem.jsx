import React from 'react'
import Head from '../components/Head.jsx'
import styled from 'styled-components'
import { Row, Col, Card } from 'react-materialize'
import CardRegis from '../components/card/CardRegis.jsx'

const Con = styled.div`
    margin-left : 243px;
    margin-top : 10px;
` 

class RegisMem extends React.Component {
    render() {
        return (
            <div>
                <Head />
              <Con>
              <Row>
                  <Col s={9}>
                      <CardRegis />
                  </Col>
              </Row>
          </Con>
            </div>
        )
    }
}
export default RegisMem
