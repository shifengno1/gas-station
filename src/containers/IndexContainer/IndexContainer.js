import React, { Component } from 'react';
import { connect } from 'react-redux';
// import DPZeus from '@dp/dpzeus';
import ModuleList from './ModuleList';
import actions from '../../actions/indexAction';
import Waiting from '../../components/Waiting/Waiting';

import './Index.pcss';

class IndexContainer extends Component {

    constructor(props) {
        super(props);
        this.getModuleDetail = this.getModuleDetail.bind(this);
        this.state = {
            waiting: false,
        };
    }

    async componentWillMount() {
        const { getModuleList } = this.props;
        this.setState({
            waiting: true,
        });
        await getModuleList();
        // await getMrVisit();
        this.setState({
            waiting: false,
        });
    }

    async getModuleDetail(moduleId) {
        const { getModuleDetail } = this.props;
        await getModuleDetail(moduleId);
        const { detailData } = this.props;
        return detailData;
    }

    showModuleList() {
        const _this = this; // eslint-disable-line
        const { listData } = this.props;
        return listData.map((item, index) => {
            return (<ModuleList getModuleDetail={_this.getModuleDetail} type={item.moduleType === 'A' ? 'Release' : 'Shop'} item={item} key={index} />);
        });
    }

    showWaiting() { // eslint-disable-line
        return (
            <Waiting height={`${window.innerHeight - 285}px`} />
        );
    }

    render() {
        const { waiting } = this.state;
        return (
            <div className="content" key={'1'}>
                <div className="title">
                    <div className="title-left">
                        团队数据
                    </div>
                    <div className="title-right">
                        团队榜单&nbsp;>
                    </div>
                </div>
                <div className="content-wrapper" key={'2'}>
                    {
                        waiting && this.showWaiting()
                    }
                    {
                        !waiting && this.showModuleList()
                    }
                </div>
            </div>
        );
    }
}
export default connect((state) => ({
    listData: state.index.listData,
    detailData: state.index.detailData,
}), {
    getModuleList: actions.getModuleList,
    getModuleDetail: actions.getModuleDetail,
})(IndexContainer);
