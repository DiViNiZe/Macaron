import React from 'react'
import { Row, Col, Card, Button, Input, Chip, Tag } from 'react-materialize'
import styled from 'styled-components'

const Css = styled.div`

`

const CardSetting = props => (
    <Css>
        <Card className='grey lighten-5' title='Setting'actions={[<a href='#'>Save</a>]} >
            <div>
                <Row>
                    <Input s={6} label="First Name" validate defaultValue='Alvin' />
                </Row>
                <Row>
                    <Input s={6} label="Address" validate defaultValue='3/97 Condo The Cube' />
                </Row>
            </div>
            <div>
                <Row>
                    <Col s={12}>
                        <div>Employees :
                        <Chip>
                                <img src='../asset/img/logo.png' alt='Contact Person' />
                                Jane Doe
		            </Chip>
                            <Tag>tag</Tag>
                        </div>
                    </Col>
                </Row>
            </div>
        </Card>
    </Css >
)
export default CardSetting
