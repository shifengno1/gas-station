import React, { Component } from 'react';
import { connect } from 'react-redux';

@connect((state) => ({
    id: state.list.id,
}), {
})

export default class TestContainer extends Component {
    constructor(props) {
        super(props);
        console.log('hello world');
    }

    render() {
        const { id } = this.props;
        return (
            <div>
                <h1>hello world!!!</h1>
                <h1>{ id }</h1>
            </div>
        );
    }
}