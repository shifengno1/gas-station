/**
 * Created by chenqu on 2017/9/29.
 */
import React, { Component } from 'react';
import { Link } from 'react-router';
import personalPageRoute from '../router/personalPageRoute';

export default class ClassifyRouterComponent extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/index">index</Link></li>
                    <li><Link to="/list">list</Link></li>
                    <li><Link to="/detail">detail</Link></li>
                    <li><Link to="/form">form</Link></li>
                    <li><Link to="/test">test</Link></li>
                    <li><Link to="/study">study</Link></li>
                    <li><Link to="/memberList">我的会员</Link></li>
                    <li><Link to="/study22">study22</Link></li>
                    <li><Link to="/login">login</Link></li>
                    <li><Link to="/registration">registration</Link></li>
                    <li><Link to="/repair">repair</Link></li>
                    <li><Link to="/suggestion">suggestion</Link></li>
                    <li><Link to="/rechargeList">充值流水</Link></li>
                    <li><Link to="/oilInit">一键加油</Link></li>
                    <li><Link to="/rechargeInit">会员充值</Link></li>
                    <li><Link to="/personalPage">会员首页</Link></li>
                    <li><Link to="/oilInit">加油支付</Link></li>
                    <li><Link to="/oiltankStock">油罐库存</Link></li>
                    <li><Link to="/oilList">加油流水</Link></li>
                    <li><Link to="/myOilList">我的加油</Link></li>
                    <li><Link to="/myStation">我的站点</Link></li>
                    <li><Link to="/personalInfo">个人中心</Link></li>
                </ul>
                { this.props.children }
            </div>
        );
    }
}
