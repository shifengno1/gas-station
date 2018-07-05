import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'antd-mobile';
import { StickyContainer, Sticky } from 'react-sticky';
import 'antd-mobile/dist/antd-mobile.css';
import actions from '../../actions/memberListAction';
import './memberListContainer.pcss'; // 样式引用

const data = [
    {
        name: '王辉',
        phone: '16511111111',
        icCardNum: '1622211343',
        cardSum: 500.0,
        plateNumber: '3333aa',
        createTime: '2018-06-01',
    }, {
        name: '王强',
        phone: '12333333311',
        icCardNum: '12333333311',
        cardSum: 1237.0,
        plateNumber: '12333333311',
        createTime: '2018-06-01',
    }, {
        name: '张明开',
        phone: '18817558987',
        icCardNum: '1211111111',
        cardSum: 0.0,
        plateNumber: 'wwwww',
        createTime: '2018-05-01',
    }
];
const NUM_SECTIONS = 1;
const NUM_ROWS_PER_SECTION = 5;
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

class memberListContainer extends React.Component {
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
        <div key={rowID} style={{ padding: '0 15px' }}>
          <div
            style={{
              lineHeight: '50px',
              color: '#888',
              fontSize: 18,
              borderBottom: '1px solid #F6F6F6',
            }}
          >{obj.name}<span style={{ fontSize: '30px', color: '#FF6E27',float: 'right' }}>{obj.cardSum}元</span></div>
          <div style={{ display: '-webkit-box', display: 'flex', padding: '15px 0' }}>
              <div style={{ lineHeight: 1 }}>
                  <div style={{ marginBottom: '8px', fontWeight: 'bold' }}>工单号：{obj.icCardNum}</div>
                  <div> 提交时间：{obj.createTime}</div>
              </div>
          </div>
        </div>
      );
    };

    return (
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
        renderSectionHeader={sectionData => (
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
              >{`Task ${sectionData.split(' ')[1]}`}</div>
            )}
          </Sticky>
        )}
        renderHeader={() => <span>header</span>}
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
    );
  }
}

export default connect((state) => ({
    listData: state.member.listData,
}), {
    memberListData: actions.memberListData,
    changeHint: actions.changeHint,
})(memberListContainer);