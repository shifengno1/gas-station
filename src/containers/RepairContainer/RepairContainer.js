import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import { Select, Input, Button } from 'antd';
import actions from '../../actions/repairAction';
import './RepairContainer.pcss';

const Option = Select.Option;
const { TextArea } = Input;

class RepairContainer extends Component {

    constructor(props) {
        // alert('constructor');
        super(props);
        this.onDivClick = this.onDivClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.repairObject = this.repairObject.bind(this);
        this.repairContent = this.repairContent.bind(this);
        // this.testHand = this.testHand.bind(this);
        this.state = {
            stationName: '',
            object: '',
            content: '',
            showAlert: false,
            Ctime: null,
            count: 0,
            hintnMsg: '',
            stationForm: {},
        };
    }

    componentWillMount() {
        // alert('WillMount');
        // 组件渲染之前调用
    }

    async componentDidMount() {
        const { userId } = '11';
        await this.props.getMyStation({ userId });
        this.setState({
            stationForm: this.props.stationForm,
        });
        alert(this.state.stationForm);
        // const { opt } = [];
        // for (let i = 0, len = this.state.stationForm.length; i < len; i++) {
            // opt.push(1);
            // opt.push(<Option value={stationForm[i]}>{stationForm[i]}</Option>);
        // }
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
    async handleSubmit() {
        const { object, content } = this.state;
        await this.props.onSubmit({ object, content });
        if (1) {
            this.showFunc('报修成功！');
            this.setState({
                object: '',
                content: '',
            });
        }
    }
    repairObject(event) {
        this.setState({
            object: event.target.value,
        });
    }
    repairContent(event) {
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
        const { showHint, contentStyle, showAlert, stationForm } = this.state;
        console.log(stationForm);
        const { opt } = [];
        for (let i = 0, len = stationForm.length; i < len; i++) {
            opt.push(<Option key={stationForm[i]}>{stationForm[i]}</Option>);
        }
        // const { listData } = this.props;
        // alert('1');
        // alert(JSON.stringify(listData));
        return (<div className="content">
            <div className="title">
                <div>
                    <img src={require('./i/icon-back2.png')} alt={'返回1'} className="imgSize2" />
                </div>
                <div className="title-center">报修</div>
            </div>
            <div className="content-wrapper">
                <div className="release-wrapper">
                    <h5 style={{ display: 'inline' }}>站点名称：</h5>
                    <Select
                        style={{ width: '100%', display: 'inline', fontSize: '10px' }}
                        placeholder="请选择"
                    >
                        { opt }
                    </Select>
                    <h5 style={{ marginTop: '10px', marginBottom: '0' }}>报修项目：</h5>
                    <Input placeholder="" value={this.state.object} onChange={this.repairObject} />
                    <h5 style={{ marginTop: '10px', marginBottom: '0' }}>详细说明：</h5>
                    <TextArea placeholder="" rows={6} value={this.state.content} onChange={this.repairContent} />
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
    // hint: state.study22.hint,
    // listData: state.study22.listData,
    // detailData: state.index.detailData,
    code: state.repair.code,
    stationForm: state.repair.stationForm,
}), {
    // changeHint: actions.changeHint,
    // fetchListData: actions.fetchListData,
    // getModuleDetail: actions.getModuleDetail,
    onSubmit: actions.onSubmit,
    getMyStation: actions.getMyStation,
})(RepairContainer);