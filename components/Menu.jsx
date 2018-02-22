import React from 'react'
import styled from 'styled-components'

const Bottom = styled.div`
backgroud-color:red
height:10px;
`

const test = {
    backgroundColor:'blue'
}

const Menu = props =>(
    <div styled={test}>
        {props.name}
    </div>
)

export default Menu