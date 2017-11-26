import React from 'react'
import Head from '../components/Head.jsx'
import styled from 'styled-components'
import { Row, Col, Card } from 'react-materialize'
import CardEmp from '../components/card/CardEmp.jsx'

const Con = styled.div`
    margin-left : 243px;
    margin-top : 10px;
` 

class Emp extends React.Component {
    render() {
        return (
            <div>
              <Con>
              <Row>
                  <Col s={9}>
                      <CardEmp />
                  </Col>
              </Row>
          </Con>
            </div>
        )
    }
}
export default Emp
