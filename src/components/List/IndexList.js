/**
 * Created by chenqu on 2017/7/19.
 */

import React, { Component } from 'react';

import './IndexList.pcss';

import IMG_SRC1 from './img/empty.png';
import IMG_SRC2 from './img/rectangle.png';


export default class IndexList extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.onShow = this.onShow(this);
        this.statusMap = {
            1: '待确认',
            2: '已确认',
            3: '被驳回',
            4: '商家驳回',
        };
        this.onShow = this.onShow;
        this.state = {
            display: [],
            theme: 'dp',
        };
    }
    onClick({ contractId = ''}) { //eslint-disable-line
        return () => {
            // location.href = `${config.getCommonUrl()}/contract-detail.html?contractId=${contractId}`;
            console.log('点击了');
        };
    }
    onShow(index) { //eslint-disable-line
        console.log(index);
        const { listData, progress, noMore } = this.props;
        const { display } = this.state;
        if (!display[index]) {
            display[index] = true;
        } else {
            display[index] = false;
        }
        this.setState({
            display,
        });
    }
    render() {
        const { listData, progress, noMore } = this.props;
        let _this = this;//eslint-disable-line
        const { display, theme } = this.state;
        return (
            <div className={'content'}>
                {
                   listData.length !== 0 && listData.map((item, index) =>
                       (<div className={'content-list'} key={index} onClick={this.onClick(item)}>
                           <div className={'list-title'}>
                               <div className={'title-name'}>
                                   {`协议编号：${item.contractNo}`}
                               </div>
                               <div className={'title-state'}>
                                   {_this.statusMap[item.status]}
                               </div>
                           </div>
                           <div className={'list-content'}>
                               <div className={'content-list-item'}>
                                   <div className={'list-item-title'}>
                                       甲方
                                   </div>
                                   <div className={'list-item-dis'}>
                                       <div>
                                           {item.partyA}
                                       </div>
                                   </div>
                               </div>
                               <div className={'content-list-item'}>
                                   <div className={'list-item-title'}>
                                       乙方
                                   </div>
                                   <div className={'list-item-dis'}>
                                       {item.partyB}
                                   </div>
                               </div>
                               <div className={'content-list-item'}>
                                   <div className={'list-item-title list-item-title-48'}>
                                       有效日期
                                   </div>
                                   <div className={'list-item-dis'}>
                                       {item.validDate}
                                   </div>
                               </div>
                               {
                                   ((item.status === 3 || item.status === 4) && item.rejectReason !== '' && item.rejectReason != null) && <div onClick={(e) => { e.stopPropagation(); return this.onShow(index); }} className={`refuse-dis ${display[index] ? '' : 'refuse-dis-all'}`}>
                                       驳回说明：{item.rejectReason}
                                   </div>
                               }
                           </div>
                       </div>),
                   )
                }
                {
                    (listData.length === 0 && progress === false) && <div className="empty"><img alt="暂无协议" src={theme === 'dp' ? IMG_SRC1 : IMG_SRC2} /><div className="intro">暂无协议相关内容</div></div>
                }
                {
                    (noMore === true && listData.length !== 0) && <div className="no-more">无更多数据</div>
                }
            </div>
        );
    }
}
