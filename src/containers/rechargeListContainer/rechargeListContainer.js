import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'antd-mobile';
import { StickyContainer, Sticky } from 'react-sticky';
import 'antd-mobile/dist/antd-mobile.css';
import actions from '../../actions/rechargeListAction';
import Waiting from '../../components/Waiting/Waiting';
import './rechargeListContainer.pcss'; // 样式引用

class rechargeListContainer extends React.Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: ds,
            waiting: false,
        };
    }

    // 返回记录滚动位置三件套1-针对切换Tab情况：
    componentDidMount() {
        // 首屏初始数据
        if (this.props.listData.rows.length === 0) {
            this.getList();
        }
    }

    // 优化性能，避免多次重复渲染，只根据关心的数据选择是否渲染,这里比较随意
    shouldComponentUpdate(nextProps, nextState) {
        return (!nextProps.listData.rows || this.props.listData.rows.length !== nextProps.listData.rows.length)
            || (this.props.listData.pageNo !== nextProps.listData.pageNo);
    }

    async getList(pageNo = 0) {
        const { rechargeListData } = this.props;
        this.setState({
            waiting: true,
        });
        await rechargeListData({
            operatorId: '1',
            item: '11',
            time: '2018-06',
            pageNo: 0,
            pageSize: '3',
        });
        const { listData } = this.props;
        console.log(listData);
        this.setState({
            waiting: false,
            dataSource: this.state.dataSource.cloneWithRows(listData.rows),
        });
    }

    // ListView 稍微复杂 看不懂的去这里 https://mobile.ant.design/components/list-view/ 然后再去这里 http://www.jianshu.com/p/1293bb8ac969
    render() {
        const { listData } = this.props;
        if (listData.rows.length === 0) {
            console.log('渲染Loading页面');
            return (
                <Waiting height={`${window.innerHeight - 285}px`} />
            );
        }
        const separator = (rowID) => (
            <div
                key={`separator-${rowID}`}
                style={{
                    backgroundColor: '#F5F5F9',
                    height: '0.1rem',
                    borderTop: '1px solid #ECECED',
                    borderBottom: '1px solid #ECECED',
                }}
            />
        );
        const row = (rowData, rowID) => {
            return (
                <div style={{ height: 200 }}>
                    <p>{rowData.name}</p>
                    {rowData.icCardNum}
                </div>
            );
        };
        console.log('主页渲染了一次');
        return (
            <div>
                <div style={{ margin: '0 auto', width: '100%' }}>
                    <ListView
                        dataSource={this.state.dataSource}
                        renderFooter={() => (
                            <div style={{ padding: 30, textAlign: 'center' }}>
                                {this.state.waiting ? 'Loading...' : 'Loaded'}
                            </div>
                        )}
                        renderRow={(rowData, sectionId, rowId) => row(rowData, rowId)}
                        renderSeparator={(sectionId, rowId) => separator(rowId)}
                        pageSize={3}
                        scrollRenderAheadDistance={200}
                        scrollEventThrottle={20}
                        onEndReachedThreshold={10}
                        onEndReached={(e) => {
                            if (!e) return;
                            const pageNo = listData.pageNo + 1;
                            this.getList(pageNo);
                        }}
                    />
                </div>
            </div>
        );
    }
}

export default connect((state) => ({
    listData: state.recharge.listData,
}), {
    rechargeListData: actions.rechargeListData,
})(rechargeListContainer);