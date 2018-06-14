import React, { Component } from 'react';
import Release from '../Release/Release';
import Waiting from '../Waiting/Waiting';
import Shop from '../Shop/Shop';
import Detail from '../Detail/Detail';
import './CardWrapper.pcss';

export default class CardWrapper extends Component {

    constructor(props) {
        super(props);
        this.state = {
            detailDisplayed: false,
            type: '',
            item: {},
            detailData: [],
            waiting: false,
        };
        this.onClick = this.onClick.bind(this);
    }

    async onClick() {
        this.setState({
            waiting: true,
        });
        const { detailDisplayed } = this.state;
        this.setState({
            detailDisplayed: !detailDisplayed,
        });
        if (!detailDisplayed) {
            const { item, getModuleDetail } = this.props;
            const detailData = await getModuleDetail(item.moduleId);
            await this.setState({
                detailData,
            });
        }
        this.setState({
            waiting: false,
        });
    }

    showDetail() {
        const { detailDisplayed, detailData } = this.state;
        if (detailDisplayed) {
            return (
                <Detail detailData={detailData} />
            );
        }
        return '';
    }

    showWaiting() { // eslint-disable-line
        return (
            <Waiting height={'200px'} />
        );
    }

    showButton() {
        const { detailDisplayed } = this.state;
        if (detailDisplayed) {
            return (
                <div className="detail-hidden" />
            );
        }
        return (<div className="detail-display" />);
    }

    showShopOrRealease() {
        const { type, item } = this.props;
        switch (type) {
            case 'Shop':
                return (<Shop item={item} />);
            case 'Release':
                return (<Release item={item} />);
            default:
                return '';
        }
    }

    render() {
        const { waiting } = this.state;
        return (
            <div className="release-wrapper">
                { this.showShopOrRealease() }
                <div className="detail-part">
                    { !waiting && this.showDetail() }
                    { waiting && this.showWaiting() }
                    <div className="check-detail" onClick={this.onClick}>
                        查看详情&nbsp;
                        { this.showButton() }
                    </div>
                </div>
            </div>
        );
    }
}
