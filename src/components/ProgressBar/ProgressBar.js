import React, { Component } from 'react';

import './ProgressBar.pcss';

export default class ProgressBar extends Component {

    constructor(props) {
        super(props);
        console.log('ProgressBar');
    }

    render() {
        const { progress, progressStyle } = this.props;
        return (
            <div className="progress-bar" style={{ width: `${progressStyle.proWidth}` }}>
                <div className="progress-bg" style={{ height: `${progressStyle.proHeight}` }} />
                <div className="progress-active" style={{ width: `${progress}`, height: `${progressStyle.proHeight}` }} />
            </div>
        );
    }
}
