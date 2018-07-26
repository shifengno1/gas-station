import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../actions/oilTankAction';
import OilCard from './OilCard';

import './OiltankStockContainer.pcss';

class OiltankStockContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    }

    componentWillMount() {
        //
    }

    async componentDidMount() {
        const param = {};
        await this.props.oilTankData(param);
        const { data } = this.props;
        console.log('dataInMount', data);
        this.setState({
            data: this.props.data,
        });
    }

    render() {
        const { data } = this.state;
        return (
            <div>
                {
                    console.log('thisdata', data)
                }
                <OilCard listData={data} />
            </div>
        );
    }
}

export default connect((state) => ({
    data: state.oilTank.data,
}), {
    oilTankData: actions.oilTankData,
})(OiltankStockContainer);