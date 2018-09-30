import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, InputItem, List, WhiteSpace } from 'antd-mobile';
import crypto from 'crypto';
import 'antd-mobile/dist/antd-mobile.css';
import actions from '../../actions/userUpdateAction';
import './userUpdateContainer.pcss'; // 样式引用

class userUpdateContainer extends Component {
    constructor(props) {
        super(props);
        this.showPwdInfo = this.showPwdInfo.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            show: false,
            userId: '13',
            carNumber: '',
            name: '',
            newCardPwd: '',
            oldCardPwd: '',
            phone: '',
        };
    }

    async componentDidMount() {
        const { getUserData } = this.props;
        await getUserData({
            userId: '13',
        });
    }

    showPwdInfo(event) {
        this.setState({ show: true });
        event.stopPropagation();
        event.preventDefault();
    }

    mdPwd(text) {
        return crypto.createHash('md5').update(text).digest('hex');
    }

    async handleSubmit() {
        const { userUpdateData, userUpdatePWDData, pwdData, infoData } = this.props;
        if (this.state.show) {
            await userUpdatePWDData({
                userId: this.state.userId,
                newCardPwd: this.mdPwd(this.state.newCardPwd),
                oldCardPwd: this.mdPwd(this.state.oldCardPwd),
            });
            if (pwdData.code === 200) {
                alert('密码修改成功！');
            } else {
                alert(pwdData.msg);
            }
        } else {
            await userUpdateData({
                userId: this.state.userId,
                carNumber: this.state.carNumber,
                name: this.state.name,
                phone: this.state.phone,
            });
            if (infoData.code === 200) {
                alert('资料保存成功！');
            } else {
                alert(infoData.msg);
            }
        }
    }

    render() {
        const { userData } = this.props;
        return (
            <div>
                <div className="container bg">
                    <div className="title">完善个人资料<a href="#" style={{ float: 'right' }} onClick={this.showPwdInfo}>修改支付密码</a></div>
                    <div className="content" style={{ marginTop: '20px' }}>
                        <div className="weui_cells weui_cells_access" style={{ marginTop: '0px' }}>
                            <div className="weui_cell">
                                <List>
                                    <div style={{ display: this.state.show ? 'none' : 'block' }}>
                                        <InputItem
                                            onChange={val =>
                                                this.setState({
                                                    phone: val,
                                                })
                                            }
                                            placeholder={userData.phone}
                                        >
                                            手机号</InputItem>
                                        <WhiteSpace />
                                        <InputItem
                                            onChange={val =>
                                                this.setState({
                                                    name: val,
                                                })
                                            }
                                            placeholder={userData.name}
                                        >姓名</InputItem>
                                        <WhiteSpace />
                                        <InputItem
                                            onChange={val =>
                                            this.setState({
                                                carNumber: val,
                                            })}
                                            placeholder={userData.carNumber}
                                        >车牌号</InputItem>
                                        <WhiteSpace />
                                    </div>
                                    <div style={{ display: this.state.show ? 'block' : 'none' }}>
                                        <InputItem
                                            placeholder="请输入原支付密码"
                                            onChange={val =>
                                            this.setState({
                                                oldCardPwd: val,
                                            })}
                                        >原密码</InputItem>
                                        <InputItem
                                            placeholder="请输入新支付密码"
                                            onChange={val =>
                                            this.setState({
                                                newCardPwd: val,
                                            })}
                                        >新密码</InputItem>
                                    </div>
                                    <WhiteSpace />
                                    <Button onClick={this.handleSubmit}>提交</Button>
                                    <WhiteSpace />
                                </List>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect((state) => ({
    infoData: state.userUpdate.infoData,
    pwdData: state.userUpdate.pwdData,
    userData: state.userUpdate.userData,
}), {
    userUpdateData: actions.userUpdateData,
    getUserData: actions.getUserData,
    userUpdatePWDData: actions.userUpdatePWDData,
})(userUpdateContainer);