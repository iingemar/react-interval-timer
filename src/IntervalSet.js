import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import './App.css';
import Timer from './Timer';
import * as intervalType from './IntervalTypes';


export default class extends React.Component {
    constructor(props) {
        super(props);
    }

    getDescription() {
        if (this.props.set.type === intervalType.RUN) {
            return 'HIGH';
        } else {
            return 'LOW';
        }
    }

    render() {
        return (
            <Row>
                <Col>
                    <Alert variant="info">
                        <Row>
                            <Col><h1>{ this.getDescription() }</h1></Col>
                            <Col><Timer seconds={this.props.set.seconds }/></Col>
                        </Row>
                    </Alert>
                </Col>
            </Row>
        );
    }
}
