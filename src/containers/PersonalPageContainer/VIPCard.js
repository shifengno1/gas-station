import React, { Component } from 'react';

import './PersonalPageContainer.pcss';

export default class VIPCard extends Component {

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
                <div className="header">会员尊享</div>
                <div className="main">
                    <div className="box-item1">
                        <div className="list-item" onClick={this.toDiscountPage}>
                            <img src={require('./i/like.png')} alt={'优惠活动'} className="imgSize" />
                        </div>
                        <div className="list-item1">
                            <span>优惠活动</span>
                        </div>
                    </div>
                    <div className="box-item">
                        <div className="list-item">
                            <img src={require('./i/会员.png')} alt={'我的会员卡'} className="imgSize" />
                        </div>
                        <div className="list-item1" onClick={this.toMyVIPCardPage}>
                            <span>我的会员卡</span>
                        </div>
                    </div>
                    <div className="box-item">
                        <div className="list-item" onClick={this.toPersonalPage}>
                            <img src={require('./i/我的.png')} alt={'个人中心'} className="imgSize" />
                        </div>
                        <div className="list-item1">
                            <span>个人中心</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}