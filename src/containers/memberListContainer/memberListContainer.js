import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Picker, List, ListView, PullToRefresh } from 'antd-mobile';
import { StickyContainer, Sticky } from 'react-sticky';
import 'antd-mobile/dist/antd-mobile.css';
import actions from '../../actions/memberListAction';
import './memberListContainer.pcss'; // 样式引用
import '../../components/List/IndexList.pcss';

let meberRows = [];
const months = [
    [
        {
            label: '2018',
            value: '2018',
        },
        {
            label: '2019',
            value: '2019',
        },
    ],
    [
        {
            label: '1月',
            value: '01',
        },
        {
            label: '2月',
            value: '02',
        },
        {
            label: '3月',
            value: '03',
        },
        {
            label: '4月',
            value: '04',
        },
        {
            label: '5月',
            value: '05',
        },
        {
            label: '6月',
            value: '06',
        },
        {
            label: '7月',
            value: '07',
        },
        {
            label: '8月',
            value: '08',
        },
        {
            label: '9月',
            value: '09',
        },
        {
            label: '10月',
            value: '10',
        },
        {
            label: '11月',
            value: '11',
        },
        {
            label: '12月',
            value: '12',
        },
    ],
];
function CustomChildren(props) {
    return (
        <div
            onClick={props.onClick}
            style={{ backgroundColor: '#fff', paddingLeft: 15 }}
        >
            <div className="test" style={{ display: 'flex', height: '45px', lineHeight: '45px' }}>
                <div style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{props.children}</div>
                <div style={{ textAlign: 'right', color: '#888', marginRight: 15 }}>{props.extra}</div>
            </div>
        </div>);
}

function MyBody(props) {
    return (
        <div>
            <div className="am-list-body my-body">
                {props.children}
            </div>
        </div>
    );
}

class memberListContainer extends Component {
    constructor(props) {
        super(props);
        this.onEndReached = this.onEndReached.bind(this);
        const dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
        });

        this.state = {
            dataSource: dataSource.cloneWithRows(meberRows),
            refreshing: false,
            isLoading: false,
            hasMore: true,
            sValue: ['2018', '07'],
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
        if (this.state.isLoading || listData.total < listData.startOfPage + listData.pageSize) {
            return;
        }
        this.setState({
            isLoading: true,
        });
        memberListData({
            operatorId: '1',
            item: '11',
            time: '2018-06',
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
                    <Picker
                        data={months}
                        title="选择月份"
                        cascade={false}
                        extra="请选择(必选)"
                        value={this.state.sValue}
                        onChange={v => this.setState({ sValue: v })}
                        onOk={v => this.setState({ sValue: v })}
                    >
                        <List.Item arrow="horizontal">月份</List.Item>
                    </Picker>
                </List>
                <ListView className={'content'}
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