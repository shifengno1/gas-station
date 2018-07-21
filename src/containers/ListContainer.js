/**
 * Created by chenqu on 2017/9/29.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../actions/listAction';

class ListContainer extends Component {

    constructor(props) {
        super(props);
        this.getData = this.getData.bind(this);
    }

    getData() {
        const { fetchData } = this.props;
        fetchData();
    }

    render() {
        const { data, id } = this.props;
        return (
            <div>
                <button onClick={this.getData}>发起请求</button>
                <div>{JSON.stringify(data)}</div>
                <h1>{id}</h1>
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