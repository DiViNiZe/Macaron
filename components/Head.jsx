import React from 'react'
import ShopLogo from './ShopLogo.jsx'
import styled from 'styled-components'

const logo = require("../asset/img/logo.png")


const hstyle = {
    backgroundColor:'#00695c',
    color:'Black',
    height:'170px',
}

const Heading = styled.div`
    padding:30px 0px 0px 180px;
    width:40px;
    position: absolute;
    font-size:33px;
    font-style:italic;
`
const Space = styled.div`
height:5px;
`

const Head = ()=>(
    <div  style={hstyle} className='z-depth-2'>
            <Space/>
            <ShopLogo img={logo}/>
            <div>
                <Heading>
                    DASHBORD
                </Heading>
            </div>
    </div>
)

export default Head