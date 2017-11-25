import React from 'react'
import { Row, Col, Card, Button, Input, Chip, Tag, Table, Modal , Icon } from 'react-materialize'
import styled from 'styled-components'

const Mo = styled.div`
    text-align : right;
`

const CardEmp = props => (
    <div>
        <Card className='grey lighten-5' title='Employees'>
            <Table>
                <thead>
                    <tr>
                        <th data-field="id">First Name</th>
                        <th data-field="name">Last Name</th>
                        <th data-field="price">ID Card</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Alvin</td>
                        <td>Eclair</td>
                        <td>132165165</td>
                    </tr>
                    <tr>
                        <td>Alan</td>
                        <td>Jellybean</td>
                        <td>12341234134</td>
                    </tr>
                    <tr>
                        <td>Jonathan</td>
                        <td>Lollipop</td>
                        <td>666666653145</td>
                    </tr>
                </tbody>
            </Table>
            <div>
                <Mo>
                    <Modal
                        header='Modal Header'
                        trigger={<Button><Icon>person_add</Icon></Button>}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    </Modal>
                </Mo>
            </div>
        </Card>
    </div>
)
export default CardEmp
