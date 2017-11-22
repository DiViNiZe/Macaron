import React from 'react'
import ShopLogo from './ShopLogo.jsx'
import styled from 'styled-components'
import { Row, Col, Card, Button, Input, Icon } from 'react-materialize'
import Modal from 'react-modal'


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
    text-align : right;
    margin-right : 10px;
    margin-top : 5px;
`
const Head = () => (
    <div style={hstyle} className='z-depth-2'>
        <Space />
        <ShopLogo img={logo} />
        <div>
            <Heading>
                DASHBORD
                </Heading>
        </div>
        <Modal isOpen = {true}>
            <Set>
                <a style={setting} className="waves-effect" href="#modal1"><Icon>settings</Icon></a>
            </Set>
            <div id="modal1" className="modal modal-fixed-footer">
                <div className="modal-content">
                    <h4>Modal Header</h4>
                    <p>A bunch of text</p>
                </div>
                <div className="modal-footer">
                    <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat ">Agree</a>
                </div>
            </div>
        </Modal>
    </div>
)

export default Head