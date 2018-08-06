import React, { Component } from 'react';
import { connect } from 'react-redux';
import { InputItem } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import actions from '../../actions/personalInfoAction';
import './personalInfoContainer.pcss'; // 样式引用

class personalInfoContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //
        };
    }
    async componentDidMount() {
        const { personalInfoData } = this.props;
        await personalInfoData({
            memberId: '13',
        });
    }

    render() {
        const { infoData } = this.props;
        return (
            <div className="container bg">
                <ul className="uesr_card_list">
                    <li>
                        <div>
                            <div className="card_li">
                                <img id="label-icon" alt="" src={require('../rechargeInitContainer/i/card/vipcard.png')} />
                            </div>
                            <div className="cardno">
                                卡号：<span id="label-cardno">{infoData.infors.icCardNum}</span>
                            </div>
                            <div className="info_div">
                                <div className="card_info">
                                    <p>会员等级: 1</p>
                                    <p>会员积分: {infoData.infors.points}分</p>
                                    <p>申请日期: {infoData.infors.createTime}</p>
                                </div>
                                <div className="use_div">
                                    <p>消费总额: ¥{infoData.moneySum}</p>
                                    <p>充值总额: ¥{infoData.rechargeSum}</p>
                                    <p>总加油量: {infoData.oilSum}升</p>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}

export default connect((state) => ({
    infoData: state.personalInfo.infoData,
}), {
    personalInfoData: actions.personalInfoData,
})(personalInfoContainer);