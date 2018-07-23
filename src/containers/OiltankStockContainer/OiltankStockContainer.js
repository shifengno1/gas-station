import React, { Component } from 'react';
import { connect } from 'react-redux';
import OilCard from './OilCard';

import './OiltankStockContainer.pcss';

class OiltankStockContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            temp: '',
        };
    }

    componentWillMount() {
        //
    }

    componentDidMount() {
        //
    }

    render() {
        return (
            <div>
                <OilCard />
            </div>
        );
    }
}

export default connect((state) => ({
    //
}), {
    //
})(OiltankStockContainer);