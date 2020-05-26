import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import './App.css';
import Timer from './Timer';

const App = () => (
    <Container>
        <Jumbotron>
            <h1 className="header">Interval timers! :D</h1>
        </Jumbotron>
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

export default App;
