import React from 'react'
import ShopLogo from './ShopLogo.jsx'
import styled from 'styled-components'

const logo = require("../asset/img/logo.png")


const hstyle = {
    backgroundColor:'#00695c',
    color:'red',
    height:'210px',
    fontFamily:' Barlow, sans-serif'
}


const Head = ()=>(
    <div style={hstyle}>
            <ShopLogo img={logo}/>
            <div>
                dashbord
            </div>
    </div>
)

export default Head