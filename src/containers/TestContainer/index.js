import React, { Component } from 'react';
import { Button } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import './index.pcss';


export default class TestContainer extends Component {
    constructor(props) {
        super(props);
        console.log('hello world');
    }

    render() {
        return (
            <div>
                <h1>hello world!!!</h1>
                <Button>Start</Button>
            </div>
        );
    }
}