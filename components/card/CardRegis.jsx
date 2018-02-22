import React from 'react'
import { Row, Col, Card, Button, Input, Chip, Tag } from 'react-materialize'
import styled from 'styled-components'
import ImageUploader from 'react-images-upload';

const Css = styled.div`
    margin-bottom : 50px;
`

const Bir = styled.div`
    float : left;
    clear : both;
    margin-top : 27px;
    margin-left : 25px;
`

const Sex = styled.div`
    margin-top : 30px;
`


class CardRegis extends React.Component {

    constructor(props) {
        super(props);
        this.state = { pictures: [] };
        this.onDrop = this.onDrop.bind(this);
    }

    onDrop(picture) {
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });
    }

    render() {
        return (
            <div>
                <Card className='grey lighten-5' title='Register' actions={[<a href='#'>Save</a>]} >
                    <div>
                        <Row>
                            <Input s={6} label="First Name" validate defaultValue='Peter' />
                            <Input s={6} label="Last Name" validate defaultValue='Yu' />
                        </Row>
                    </div>

                    <div>
                        <Row>
                            <Sex>
                                <Col s={6}>
                                    <div>
                                        <Col>
                                            Sex :
                            </Col>
                                    </div>
                                    <Input name='group1' type='radio' value='Male' label='Male' />
                                    <Input name='group1' type='radio' value='Female' label='Female' />
                                </Col>
                                <Col s={6}>
                                    <div>
                                    </div>
                                </Col>
                            </Sex>
                        </Row>
                    </div>

                    <div>
                        <Bir>
                            Birthday :
                </Bir>
                        <Row>
                            <Input name='on' type='date' onChange={function (e, value) { }} />
                        </Row>
                    </div>

                    <div>
                        <Row>
                            <Input s={12} label="Address" />
                        </Row>
                    </div>

                    <div>
                        <Row>
                            <Input s={6} label="Telephone" validate type='tel'></Input>
                        </Row>
                    </div>

                    <div>
                        <ImageUploader
                            withIcon={true}
                            buttonText='Choose Images Profile'
                            onChange={this.onDrop}
                            imgExtension={['.jpg', '.gif', '.png', '.gif']}
                            maxFileSize={5242880}
                        />
                    </div>
                </Card>
            </div>
        );
    }
}
export default CardRegis
