import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import './App.css';
import Timer from './Timer';
import * as intervalType from './IntervalTypes';


export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            times: 5,
            set: [
                { type: intervalType.RUN, seconds: 60 },
                { type: intervalType.REST, seconds: 60 },
                { type: intervalType.RUN, seconds: 30 },
                { type: intervalType.REST, seconds: 60 },
                { type: intervalType.RUN, seconds: 30 },
                { type: intervalType.REST, seconds: 60 }
            ]
        });
        // this.handleClick = this.handleClick.bind(this);
    }

    render() {
        return (
            <Container>
                <Jumbotron>
                    <h1 className="header">Interval timers! :D</h1>
                </Jumbotron>
                <Row>
                    <Col>
                        <Button variant="primary" size="lg">Start</Button>{' '}
                        <Button variant="secondary" size="lg">Stop</Button>{' '}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Alert variant="info">
                            <Row>
                                <Col><h1>Spring!</h1></Col>
                                <Col><Timer /></Col>
                            </Row>
                        </Alert>
                    </Col>
                </Row>
                <Row>
                    <Col><h2>Vila</h2></Col>
                    <Col><Timer /></Col>
                </Row>
                <Row>
                    <Col><h2>Spring</h2></Col>
                    <Col><Timer /></Col>
                </Row>
            </Container>
        );
    }
}
