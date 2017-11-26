import React from 'react'
import ShopLogo from './ShopLogo.jsx'
import styled from 'styled-components'
import { Row, Col, Card, Button, Input, Icon, SideNav, SideNavItem } from 'react-materialize'
import Modal from 'react-modal'
import FontIcon from 'material-ui/FontIcon';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AwsomeModal from '../components/AwsomeModal.jsx'
import {Link} from 'react-router-dom'




class Head extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {

        const backgroundImg = require("../asset/img/flat7_prev.jpg")

        const logo = require("../asset/img/logo.png")

        const user = require("../asset/img/ton.jpg")

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
        margin-right :   10px;
        margin-top : 2px;
        float:left;
        `
        const Name = styled.div`
            padding : 50px;
        `
        const nstyle = {
            marginTop: '25px',
        }

        const full = {
            width:'100%'
        }

        const select = (index) => this.setState({ selectedIndex: index });
        const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
        const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;
        const nearbyIcon = <IconLocationOn />


        return (
            <div style={hstyle}>
                <Space />
               
                <div>
                    <Heading>
                        DRASHBORD
                    </Heading>
                </div>
                <div>
                        <SideNav
                            trigger={<Set>
                                <ShopLogo style={{ clear: 'both' }} img={logo} />
                            </Set>}
                        >
                            <SideNavItem userView
                                user={{
                                    background:backgroundImg,
                                    image: user,
                                    name: 'John Doe',
                                    email: 'Employee'
                                }}
                            />
                            <SideNavItem onClick={this.openModal1} icon='assignment_ind' ><Link style={full} to="/emp">Employee</Link></SideNavItem>
                            <SideNavItem icon='recent_actors' ><Link to="/regis">Regis </Link></SideNavItem>
                            <SideNavItem onClick={e => console.log(e)} divider />
                            <SideNavItem  ><Link to="/">Home</Link></SideNavItem>
                            <SideNavItem  ><Link to="/Store">Store</Link></SideNavItem>
                            <SideNavItem  ><Link to="/setting">Setting</Link></SideNavItem>
                            <SideNavItem waves href='#!third'>Sign out</SideNavItem>
                        </SideNav>
                </div>
                <div>
                </div>
            </div>
        )
    }
}

export default Head
