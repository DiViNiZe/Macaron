import React from 'react'
import ShopLogo from './ShopLogo.jsx'
import styled from 'styled-components'
import { Row, Col, Card, Button, Input, Icon } from 'react-materialize'
import Modal from 'react-modal'



class Head extends React.Component{
constructor(props){
    super(props)
    this.state={isOpen:false}
}

render(){
    
    const logo = require("../asset/img/logo.png")
    
    
    const hstyle = {
        backgroundColor: '#00695c',
        color: 'Black',
        height: '170px',
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
    
    const setting = {
        color: '#eceff1',
        opacity: '0.8',
    }
    
    const Set = styled.div`
        margin-right : 10px;
        margin-top : 5px;
        float:right;
    `
    var greeting = 'hey'
    const openModal = ()=>{
        this.setState = {isOpen:true}
    }
    
    const closeModal = ()=>{
        this.setState = {isOpen:false}
    }
        return(
            
            <div>
                <Space />
                <Set>
                        <a style={setting} className="waves-effect" onClick={openModal}><Icon>settings</Icon></a>
                </Set>
                <ShopLogo style={{clear:'both'}} img={logo} />
                <div>
                    <Heading>
                        DASHBORD
                    </Heading>
                </div>
                <Modal isOpen = {this.state.isOpen}>

                </Modal>
            </div>
        )
    }
}

export default Head