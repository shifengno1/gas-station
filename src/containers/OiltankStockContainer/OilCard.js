import React, { Component } from 'react';

import './OiltankStockContainer.pcss';

export default class OilCard extends Component {

    constructor(propos) {
        super(propos);
        this.state = {
            temp: '',
        };
    }

    componentWillMount() {
        // alert('');
    }

    componentDidMount() {
        // alert('');
    }

    render() {
        return (
            <div>
                <div
                    className="storeItem_wrap"
                    data-stock="0"
                    data-safestock="0.00"
                    data-capacity="20000.00"
                    data-waterstock=""
                    data-levelstock=""
                    data-levelid=""
                >
                    <div className="storeItem">
                        <div className="barGrap">
                            <div className="barGrapInnerWrap">
                                <div style={{ bottom: '0%', display: 'none' }}>
                                    <img src={require('./image/safe_line.png')} alt={'safe_line'} />
                                </div>
                                <div className="barGrapInner">
                                    <img
                                        src={require('./image/barrel_danger_inner.png')}
                                        alt={'barrel_danger_inner'}
                                        style={{ display: 'none' }}
                                    />
                                    <img
                                        src={require('./image/barrel_danger_inner_bot.png')}
                                        alt={'barrel_danger_inner_bot'}
                                        style={{ display: 'none' }}
                                    />
                                </div>
                            </div>
                        </div>

                        <p>
                            WJXSR001撬装站
                        </p>
                        <p>
                            <span className="storeItem_tag">3号罐</span>

                            <span className="storeItem_tag" style={{ marginLeft: '5px' }}>0#柴油国六</span>

                        </p>

                        <p className="storeItem_num">0.00L</p>

                        <p className="storeItem_label">报警值: <span>未设置</span></p>

                        <p className="storeItem_label">时 间: <span>2018-06-13 19:32:22</span>
                        </p>

                    </div>

                </div>
            </div>
        );
    }
}
