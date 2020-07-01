import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import './IntervalSet.css';
import * as intervalType from './IntervalTypes';


export default class extends React.Component {
    constructor(props) {
        super(props);
    }

    getDescription() {
        if (this.props.set.type === intervalType.RUN) {
            return 'SPRIING!!';
        } else {
            return 'Vila';
        }
    }

    render() {
        return (
            <Row>
                <Col>
                    <Alert variant="info">
                        <Row>
                            <Col><span className="IntervalSet-description">{ this.getDescription() }</span></Col>
                            <Col><span className="IntervalSet-seconds">{ this.props.set.seconds } sekunder</span></Col>
                        </Row>
                    </Alert>
                </Col>
            </Row>
        );
    }
}
