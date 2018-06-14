/**
 * Created by chenqu on 2017/8/9.
 */
import React, { Component } from 'react';
import ProgressBar from '../ProgressBar/ProgressBar';
import './Release.pcss';

export default class Release extends Component {

    render() {
        const { item } = this.props;
        const detail = item.indicators[0];
        const progressStyle = {
            proWidth: '100%',
            proHeight: '6px',
        };
        const { rate } = detail;
        let ratePercent = rate * 100;
        if (ratePercent > 100) {
            ratePercent = 100;
        }
        return (
            <div>
                <div className="release-title">{ detail.indicatorName }</div>
                <div className="release-value">{ detail.indicatorValue }</div>
                <div className={detail.trend === 'up' ? 'release-note-up' : 'release-note-down'}>环比上月&nbsp;<span className={!detail.ratio || detail.ratio === 0 || detail.ratio === '￥0' ? 'hide' : ''}>{ detail.ratio }</span></div>
                <div className="progress">
                    <ProgressBar progress={`${ratePercent}%`} progressStyle={progressStyle} />
                    <div className="progress-detail">
                        <div className="progress-completion">完成度&nbsp;<span>{ `${Math.round(detail.rate * 100)}%` }</span></div>
                        <div className="progress-index">指标额&nbsp;<span>{ detail.target }</span></div>
                    </div>
                </div>
            </div>
        );
    }

}
