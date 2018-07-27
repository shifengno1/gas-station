import React, { Component } from 'react';

import './OiltankStockContainer.pcss';

export default class OilCard extends Component {

    constructor(props) {
        super(props);
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
        const { listData = [] } = this.props;
        // const listData = [];
        return (
            <div className={'content'}>
                {
                    console.log('datadata', listData)
                }
                {
                    listData.length !== 0 && listData.map((item, index) =>
                        (<div className={'content-list'} key={index}>
                            <div className={'content-left'}>
                                <img src={require('./image/barrel_danger_inner.png')} alt={'oilTank'} className={'imgs'} />
                            </div>
                            <div className={'content-right'}>
                                <div className={'content-row1'}>
                                    {item.stationName}
                                </div>
                                <div>
                                    <span className={'content-row2'}>{item.tankNum}</span>
                                    <span className={'content-row22'}>{item.oilType}</span>
                                </div>
                                <div className={'content-row3'}>
                                    {item.oilStock}L
                                </div>
                                <div className={'content-row4'}>
                                    温度：{item.oilTemp}
                                </div>
                            </div>
                        </div>),
                    )
                }

            </div>
        );
    }
}
