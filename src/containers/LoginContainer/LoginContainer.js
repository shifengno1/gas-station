import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import ReactDOM from 'react-dom';
import { Form, Icon, Input, Button, Checkbox, Divider } from 'antd';
import actions from '../../actions/loginAction';
import './LoginContainer.pcss';

const FormItem = Form.Item; // 样式引用

class LoginContainer extends Component {

    constructor(props) {
        // alert('constructor');
        super(props);
        this.onDivClick = this.onDivClick.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toRegPage = this.toRegPage.bind(this);
        this.testAlert = this.testAlert.bind(this);
        this.state = {
            username: '',
            password: '',
            msg: '',
            hintnMsg: 'saasasasasaas',
            showAlert: false,
            Ctime: null,
            count: 0,
        };
    }

    componentWillMount() {
        // alert('WillMount');
        // 组件渲染之前调用
    }

    async componentDidMount() {
        // alert('DidMount');
        // 组件渲染结束之后调用
        // const param = {};
        // await this.props.fetchListData(param);
        // const { listData } = this.props;
        // qingqiu
    }

    componentWillReceiveProps(nextProps) {
        // props刷新的时候调用， nextProps新的props
    }
    onDivClick() {
        // console.log('q123e1');
        // this.setState({
        //     showHint: 'cick world',
        //     contentStyle: 'content-wrapper-blue',
        // });
        this.props.changeHint();
        // alert(JSON.stringify(this.props.changeHint()));
        // const param = {};
        // this.props.fetchListData(param);
    }
    toRegPage() {
        location.href = `${location.protocol}//${location.host}/entry/index.html?#/registration`;
    }
    testAlert() {
        let { count } = this.state;
        this.showFunc(count, 4000, () => {
            location.href = 'http://www.baidu.com';
        });
        this.setState({
            count: ++count,
        });
    }
    handleUsernameChange(event) {
        this.setState({
            username: event.target.value,
        });
    }
    handlePasswordChange(event) {
        this.setState({
            password: event.target.value,
        });
    }
    showFunc(message, t, callback) {
        const { Ctime } = this.state;
        clearTimeout(Ctime);
        let timeSet;
        if (!t) {
            timeSet = 2000;
        } else {
            timeSet = t;
        }
        const time = setTimeout(() => {
            this.setState({
                showAlert: false,
            });
            if (callback) {
                callback();
            }
        }, timeSet);
        this.setState({
            showAlert: true,
            hintnMsg: message,
            Ctime: time,
        });
    }
    async handleSubmit() {
        // const { username, password } = this.state;
        // console.log(`username${username}`);
        // console.log(`password${password}`);
        // if (this.props.onSubmit) {
        //    const { username, password } = this.state;
        //    await this.props.onSubmit({ username, password });
        //    if (this.props.code === 200) {
        //        alert('登陆成功！');
        //     }
        const { username, password } = this.state;
        await this.props.onSubmit({ username, password });
        if (this.props.code === 200) {
            this.showFunc('登陆成功！');
            setTimeout(() => {
                location.href = 'http://www.baidu.com';
            }, 2000);
        } else if (this.props.code === 201) {
            this.showFunc('用户名不存在！');
        } else if (this.props.code === 202) {
            this.showFunc('密码错误！');
        }
        // console.log(this.props.code);
        // // alert(this.state.msg);
        this.setState({ password: '' });
    }


    render() {
        // console.log('enter render');
        const { showHint, contentStyle, showAlert } = this.state;
        const { listData } = this.props;
        // alert('1');
        // alert(JSON.stringify(listData));
        return (<div className="content-wrapper">
            <div className="release-wrapper">
                <div className="incontent-wrapper">
                    <img src={require('./i/icn_crown.png')} alt={'山东隆泰石油装备有限公司'} className="imgSize" />
                </div>
                <div className="incontent-wrapper">
                    <div className="input-form">
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="用户名"
                            value={this.state.username}
                            onChange={this.handleUsernameChange}
                        />
                    </div>
                    <div className="input-form">
                        <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="密码"
                            value={this.state.password}
                            onChange={this.handlePasswordChange}
                        />
                    </div>
                    <Checkbox>记住我</Checkbox>
                    <a className="login-form-forgot" href="">忘记密码</a>
                    <div className="input-form">
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="login-form-button"
                            onClick={this.handleSubmit}
                        >
                            登陆
                        </Button>
                    </div>
                    {/* <Button
                        type="primary"
                        htmlType="submit"
                        className="login-form-button"
                        onClick={this.testAlert}
                    >
                        测试
                    </Button> */}
                    还没账号？<a href="javascript:void(0);" onClick={this.toRegPage}>注册</a>
                </div>
            </div>
            {
                showAlert && <div className="hint-wrapper"><div className="hint-style">{ this.state.hintnMsg }</div></div>
            }
        </div>);
    }
}
export default connect((state) => ({
    // hint: state.study22.hint,
    // listData: state.study22.listData,
    // detailData: state.index.detailData,
    code: state.login.code,
}), {
    onSubmit: actions.onSubmit,
    // changeHint: actions.changeHint,
    // fetchListData: actions.fetchListData,
    // getModuleDetail: actions.getModuleDetail,
})(LoginContainer);