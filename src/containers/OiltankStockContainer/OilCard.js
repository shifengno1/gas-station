import React, { Component } from 'react';

import './OiltankStockContainer.pcss';

export default class OilCard extends Component {

    constructor(props) {
        super(props);
        // this.toDetailPage = this.toDetailPage.bind(this);
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
    toDetailPage(value) {
        console.log(value);
        // console.log(event.target.className);
        location.href = `${location.protocol}//${location.host}/entry/index.html#/oilTankDetail?stockId=${value}`;
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
                        (<div className={'content-list'} key={index} value={item.stockId} onClick={() => this.toDetailPage(item.stockId)}>
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
