import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../actions/oilInitAction';
import './weui.css';
import './oilInitContainer.pcss'; // 样式引用

class oilInitContainer extends Component {
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
            <div className="bg">
                <div className="alert_title">
                    <i className="weui_icon_warn" />
                    请勿在油机附近使用手机
                </div>
                <div className="content" style={{ marginTop: '20px' }}>
                    <div className="weui_cells weui_cells_access" style={{ marginTop: '0px' }}>
                        <div className="weui_cell">
                            <div className="weui_cell_hd">
                                <span className="weui_label">油 站</span>
                            </div>
                            <div className="weui_cell_bd weui_cell_primary">
                                <input id="station" className="weui_input" type="text" placeholder="" style={{ color: '#888' }} />
                            </div>
                        </div>
                        <div className="weui_cell">
                            <div className="result_div">
                                <p>
                                    <span id="span-gun" />
                                </p>
                                <p>
                                    油管号:<span id="oilno-goodsname" />
                                </p>
                                <p >
                                    金额:<span id="oilno-totalamount" />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="title">选择支付方式</div>
                <div className="content">
                    <ul className="uesr_card_list">
                        <li>
                            <div className="wxpay_div2" data-cardno="511724497239617" data-cardtype="0" data-total-amount="0.00">
                                <img id="label-icon" alt="" src={require('./i/card/vipcard.png')} />
                                <div className="wxcontent">
                                    <p>手机会员卡</p>
                                    <p className="wxdesc">余额:0.00</p>
                                </div>
                            </div>
                            <div style={{ textAlign: 'left', color: '#333333', fontSize: '12px' }} className="check_div">
                                <input type="checkbox" checked="checked" className="checkbox" />
                                <span style={{ marginLeft: '5px' }}>可抵用积分0(0.00元)</span>
                            </div>
                        </li>
                        <li>
                            <div className="wxpay_div" data-cardno="" data-cardtype="2">
                                <img alt="" src={require('./i/logo/wxicon.png')} />
                                <div className="wxcontent">
                                    <p>微信支付</p>
                                    <p className="wxdesc">微信安全支付</p>
                                </div>
                            </div>

                        </li>
                    </ul>
                </div>

            </div>
        );
    }
}

export default connect((state) => ({
    listData: state.oilInit.listData,
}), {
    oilInitData: actions.oilInitData,
})(oilInitContainer);