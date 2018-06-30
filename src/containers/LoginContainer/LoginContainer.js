import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import ReactDOM from 'react-dom';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import actions from '../../actions/loginAction';
import './LoginContainer.css';

const FormItem = Form.Item; // 样式引用

class LoginContainer extends Component {

    constructor(props) {
        // alert('constructor');
        super(props);
        this.onDivClick = this.onDivClick.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            username: '',
            password: '',
            msg: '',
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
    handleSubmit() {
        // const { username, password } = this.state;
        // console.log(`username${username}`);
        // console.log(`password${password}`);
        if (this.props.onSubmit) {
            const { username, password } = this.state;
            this.props.onSubmit({ username, password });
        }
        // alert(this.state.msg);
        this.setState({ password: '' });
    }


    render() {
        // console.log('enter render');
        const { showHint, contentStyle } = this.state;
        const { listData } = this.props;
        // alert('1');
        // alert(JSON.stringify(listData));
        return (<div className="content-wrapper">
            <div className="release-wrapper">
                <div className="incontent-wrapper">
                    <img src={require('./i/icn_crown.png')} alt={'2'} className="imgSize" />
                </div>
                <div className="incontent-wrapper">
                    <Input
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="用户名"
                        value={this.state.username}
                        onChange={this.handleUsernameChange}
                    />
                    <Input
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="password"
                        placeholder="密码"
                        value={this.state.password}
                        onChange={this.handlePasswordChange}
                    />
                    <Checkbox>记住我</Checkbox>
                    <a className="login-form-forgot" href="">忘记密码</a>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="login-form-button"
                        onClick={this.handleSubmit}
                    >
                        登陆
                    </Button>
                    还没账号？<a href="">注册</a>
                </div>
            </div>
        </div>);
    }
}
export default connect((state) => ({
    // hint: state.study22.hint,
    // listData: state.study22.listData,
    // detailData: state.index.detailData,
    msg: state.login.msg,
}), {
    onSubmit: actions.onSubmit,
    // changeHint: actions.changeHint,
    // fetchListData: actions.fetchListData,
    // getModuleDetail: actions.getModuleDetail,
})(LoginContainer);