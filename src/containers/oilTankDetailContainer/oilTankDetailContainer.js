import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, InputItem, DatePicker, List, ListView, PullToRefresh } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import actions from '../../actions/oilTankDetailAction';

import './oilTankDetailContainer.pcss';

function formatDate(date) {
    /* eslint no-confusing-arrow: 0 */
    const pad = n => n < 10 ? `0${n}` : n;
    const dateStr = `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
    // const timeStr = `${pad(date.getHours())}:${pad(date.getMinutes())}`;
    return `${dateStr}`;
}

class oilTankDetailContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: '',
            stockId: '1',
            startDate: '2018-07-01',
            endDate: '2018-07-31',
            pageNo: 0,
            pageSize: 10,
        };
    }

    async componentWillMount() {
        //
    }

    async componentDidMount() {
        const stockIdSti = JSON.stringify(this.props.location.query);
        const stockIdArr = stockIdSti.split('');
        stockIdArr.pop();
        stockIdArr.pop();
        stockIdArr.splice(0, 12);
        const stockpre = stockIdArr.join('');
        // console.log('dataaaaaa', stockpre);
        await this.setState({
            stockId: stockpre,
        });
        // console.log('datanewss', this.state.stockId);
        // console.log('datanewsstype', typeof (this.state.stockId));
        const { stockId, startDate, endDate, pageNo, pageSize } = this.state;
        await this.props.oilDetailData({ stockId, startDate, endDate, pageNo, pageSize });
        // console.log('thisprops', this.props.data);
    }

    render() {
        // console.log('aaaaa', this.props.data);
        const noMore = true;
        const listData = this.props.data;
        return (
            <div className={'content'}>
                <List style={{ backgroundColor: '#E8E8E8', paddingBottom: '10PX' }} className="picker-list">
                    <List.Item>
                        <List.Item.Brief>
                            <DatePicker
                                mode="date"
                                extra={this.state.startDate}
                                onChange={date => {
                                    this.setState({
                                        startDate: formatDate(date),
                                    });
                                }}
                            >
                                <List.Item arrow="horizontal">日期查询</List.Item>
                            </DatePicker>
                        </List.Item.Brief>
                    </List.Item>
                </List>
                {
                    console.log('datadata', listData)
                }
                {
                    listData.length === 0 && <div className="no-more">无更多数据</div>
                }
                {
                    listData.length !== 0 && listData.map((item, index) =>
                        (<div className={'content-list'} key={index}>
                            <div className={'list-row1'}>
                                <div className={'content-row22'}>{item.oilSum}L</div>
                                {
                                    (item.actionType === '进油') && <div className={'content-row2'}>{item.actionType}</div>
                                }
                                {
                                    (item.actionType === '加油') && <div className={'content-row2'} style={{ color: 'green' }}>{item.actionType}</div>
                                }
                            </div>
                            <div className={'list-row2'}>
                                <div style={{ fontSize: '16px', padding: '4px 0 4px 6px' }}>即时储量：{item.oilStock}L</div>
                                <div style={{ fontSize: '16px', padding: '0 0 4px 6px' }}>创建时间：{item.createTime}</div>
                            </div>
                        </div>),
                    )
                }
                {
                    (noMore === true && listData.length !== 0) && <div className="no-more">无更多数据</div>
                }
            </div>
        );
    }
}

export default connect((state) => ({
    data: state.oilDetail.data,
}), {
    oilDetailData: actions.oilDetailData,
})(oilTankDetailContainer);