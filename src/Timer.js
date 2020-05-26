import React from 'react';
import * as moment from 'moment'
import './Timer.less';


export default class extends React.Component {
    constructor(props) {
        super(props);

        this.timer = moment();
        this.timer.minute(10);
        this.timer.second(0);
        this.timer.millisecond(0);
        this.state = {
            time: this.timer.format('mm:ss')
        };

        window.setInterval(() => this.updateTime(), 1000);
    }

    updateTime() {
        this.setState({
            time: this.timer.subtract(1, 'seconds').format('mm:ss')
        })
    }

    render() {
        return (
            <h1>{ this.state.time }</h1>
        );
    }
}