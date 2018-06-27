import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import ReactDOM from 'react-dom';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
// import actions from '../../actions/study22Action';
import './LoginContainer.css';

const FormItem = Form.Item; // 样式引用

class LoginContainer extends Component {

    constructor(props) {
        alert('constructor');
        super(props);
        this.onDivClick = this.onDivClick.bind(this);
        this.state = {
            showHint: 'hello world1',
            contentStyle: 'content-wrapper-red',
        };
    }

    componentWillMount() {
        // alert('WillMount');
        // 组件渲染之前调用
    }

    async componentDidMount() {
        // alert('DidMount');
        // 组件渲染结束之后调用
        const param = {};
        await this.props.fetchListData(param);
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

    render() {
        // console.log('enter render');
        const { showHint, contentStyle } = this.state;
        const { listData } = this.props;
        // alert('1');
        // alert(JSON.stringify(listData));
        return (<div className="content-wrapper">
            <div className="release-wrapper">
                <div className="incontent-wrapper">
                    <img src={require('./i/icn_crown.png')} alt={'2'} />
                </div>
                <div className="incontent-wrapper">
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <FormItem>
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                        </FormItem>
                        <FormItem>
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                        </FormItem>
                        <FormItem>
                            <Checkbox>Remember me</Checkbox>
                            <a className="login-form-forgot" href="">Forgot password</a>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in
                            </Button>
                            Or <a href="">register now!</a>
                        </FormItem>
                    </Form>
                </div>
            </div>
        </div>);
    }
}
export default connect((state) => ({
    // hint: state.study22.hint,
    // listData: state.study22.listData,
    // detailData: state.index.detailData,
}), {
    // changeHint: actions.changeHint,
    // fetchListData: actions.fetchListData,
    // getModuleDetail: actions.getModuleDetail,
})(LoginContainer);