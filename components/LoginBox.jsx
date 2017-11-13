import React from 'react'
import {Col, Card} from 'react-materialize'
import styled from 'styled-component'

const box = styled.div`

`

const LoginBox = () =>{
    <Col m={6} s={12}>
            <Card className='blue-grey darken-1' textClassName='white-text' title='Card title' actions={[<a href='#'>This is a link</a>]}>
            I am a very simple card.
            </Card>
    </Col>
}
export default LoginBox