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



class Head extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
           modal1:false,
           modal2:false,
           modal3:false
        }
    }

    openModal1(){
        this.setState({  
            modal1:true
        })
    }
    openModal2(){
        this.setState({
            modal2:!this.state.modal2,
            
        })
    }
    openModal3(){
        this.setState({
            modal3:!this.state.modal3,
        })
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
        margin-right :   10px;
        margin-top : 5px;
        float:right;
        `
        const Name = styled.div`
            padding : 50px;
        `
        const nstyle = {
            marginTop: '25px',
        }

        const Side = styled.div`
            text-align : right;
        `
        
        const select = (index) => this.setState({ selectedIndex: index });
        const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
        const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;
        const nearbyIcon = <IconLocationOn />;
        const openModal =()=>{
            this.setState({isOpen:true})
        }

        const Modal1 = () =>(
            <div>
                Im1
            </div>
        )

        const Modal2 = () =>(
            <div>
                Im1
            </div>
        )

        const Modal3 = () =>(
            <div>
                Im1
            </div>
        )



        return (
            <div style={hstyle}>
                <Space />
                <ShopLogo style={{ clear: 'both' }} img={logo} />
                <div>
                    <Heading>
                        DASHBORD
                    </Heading>
                </div>
                <div>
                    <Side>
                        <SideNav
                            trigger={<Set>
                                <a style={setting} className="waves-effect" ><Icon>dehaze</Icon></a>
                            </Set>}
                        >
                            <SideNavItem userView
                                user={{
                                    background: 'img/office.jpg',
                                    image: 'img/yuna.jpg',
                                    name: 'John Doe',
                                    email: 'jdandturk@gmail.com'
                                }}
                            />
                            <SideNavItem onClick={this.openModal1} icon='assignment_ind' >Employees</SideNavItem>
                            <SideNavItem icon='recent_actors' >Member</SideNavItem>
                            <SideNavItem onClick={e => console.log(e)} divider />
                            <SideNavItem  >Setting</SideNavItem>
                            <SideNavItem waves href='#!third'>Sign out</SideNavItem>
                        </SideNav>
                    </Side>
                </div>
                <div>
                </div>
                <Modal
      isOpen={this.state.modal1}
      aria={{
          labelledby: "heading",
          describedby: "full_description"
      }}>
      <Modal1/>
      </Modal>
      <Modal
      isOpen={this.state.modal2}
      aria={{
          labelledby: "heading",
          describedby: "full_description"
      }}>
      <Modal2/>
      </Modal>
      <Modal
      isOpen={this.state.modal3}
      aria={{
          labelledby: "heading",
          describedby: "full_description"
      }}>
      <Modal3/>
      </Modal>
            </div>
        )
    }
}

export default Head
