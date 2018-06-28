/**
 * Created by chenqu on 2017/9/29.
 */
import React, { Component } from 'react';
import { Link } from 'react-router';

export default class ClassifyRouterComponent extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/index">index</Link></li>
                    <li><Link to="/list">list</Link></li>
                    <li><Link to="/detail">detail</Link></li>
                    <li><Link to="/form">form</Link></li>
                    <li><Link to="/test">test</Link></li>
                    <li><Link to="/study">study</Link></li>
                    <li><Link to="/study22">study22</Link></li>
                    <li><Link to="/login">login</Link></li>
                    <li><Link to="/registration">login</Link></li>
                    <li><Link to="/repair">login</Link></li>
                </ul>
                { this.props.children }
            </div>
        );
    }
}
