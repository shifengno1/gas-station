import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, InputItem, DatePicker, List, ListView, PullToRefresh } from 'antd-mobile';
import { StickyContainer, Sticky } from 'react-sticky';
import 'antd-mobile/dist/antd-mobile.css';
import actions from '../../actions/oilListAction';
import './oilListContainer.pcss'; // 样式引用
import '../../components/List/IndexList.pcss';

let meberRows = [];
function MyBody(props) {
    return (
        <div>
            <div className="am-list-body my-body">
                {props.children}
            </div>
        </div>
    );
}
function formatDate(date) {
    /* eslint no-confusing-arrow: 0 */
    const pad = n => n < 10 ? `0${n}` : n;
    const monthStr = `${date.getFullYear()}-${pad(date.getMonth() + 1)}`;
    return `${monthStr}`;
}
class myOilListContainer extends Component {
    constructor(props) {
        super(props);
        this.onEndReached = this.onEndReached.bind(this);
        this.queryByCons = this.queryByCons.bind(this);
        const dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
        });

        this.state = {
            dataSource: dataSource.cloneWithRows(meberRows),
            refreshing: false,
            isLoading: false,
            hasMore: true,
            sDate: '2018-07',
        };
    }

    async componentDidMount() {
        await this.getList();
    }

    async onEndReached(event) {
        // load new data
        // hasMore: from backend data, indicates whether it is the last page, here is false
        if (this.state.isLoading || !this.state.hasMore) {
            return;
        }
        await this.getList(this.props.listData.pageNo + 1);
    }

    async onRefresh() {
        await this.getList(this.props.listData.pageNo + 1);
    }

    getList(num = 0, time = this.state.sDate) {
        const { oilListData } = this.props;
        const { listData } = this.props;
        if (this.state.isLoading) {
            return;
        } else if (num > 0) {
            if (listData.total < listData.startOfPage + listData.pageSize) {
                return;
            }
        }

        this.setState({
            isLoading: true,
        });

        oilListData({
            memberId: '13',
            time: time,
            pageNo: num,
            pageSize: '10',
        });
        this.showList();
    }

    queryByCons(dateStr) {
        this.setState({
            sDate: dateStr,
        });
        meberRows = [];
        this.getList(0, dateStr);
    }

    showList() {
        setTimeout(() => {
            const { listData } = this.props;

            let hasData = true;
            if (listData.rows.length === 0) {
                hasData = false;
            }
            meberRows = meberRows.concat(listData.rows);

            this.setState({
                isLoading: false,
                dataSource: this.state.dataSource.cloneWithRows(meberRows),
                hasMore: hasData,
                oilSum: listData.data.oilSum,
                moneySum: listData.data.moneySum,
            });
        }, 500);
    }

    render() {
        return (
            <div>
                <List style={{ backgroundColor: 'white' }} className="picker-list">
                    <DatePicker
                        mode="month"
                        extra={this.state.sDate}
                        onChange={date => {
                            this.queryByCons(formatDate(date));
                        }}
                    >
                        <List.Item arrow="horizontal">月份</List.Item>
                    </DatePicker>
                </List>
                <ListView
                    className={'content'}
                    ref={el => this.lv = el}
                    dataSource={this.state.dataSource}
                    renderHeader={() => (
                        <div className={'monthlyTotal'}>
                            总计<span className={'monthlyColor'}> <i id="total_oil">{this.state.oilSum}</i> 升</span><span className={'monthlyColor'}>¥<i id="totle_money">{this.state.moneySum}</i> </span>
                        </div>
                    )}
                    renderFooter={() => (
                        () => (<div style={{ padding: 10, textAlign: 'center' }}>
                            { this.state.hasMore ? this.state.isLoading ? '正在加载...' : '上拉加载' : '没有数据了' }
                        </div>)
                    )}
                    renderBodyComponent={() => <MyBody />}
                    renderRow={(rowData, sectionID, rowID) => {
                        return (
                            <div className={'content-list'} key={rowID}>
                                <div className={'list-title'}>
                                    <div className={'title-name'}>
                                       油站：{rowData.stationName}
                                    </div>
                                    <div className={'title-state'}>
                                        ¥{rowData.cash}
                                    </div>
                                </div>
                                <div className={'list-content'}>
                                    <div className={'content-list-item'}>
                                        <div className={'list-item-title'}>
                                           油罐
                                        </div>
                                        <div className={'list-item-dis'}>
                                            <div>
                                                {rowData.tankNum}
                                            </div>
                                        </div>
                                    </div>
                                    <div className={'content-list-item'}>
                                        <div className={'list-item-title'}>
                                           品类
                                        </div>
                                        <div className={'list-item-dis'}>
                                            <div>
                                                {rowData.oilType}
                                            </div>
                                        </div>
                                    </div>
                                    <div className={'content-list-item'}>
                                        <div className={'list-item-title'}>
                                           油量
                                        </div>
                                        <div className={'list-item-dis'}>
                                            <div>
                                                {rowData.oilSum}
                                            </div>
                                        </div>
                                    </div>
                                    <div className={'content-list-item'}>
                                        <div className={'list-item-title'}>
                                           时间
                                        </div>
                                        <div className={'list-item-dis'}>
                                            {rowData.createTime}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    }}
                    renderSeparator={(sectionID, rowID) => (
                        <div key={`${sectionID}-${rowID}`} style={{ backgroundColor: '#F5F5F9', height: 8 }} />
                    )}
                    initialListSize={10}
                    pageSize={10}
                    scrollRenderAheadDistance={200}
                    scrollEventThrottle={20}
                    onEndReached={this.onEndReached}
                    onEndReachedThreshold={100}
                    style={{
                        height: document.body.clientHeight,
                    }}
                    contentContainerStyle={{ position: 'relative' }}
                    // scrollerOptions={{ scrollbars: true }}
                    pullToRefresh={<PullToRefresh
                        refreshing={this.state.refreshing}
                        onRefresh={this.onRefresh}
                    />}
                />
            </div>
        );
    }
}

export default connect((state) => ({
    listData: state.myOilList.listData,
}), {
    oilListData: actions.myOilListData,
})(myOilListContainer);