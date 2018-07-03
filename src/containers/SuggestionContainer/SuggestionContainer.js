import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import { Input, Button } from 'antd';
import actions from '../../actions/suggestionAction';
import './SuggestionContainer.pcss';

const { TextArea } = Input;

class SuggestionContainer extends Component {

    constructor(props) {
        // alert('constructor');
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.suggestionName = this.suggestionName.bind(this);
        this.suggestionWxName = this.suggestionWxName.bind(this);
        this.suggestionContent = this.suggestionContent.bind(this);
        // this.testHand = this.testHand.bind(this);
        this.state = {
            wxName: '',
            name: '',
            content: '',
            showAlert: false,
            Ctime: null,
            count: 0,
            hintnMsg: '',
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
    async handleSubmit() {
        const { name, wxName, content } = this.state;
        await this.props.onSubmit({ name, content, wxName });
        if (this.props.code === 200) {
            this.showFunc('提交成功！');
            this.setState({
                wxName: '',
                content: '',
            });
        }
    }
    suggestionName(event) {
        this.setState({
            name: event.target.value,
        });
    }
    suggestionWxName(event) {
        this.setState({
            wxName: event.target.value,
        });
    }
    suggestionContent(event) {
        this.setState({
            content: event.target.value,
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

    render() {
        // console.log('enter render');
        const { showAlert } = this.state;
        return (<div className="content">
            <div className="title">
                <div>
                    <img src={require('./i/icon-back2.png')} alt={'返回1'} className="imgSize2" />
                </div>
                <div className="title-center">意见反馈</div>
            </div>
            <div className="content-wrapper">
                <div className="release-wrapper">
                    <h5 style={{ display: 'inline' }}>反馈人：</h5>
                    <Input placeholder="" value={this.state.name} onChange={this.suggestionName} />
                    <h5 style={{ marginTop: '10px', marginBottom: '0' }}>微信号：</h5>
                    <Input placeholder="" value={this.state.wxName} onChange={this.suggestionWxName} />
                    <h5 style={{ marginTop: '10px', marginBottom: '0' }}>反馈内容：</h5>
                    <TextArea placeholder="" rows={6} value={this.state.content} onChange={this.suggestionContent} />
                    <Button type="primary" htmlType="submit" className="login-form-button" style={{ marginTop: '20px', marginBottom: '0' }} onClick={this.handleSubmit}>
                        提交
                    </Button>
                </div>
                {
                    showAlert && <div className="hint-wrapper"><div className="hint-style">{ this.state.hintnMsg }</div></div>
                }
            </div>
        </div>);
    }
}
export default connect((state) => ({
    code: state.repair.code,
}), {
    onSubmit: actions.onSubmit,
})(SuggestionContainer);