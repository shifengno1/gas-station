import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'antd-mobile';
import { StickyContainer, Sticky } from 'react-sticky';
import 'antd-mobile/dist/antd-mobile.css';
import actions from '../../actions/rechargeListAction';
import './rechargeListContainer.pcss'; // 样式引用

const data = [
    {
        money: '500.5',
        rechargeType: '人工充值',
        createTime: '2018-08-23',
    },
    {
        money: '200.5',
        rechargeType: '微信充值',
        createTime: '2018-08-09',
    },
];
const NUM_SECTIONS = 1;
const NUM_ROWS_PER_SECTION = 3;
let pageIndex = 0;

const dataBlobs = {};
let sectionIDs = [];
let rowIDs = [];
function genData(pIndex = 0) {
    for (let i = 0; i < NUM_SECTIONS; i++) {
        const ii = (pIndex * NUM_SECTIONS) + i;
        const sectionName = `Section ${ii}`;
        sectionIDs.push(sectionName);
        dataBlobs[sectionName] = sectionName;
        rowIDs[ii] = [];

        for (let jj = 0; jj < NUM_ROWS_PER_SECTION; jj++) {
            const rowName = `S${ii}, R${jj}`;
            rowIDs[ii].push(rowName);
            dataBlobs[rowName] = rowName;
        }
    }
    sectionIDs = [...sectionIDs];
    rowIDs = [...rowIDs];
    console.log(dataBlobs);
    console.log(sectionIDs);
    console.log(rowIDs);
}

class rechargeListContainer extends React.Component {
    constructor(props) {
        super(props);
        const getSectionData = (dataBlob, sectionID) => dataBlob[sectionID];
        const getRowData = (dataBlob, sectionID, rowID) => dataBlob[rowID];

        const dataSource = new ListView.DataSource({
            getRowData,
            getSectionHeaderData: getSectionData,
            rowHasChanged: (row1, row2) => row1 !== row2,
            sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
        });

        this.state = {
            dataSource,
            isLoading: true,
        };
    }

    componentDidMount() {
    // you can scroll to the specified position
    // setTimeout(() => this.lv.scrollTo(0, 120), 800);

    // simulate initial Ajax
        setTimeout(() => {
            genData();
            this.setState({
                dataSource: this.state.dataSource.cloneWithRowsAndSections(dataBlobs, sectionIDs, rowIDs),
                isLoading: false,
            });
        }, 600);
    }

  // If you use redux, the data maybe at props, you need use `componentWillReceiveProps`
  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.dataSource !== this.props.dataSource) {
  //     this.setState({
  //       dataSource: this.state.dataSource.cloneWithRowsAndSections(nextProps.dataSource),
  //     });
  //   }
  // }

  onEndReached = (event) => {
    // load new data
    // hasMore: from backend data, indicates whether it is the last page, here is false
      if (this.state.isLoading && !this.state.hasMore) {
          return;
      }

      this.setState({ isLoading: true });
      setTimeout(() => {
          genData(++pageIndex);
          this.setState({
              dataSource: this.state.dataSource.cloneWithRowsAndSections(dataBlobs, sectionIDs, rowIDs),
              isLoading: false,
          });
      }, 1000);
  }

    render() {
        const separator = (sectionID, rowID) => (
            <div
                key={`${sectionID}-${rowID}`}
                style={{
                    backgroundColor: '#F5F5F9',
                    height: 8,
                    borderTop: '1px solid #ECECED',
                    borderBottom: '1px solid #ECECED',
                }}
            />
    );
        let index = data.length - 1;
        const row = (rowData, sectionID, rowID) => {
            if (index < 0) {
                index = data.length - 1;
            }
            const obj = data[index--];
            return (
                <div key={rowID} className="distributionList_item">
                    <p className="distributionList_item_title onePxAfter"> <span>用户名字</span> <span><i>{obj.money}</i>元</span> </p>
                    <div className="distributionList_item_content">
                        <p><span><i className="distributionList_item_label">充值方式</i>: {obj.rechargeType}</span></p>
                        <p><span><i className="distributionList_item_label">提交时间</i>: {obj.createTime}</span></p>
                    </div>
                    <p className="distributionList_whitespace"></p>
                </div>
            );
        };

        return (
            /**
            <div className="content">
                <div className="title">
                    <div>
                        <img src={require('../RepariContainer/i/icon-back2.png')} alt={'返回1'} className="imgSize2" />
                    </div>
                    <div className="title-center">充值流水</div>
                </div>
                <div className="content-wrapper">
                    <p className="distributionList_total_label">
                        共<span className="total_num">2</span>笔
                        <i className="distributionList_total_label_type">到账</i>
                        <span className="total_money">3084.59元</span>
                    </p>
             */
                    <ListView
                        ref={el => this.lv = el}
                        dataSource={this.state.dataSource}
                        className="am-list sticky-list"
                        useBodyScroll
                        renderSectionWrapper={sectionID => (
                            <StickyContainer
                                key={`s_${sectionID}_c`}
                                className="sticky-container"
                                style={{ zIndex: 4 }}
                            />
            )}
                        renderSectionHeader={ sectionData => (
                            <Sticky>
                                {({
                  style,
                }) => (
                    <div
                        className="sticky"
                        style={{
                            ...style,
                            zIndex: 3,
                            backgroundColor: parseInt(sectionData.replace('Section ', ''), 10) % 2 ?
                        '#5890ff' : '#F8591A',
                            color: 'white',
                        }}
                    >
                        {`Task ${sectionData.split(' ')[1]}`}
                    </div>
                )}
                            </Sticky>
            )}
                        renderHeader={() => ''}
                        renderBodyComponent={() => <MyBody />}
                        renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
                            {this.state.isLoading ? 'Loading...' : 'Loaded'}
                        </div>)}
                        renderRow={row}
                        renderSeparator={separator}
                        pageSize={4}
                        onScroll={() => { console.log('scroll'); }}
                        scrollEventThrottle={200}
                        onEndReached={this.onEndReached}
                        onEndReachedThreshold={10}
                    />

                //</div>
            //</div>
        );
    }
}

function MyBody(props) {
    return (
        <div className="am-list-body my-body">
            <span style={{ display: 'none' }}>you can custom body wrap element</span>
            {props.children}
        </div>
    );
}

export default connect((state) => ({
    listData: state.recharge.listData,
}), {
    rechargeListData: actions.rechargeListData,
})(rechargeListContainer);