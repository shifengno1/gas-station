import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, InputItem, DatePicker, List, ListView, PullToRefresh } from 'antd-mobile';
import { StickyContainer, Sticky } from 'react-sticky';
import 'antd-mobile/dist/antd-mobile.css';
import actions from '../../actions/memberListAction';
import './memberListContainer.pcss'; // 样式引用
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
class memberListContainer extends Component {
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
            item: '11',
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

    getList(num = 0) {
        const { memberListData } = this.props;
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
        const timeStr = this.state.sDate.concat('', '-01');
        memberListData({
            operatorId: '1',
            item: this.state.item,
            time: timeStr,
            pageNo: num,
            pageSize: '10',
        });
        this.showList();
    }

    queryByCons(event) {
        meberRows = [];
        this.getList();
    }

    showList() {
        setTimeout(() => {
            const { listData } = this.props;
            let hasData = true;
            if (listData.rows.length === 0) {
                hasData = false;
            }
            meberRows = meberRows.concat(listData.rows);
            // meberRows = listData.rows;
            this.setState({
                isLoading: false,
                dataSource: this.state.dataSource.cloneWithRows(meberRows),
                hasMore: hasData,
            });
        }, 500);
    }

    render() {
        return (
            <div>
                <List style={{ backgroundColor: 'white' }} className="picker-list">
                    <List.Item
                        extra={<Button
                            type="primary"
                            onClick={this.queryByCons}
                            size="small"
                            inline
                        >
                             查询
                        </Button>}
                        multipleLine
                    >
                        <List.Item.Brief>
                            <DatePicker
                                mode="month"
                                extra={this.state.sDate}
                                onChange={date => {
                                    this.setState({
                                        sDate: formatDate(date),
                                    });
                                }}
                            >
                                <List.Item arrow="horizontal">月份</List.Item>
                            </DatePicker>
                            <InputItem
                                placeholder="请输入姓名、卡号、手机号"
                                onChange={val =>
                                this.setState({
                                    item: val,
                                })}
                            />
                        </List.Item.Brief>
                    </List.Item>
                </List>
                <ListView
                    className={'content'}
                    ref={el => this.lv = el}
                    dataSource={this.state.dataSource}
                    renderHeader={() => (
                        <div>
                            <p>会员列表</p>
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
                                       姓名：{rowData.name}
                                    </div>
                                    <div className={'title-state'}>
                                        {rowData.createTime}
                                    </div>
                                </div>
                                <div className={'list-content'}>
                                    <div className={'content-list-item'}>
                                        <div className={'list-item-title'}>
                                           卡号
                                        </div>
                                        <div className={'list-item-dis'}>
                                            <div>
                                                {rowData.icCardNum}
                                            </div>
                                        </div>
                                    </div>
                                    <div className={'content-list-item'}>
                                        <div className={'list-item-title'}>
                                           余额
                                        </div>
                                        <div className={'list-item-dis'}>
                                            {rowData.cardSum}
                                        </div>
                                    </div>
                                    <div className={'content-list-item'}>
                                        <div className={'list-item-title'}>
                                           车牌
                                        </div>
                                        <div className={'list-item-dis'}>
                                            {rowData.plateNumber}
                                        </div>
                                    </div>
                                    <div className={'content-list-item'}>
                                        <div className={'list-item-title'}>
                                           手机
                                        </div>
                                        <div className={'list-item-dis'}>
                                            {rowData.phone}
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
    listData: state.member.listData,
}), {
    memberListData: actions.memberListData,
})(memberListContainer);