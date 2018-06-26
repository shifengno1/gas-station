import React, { Component } from 'react';
import { connect } from 'react-redux';

import actions from '../../actions/study22Action';
import './Study22Container.css'; // 样式引用

class Study22Container extends Component {

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
        alert('WillMount');
        // 组件渲染之前调用
    }

    async componentDidMount() {
        alert('DidMount');
        // 组件渲染结束之后调用
        const param = {};
        await this.props.fetchListData(param);
        const { listData } = this.props;
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
        alert(JSON.stringify(this.props.changeHint()));
        // const param = {};
        // this.props.fetchListData(param);
    }

    render() {
        // console.log('enter render');
        const { showHint, contentStyle } = this.state;
        const { hint, listData } = this.props;
        return (<div className={contentStyle}>{JSON.stringify(listData)}</div>);
    }
}
export default connect((state) => ({
    hint: state.study22.hint,
    listData: state.study22.listData,
    // detailData: state.index.detailData,
}), {
    changeHint: actions.changeHint,
    fetchListData: actions.fetchListData,
    // getModuleDetail: actions.getModuleDetail,
})(Study22Container);