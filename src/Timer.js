import React from 'react';
import * as moment from 'moment'
import './Timer.less';


export default class extends React.Component {
    constructor(props) {
        super(props);

        this.timer = moment();

        this.state = {
            time: this.timer.format('mm:ss')
        };

        window.setInterval(() => this.updateTime(), 1000);
    }

    updateTime() {
        this.setState({
            time: this.timer.add(1, 'seconds').format('mm:ss')
        })
    }

    render() {
        return (
            <h1>Hello! { this.state.time }</h1>
        );
    }
}