import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, PullToRefresh } from 'antd-mobile';
import { StickyContainer, Sticky } from 'react-sticky';
import 'antd-mobile/dist/antd-mobile.css';
import actions from '../../actions/rechargeListAction';
// import Waiting from '../../components/Waiting/Waiting';
import './memberListContainer.pcss'; // 样式引用

function MyBody(props) {
    return (
        <div>
            <p><span>月份</span> <input type="text" value="2018-08" /></p>
            <p style={{ borderTop: '1px solid grey', paddingTop: '2px' }}><span>总额</span>2000</p>
            <div className="am-list-body my-body">
                {props.children}
            </div>
        </div>
    );
}

class rechargeListContainer extends React.Component {
    constructor(props) {
        super(props);
        this.onEndReached = this.onEndReached.bind(this);
        const dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
        });

        // this.initData = [];
        // for (let i = 0; i < 20; i++) {
        //    this.initData.push(`r${i}`);
        // }
        this.state = {
            dataSource: dataSource.cloneWithRows([]),
            refreshing: false,
            isLoading: false,
            hasMore: true,
            rowsData: [],
            allMoney: '',
        };
    }

    // 返回记录滚动位置三件套1-针对切换Tab情况：
    async componentDidMount() {
        if (this.props.listData.rows.length === 0) {
            await this.getList();
        }
    }
    async onEndReached() {
        // load new data
        // hasMore: from backend data, indicates whether it is the last page, here is false
        if (this.state.isLoading && !this.state.hasMore) {
            return;
        }
        await this.getList(this.props.listData.pageNo + 1);
    }
    async onRefresh() {
        console.log('onRefresh');
        await this.getList(this.props.listData.pageNo + 1);
    }
    getList(num = 0) {
        console.log('gitList:', num);
        const { rechargeListData } = this.props;
        const { listData } = this.props;
        if (this.state.isLoading || listData.total < listData.startOfPage + listData.pageSize) {
            return;
        }
        this.setState({
            isLoading: true,
        });
        rechargeListData({
            memberId: '12',
            time: '2018-08',
            pageNo: num,
            pageSize: '10',
        });
        this.showList();
    }
    showList() {
        setTimeout(() => {
            const { listData } = this.props;
            let hasData = true;
            if (listData.rows.length === 0) {
                hasData = false;
            }
            this.state.rowsData = this.state.rowsData.concat(listData.rows);
            this.setState({
                isLoading: false,
                dataSource: this.state.dataSource.cloneWithRows(this.state.rowsData),
                hasMore: hasData,
            });
        }, 500);
    }
    render() {
        return (
            <ListView
                ref={(el) => this.lv = el}
                dataSource={this.state.dataSource}
                renderHeader={() => (
                    <div>
                        <p>充值流水列表</p>
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
                        <div key={rowID} style={{ padding: 10 }}>
                            <div>
                                <p><span>充值金额：</span>{rowData.money}</p>
                                <p><span>充值方式：</span>{rowData.rechargeType}</p>
                                <p><span>充值时间：</span>{rowData.createTime}</p>
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
        );
    }
}

export default connect((state) => ({
    listData: state.recharge.listData,
    allMoney: state.recharge.allMoney,
}), {
    rechargeListData: actions.rechargeListData,
})(rechargeListContainer);