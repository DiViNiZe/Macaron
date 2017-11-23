import React from 'react'
import ShopLogo from './ShopLogo.jsx'
import styled from 'styled-components'
import { Row, Col, Card, Button, Input, Icon , Modal } from 'react-materialize'



class Head extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

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
        const Name = styled.div`
            padding : 50px;
     `
        const nstyle ={
            marginTop : '25px'
            }

        return (
            <div style={hstyle}>
            {console.log(Modal)}
                <Space />
                <Modal
	                header='Modal Header'
	                trigger={<Set>
                        <a style={setting} className="waves-effect" ><Icon>settings</Icon></a>
                    </Set>}>
	                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
		                incididunt ut labore et dolore magna aliqua.</p>
                </Modal>
                <ShopLogo style={{ clear: 'both' }} img={logo} />
                <div>
                    <Heading>
                        DASHBORD
                    </Heading>
                </div>
            </div>
        )
    }
}

export default Head
