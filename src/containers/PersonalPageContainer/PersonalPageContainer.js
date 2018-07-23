import React, { Component } from 'react';
import { connect } from 'react-redux';
import VIPCard from './VIPCard';
import VIPCard2 from './VIPCard2';

import './PersonalPageContainer.pcss';

class PersonalPageContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            temp: '',
        };
    }

    componentWillMount() {
        // alert('aa');
    }

    render() {
        // const;
        return (
            <div className="content-wrapper">
                <div className="release-wrapper">
                    <img src={require('./i/icn_crown.png')} alt={'aaa'} className="imgSize" style={{ paddingTop: '0' }} />
                </div>
                <div className="incontent-wrapper">
                    <div style={{ textAlign: 'center', padding: '5px 5px' }}>
                        <div style={{ width: '14%', height: 'auto', float: 'center', borderRadius: '30%', border: '3px solid #eee', display: 'inline-block' }}>
                            <img src={require('./i/我的.png')} alt={'wode'} style={{ width: '100%', height: '100%' }} />
                        </div>
                        <div style={{ display: 'inline-block', fontSize: '15px', width: '100%', height: '100%' }}>
                            山东隆泰
                        </div>
                    </div>
                    <div style={{ padding: '10px 10px 5px 10px' }}>
                        <VIPCard />
                    </div>
                    <div style={{ padding: '5px 10px 10px 10px' }}>
                        <VIPCard2 />
                    </div>
                </div>
            </div>
        );
    }
}
export default connect((state) => ({
    // listData: state.index.listData,
    // detailData: state.index.detailData,
}), {
    // getModuleList: actions.getModuleList,
    // getModuleDetail: actions.getModuleDetail,
})(PersonalPageContainer);