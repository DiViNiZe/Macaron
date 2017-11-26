import React from 'react'
import {Card,Icon,Col,Button} from 'react-materialize'
import Styled from 'styled-components'

const img = require('../../asset/img/pao.jpg')
const fileServer = 'http://localhost:3000'

const price = 
{fontSize:'22px',
}

const iden = {
    fontSize:'12px'
}
const button = {
    margin:'14px'
}
const Center = Styled.div`
position: fixed;
bottom: 0px;
left: 0px;
right: 0px;
margin-bottom: 0px;
`


const prodCard = props =>(
    <Col  s={2}>
       <div className="card">
        <div className="card-image waves-effect waves-block waves-light">
            <img src={fileServer+props.img} alt="" className="activator"/>
        </div>
        <div className="card-content" >
            <span className="card-title activator grey-text text-darken-4"><p>{props.title}</p>
                <Icon className="material-icon right">more_vert</Icon>
                <span style = {iden}>ID:{props.id}</span>
                <span style={price} className="right">{props.price}฿</span>
            </span>
        </div>
        <div className="card-reveal">
            <span className="card-title gray-text text-darken-4">{props.title}<Icon className="material-icon right">close</Icon></span>
            <p>{props.des}</p>
            <Center>
            <Button className="red" style={button}>Sale</Button>
            <Button style={button}>Edit</Button>
            </Center>
        </div>
       </div> 
    </Col>
)

export default prodCard