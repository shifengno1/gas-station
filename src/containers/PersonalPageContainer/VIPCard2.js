import React, { Component } from 'react';

import './PersonalPageContainer.pcss';

export default class VIPCard2 extends Component {

    constructor(props) {
        super(props);
        this.toDiscountPage = this.toDiscountPage.bind(this);
        this.toMyVIPCardPage = this.toMyVIPCardPage.bind(this);
        this.toPersonalPage = this.toPersonalPage.bind(this);
        this.state = {
            temp: '',
        };
    }

    componentWillMount() {
        // alert('aa');
    }
    toDiscountPage() {
        location.href = `${location.protocol}//${location.host}/entry/index.html?#/registration`;
    }
    toMyVIPCardPage() {
        location.href = `${location.protocol}//${location.host}/entry/index.html?#/registration`;
    }
    toPersonalPage() {
        location.href = `${location.protocol}//${location.host}/entry/index.html?#/registration`;
    }

    render() {
        // const;
        return (
            <div className="HolyGrail">
                <div className="header">会员服务</div>
                <div className="main">
                    <div className="box-item1">
                        <div className="list-item" onClick={this.toDiscountPage}>
                            <img src={require('./i/评价.png')} alt={'修改资料'} className="imgSize" />
                        </div>
                        <div className="list-item1">
                            <span>修改资料</span>
                        </div>
                    </div>
                    <div className="box-item">
                        <div className="list-item">
                            <img src={require('./i/待付款.png')} alt={'充值记录'} className="imgSize" />
                        </div>
                        <div className="list-item1" onClick={this.toMyVIPCardPage}>
                            <span>充值记录</span>
                        </div>
                    </div>
                    <div className="box-item">
                        <div className="list-item" onClick={this.toPersonalPage}>
                            <img src={require('./i/演出日历.png')} alt={'消费记录'} className="imgSize" />
                        </div>
                        <div className="list-item1">
                            <span>消费记录</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}