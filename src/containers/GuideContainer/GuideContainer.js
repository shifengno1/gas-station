import React, { Component } from 'react';
import './GuideContainer.pcss';

export default class GuideContainer extends Component {
    render() {
        return (
            <div className="guide-wrapper">
                <div className="pk-wrapper">
                    <div className="pk-board-cnter-t">
                        <div className="pk-board-cnter-t-bg" />
                    </div>
                    <div className="pk-board-cnter-b">
                        <div className="pk-board-cnter-b-bg" />
                    </div>
                    <div className="pk-flash-mask" />
                    <div className="pk-indicate" alt="" />
                    <div className="pk-indicate-1" alt="" />
                </div>
                <div className="square-wrapper">
                    <div className="square-row">
                        <div className="square-item">
                            <div className="item-top">
                                <img src={require('./img/充值.png')} alt="充值流水" className="imgs" />
                            </div>
                            <div className="item-bottom">
                                会员充值记录
                            </div>
                        </div>
                        <div className="square-item">
                            <div className="item-top">
                                <img src={require('./img/库存，堆积.png')} alt="库存，堆积" className="imgs" />
                            </div>
                            <div className="item-bottom">
                                进销存
                            </div>
                        </div>
                        <div className="square-item">
                            <div className="item-top">
                                <img src={require('./img/资金流水明细-变.png')} alt="资金流水明细" className="imgs" />
                            </div>
                            <div className="item-bottom">
                                交易记录
                            </div>
                        </div>
                    </div>
                    <div className="square-row">
                        <div className="square-item">
                            <div className="item-top">
                                <img src={require('./img/卡片.png')} alt="IC卡片" className="imgs" />
                            </div>
                            <div className="item-bottom">
                                IC卡
                            </div>
                        </div>
                        <div className="square-item">
                            <div className="item-top">
                                <img src={require('./img/优惠券.png')} alt="优惠活动" className="imgs" />
                            </div>
                            <div className="item-bottom">
                                优惠活动
                            </div>
                        </div>
                        <div className="square-item">
                            <div className="item-top">
                                <img src={require('./img/定位.png')} alt="站点" className="imgs" />
                            </div>
                            <div className="item-bottom">
                                我的站点
                            </div>
                        </div>
                    </div>
                    <div className="square-row">
                        <div className="square-item">
                            <div className="item-top">
                                <img src={require('./img/主页.png')} alt="个人中心" className="imgs" />
                            </div>
                            <div className="item-bottom">
                                个人中心
                            </div>
                        </div>
                        <div className="square-item">
                            <div className="item-top">
                                <img src={require('./img/我的.png')} alt="我的" className="imgs" />
                            </div>
                            <div className="item-bottom">
                                我的会员
                            </div>
                        </div>
                        <div className="square-item">
                            <div className="item-top">
                                <img src={require('./img/修改密码.png')} alt="修改密码" className="imgs" />
                            </div>
                            <div className="item-bottom">
                                修改密码
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
