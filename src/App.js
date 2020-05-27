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
import IntervalSet from "./IntervalSet";

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

    renderSet(set, index) {
        return (
            <IntervalSet key={index} set={set}/>
        );
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
                { this.state.set.map(this.renderSet) }
            </Container>
        );
    }
}
