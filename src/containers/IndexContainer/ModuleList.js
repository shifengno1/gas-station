import React, { Component } from 'react';
import CardWrapper from '../../components/CardWrapper/CardWrapper';

export default class ReleaseList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            item: {},
        };
        this.getModuleDetail = this.getModuleDetail.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (JSON.stringify(this.props.item) !== JSON.stringify(nextProps.item)) {
            const { item } = nextProps;
            this.setState({
                item,
            });
        }
    }

    async getModuleDetail(moduleId) {
        const { getModuleDetail } = this.props;
        return await getModuleDetail(moduleId);
    }

    render() {
        const { item, type } = this.props;
        return (
            <div>
                <CardWrapper getModuleDetail={this.getModuleDetail} type={type} item={item} />
            </div>
        );
    }

}
