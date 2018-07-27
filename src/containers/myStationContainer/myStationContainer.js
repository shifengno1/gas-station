import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List, ListView, } from 'antd-mobile';
import { StickyContainer, Sticky } from 'react-sticky';
import { Map, Marker, NavigationControl, InfoWindow } from 'react-bmap';
import 'antd-mobile/dist/antd-mobile.css';
import actions from '../../actions/myStationAction';
import '../oilListContainer/oilListContainer.pcss'; // 样式引用
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

class myStationContainer extends Component {
    constructor(props) {
        super(props);
        const dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
        });

        this.state = {
            dataSource: dataSource.cloneWithRows(meberRows),
            refreshing: false,
            isLoading: false,
            hasMore: true,
        };
    }

    async componentDidMount() {
        await this.getList();
    }

    getList(num = 0) {
        const { stationListData } = this.props;
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

        stationListData({
            userId: '1',
        });
        this.showList();
    }

    showList() {
        setTimeout(() => {
            const { listData } = this.props;

            let hasData = true;
            if (listData.stationInfo.length === 0) {
                hasData = false;
            }
            meberRows = meberRows.concat(listData.stationInfo);
            this.setState({
                isLoading: false,
                dataSource: this.state.dataSource.cloneWithRows(meberRows),
                hasMore: hasData,
                oilSum: listData.oilSum,
                moneySum: listData.moneySum,
            });
        }, 500);
    }

    render() {
        const { listData } = this.props;
        return (
            <div>
                <List style={{ backgroundColor: 'white' }} className="picker-list">
                    <Map center={{ lng: 117.122375, lat: 36.674386 }} zoom="8">
                        <NavigationControl />
                        {listData.stationInfo.length !== 0 && listData.stationInfo.map((item, index) =>
                            (
                                <Marker position={{ lng: item.xl, lat: item.yl }} />
                            ))
                        }
                    </Map>
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
                                       油站：{rowData.name}
                                    </div>
                                    <div className={'title-state'}>
                                        {rowData.stationType}
                                    </div>
                                </div>
                                <div className={'list-content'}>
                                    <div className={'content-list-item'}>
                                        <div className={'list-item-title'}>
                                           油罐
                                        </div>
                                        <div className={'list-item-dis'}>
                                            <div>
                                                {rowData.tanks}
                                            </div>
                                        </div>
                                    </div>
                                    <div className={'content-list-item'}>
                                        <div className={'list-item-title'}>
                                           油枪
                                        </div>
                                        <div className={'list-item-dis'}>
                                            <div>
                                                {rowData.guns}
                                            </div>
                                        </div>
                                    </div>
                                    <div className={'content-list-item'}>
                                        <div className={'list-item-title'}>
                                           地址
                                        </div>
                                        <div className={'list-item-dis'}>
                                            <div>
                                                {rowData.city}市{rowData.address}
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
                    style={{
                        height: document.body.clientHeight,
                    }}
                    contentContainerStyle={{ position: 'relative' }}
                />
            </div>
        );
    }
}

export default connect((state) => ({
    listData: state.myStation.listData,
}), {
    stationListData: actions.stationListData,
})(myStationContainer);