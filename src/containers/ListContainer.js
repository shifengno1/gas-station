/**
 * Created by chenqu on 2017/9/29.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../actions/listAction';
import IndexList from '../components/List/IndexList';

class ListContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: '',
        };
    }

    componentDidMount() {
        const context = require.context('../../mock-server/api', true, /\.js(on)?$/);
        let responseData = null;
        try {
            responseData = context('./list.json');
            this.setState({
                data: responseData,
            });
        } catch (e) {
            throw new Error('404 Not Found');
        }
    }

    render() {
        const { data } = this.state;
        return (
            <div style={{ background: '#F2F2F2 ' }}>
                <button onClick={this.getData}>发起请求</button>
                <IndexList noMore={true} progress={false} listData={data.data} />
            </div>
        );
    }
}

export default connect((state) => ({
    data: state.list.data,
    id: state.list.id,
}), {
    fetchData: actions.fetchData,
})(ListContainer);