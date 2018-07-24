import React, { Component } from 'react';
import { connect } from 'react-redux';
import { InputItem } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import actions from '../../actions/rechargeInitAction';
import './weui.css';
import './rechargeInitContainer.pcss'; // 样式引用

const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
let moneyKeyboardWrapProps;
if (isIPhone) {
    moneyKeyboardWrapProps = {
        onTouchStart: e => e.preventDefault(),
    };
}

class rechargeInitContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //
        };
    }
    componentDidMount() {

    }

    render() {
        return (
            <div className="container bg">
                <div className="content">
                    <div className="default_card" id="printCardno">
                        <img id="label-icon" alt="" src={require('./i/card/vipcard.png')} />
                    </div>
                    <div className="info_div">
                        <div className="info_item">
                            <div className="info_label">卡号</div>
                            <div className="info_content" id="label-cardno">511724497239617</div>
                        </div>
                        <div className="info_item">
                            <div className="info_label">当前余额</div>
                            <div className="info_content" id="label-total-amount">0.00元</div>
                        </div>
                        <div className="info_item">
                            <div className="info_label">当前积分</div>
                            <div className="info_content" id="label-total-point">0</div>
                        </div>
                    </div>
                    <InputItem
                        type="money"
                        placeholder="请输入充值金额"
                        clear
                        moneyKeyboardWrapProps={moneyKeyboardWrapProps}
                    >充值金额</InputItem>
                    <ul className="money_list" id="money_list">
                        <li className="money" value="200">200元</li>
                        <li className="money" value="500">500元</li>
                        <li className="money" value="800">800元</li>
                    </ul>
                    <div className="desc">
                        <p>充值规则说明：</p>
                        <p>1、本功能仅支持微信支付，充值前请务必核对您需要的充值的卡类型。</p>
                        <p>2、本功能仅供普通发票加油卡客户使用，成功充值后每次加油消费时开具发票。</p>
                        <p>3、充值后一般5分钟内到账；如超时未到账，请致电加油卡背面的客服电话进行咨询。</p>
                        <p>4、新开卡客户需24小时后才能办理自助充值。</p>
                        <p>5、单笔、单日充值限额以各银行实物类商品网上支付限额为准。</p>
                    </div>
                    <div className="footer">
                        <a href='javascript:void(0);'
                           id='payBtn'
                           className='button'
                           style={{ display: 'none' }}
                        >立即充值</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect((state) => ({
    listData: state.rechargeInit.listData,
}), {
    rechargeInitData: actions.rechargeInitData,
})(rechargeInitContainer);