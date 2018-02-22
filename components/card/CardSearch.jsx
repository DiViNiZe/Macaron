import React from 'react'
import { Row, Col, Card, Button, Input, Icon } from 'react-materialize'
import styled from 'styled-components'

const Css = styled.div`
margin : 0px ;
padding : 0px  !important;
margin-bottoom : 0px;
margin-top : 0px;
height:200px;
`

const NoSpace = styled.div`
margin:0px;
padding:0px;
float : right;
text-align : right;
`
const InputBar = styled.div`
float : left;
margin:0px;
padding:0px;
`
const ButtonBar = styled.div`
margin-top: 20px;
margin-left: 10px;
margin-right: 5px;
margin-bottom: 0px;
float : left;

`

const CardSearch = props => (
    <div>
        <NoSpace>
            <InputBar>
                <Input label="Search" onChange={props.onChange} />
            </InputBar>
            <ButtonBar>
                <Button waves='light'><Icon>search</Icon></Button>
            </ButtonBar>

        </NoSpace>
    </div>
)
export default CardSearch
