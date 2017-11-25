import React from 'react'
import {Col, Card,Input,Button} from 'react-materialize'
import styled from 'styled-components'

const Box = styled.div`
width:600px;
height:444px;
position:absolute;
left:31%;
top:5%;       
border-radius:19px;
margin: auto;
`


const Form = styled.div`

`

const submit = {
    marginTop:'40px',
    left:'36%'
}

const logoimg = {
    height:'200px',
    width:'auto',
    marginLeft:'122px'
}
const logo = require("../asset/img/macaron.png")

export default () =>(
    <div>
        <Box>
        <Col s={12}>
            <Card m={6} s={12} className='grey lighten-5'  title='Login' >
            <img style={logoimg} src={logo} width={167} alt=""/>
                <Form>
                    <Input placeholder="Username" s={6} />
                    <Input type="password" placeholder="Password" s={12} />
                    <Input name='isRemember' type='checkbox' value={'true'} label='Remember me ?' />
                    <Button style={submit} waves='light'>Rock'n Roll</Button>
                </Form>
            </Card>
        </Col>
        </Box>
    </div>
)