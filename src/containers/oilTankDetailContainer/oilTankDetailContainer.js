import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../actions/oilTankDetailAction';

import './oilTankDetailContainer.pcss';
import oiltankStockRoute from '../../router/oiltankStockRoute';

class oilTankDetailContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: '',
            stockId: '',
        };
    }

    componentWillMount() {
        //
    }

    async componentDidMount() {
        const stockIdSti = JSON.stringify(this.props.location.query);
        const stockIdArr = stockIdSti.split('');
        stockIdArr.pop();
        stockIdArr.pop();
        stockIdArr.splice(0, 12);
        const stockpre = stockIdArr.join('');
        console.log('dataaaaaa', stockpre);
        await this.setState({
            stockId: stockpre,
        });
        console.log('datanewss', this.state.stockId);
        console.log('datanewsstype', typeof (this.state.stockId));
    }

    render() {
        return (
            <div className={'content'}>
                <div className={'content-list'}>
                    <div className={'list-row1'}>
                        <span className={'content-row2'}>123</span>
                        <span className={'content-row22'}>123</span>
                    </div>
                    <div className={'list-row2'}>
                        <div>123</div>
                        <div>123</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect((state) => ({
    data: state.oilDetail.data,
}), {
    oilDetailData: actions.oilDetailData,
})(oilTankDetailContainer);