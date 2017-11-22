import React from 'react'
import { Row, Col, Card, Button ,Input , Icon} from 'react-materialize'
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
`

const noSpace = {
    margin:'0px',
    padding:'0px',
    marginLeft : '100px'
}

const CardSearch = props => (
    <div>
           <NoSpace>
                <Input label="Search"/>
                <Button waves='light'><Icon>search</Icon></Button>
            </NoSpace>
    </div>
)
export default CardSearch
