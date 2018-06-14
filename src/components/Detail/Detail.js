import React, { Component } from 'react';
import './Detail.pcss';

export default class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            detailData: [],
        };
    }

    componentWillMount() {
        const { detailData } = this.props;
        this.setState({
            detailData,
        });
    }

    componentWillReceiveProps(nextProps) {
        if (JSON.stringify(this.props.detailData) !== JSON.stringify(nextProps.detailData)) {
            const { detailData } = nextProps;
            this.setState({
                detailData,
            });
        }
    }

    showDetail(detailData) { // eslint-disable-line
        return detailData.map((item, index) => {
            const node = [];
            item.indicators.map((indicatorItem, indicatorIndex) => {
                node.push(
                    <div className="detail-title" key={`indicatorIndex${indicatorIndex}`}>
                        <div className="title-name">{indicatorItem.indicatorName}</div>
                        <div className="title-value">
                            {indicatorItem.indicatorValue}
                        </div>
                    </div>,
                );
                return null;
            });
            item.subIndicators.map((subIndicatorItem, subIndicatorIndex) => {
                if (subIndicatorItem.ratio) {
                    node.push(
                        <div className="detail-item-44 clearfix" key={`subIndicatorIndex${subIndicatorIndex}`}>
                            <div className="item-name">{subIndicatorItem.indicatorName}</div>
                            <div className="item-value">
                                {subIndicatorItem.indicatorValue}
                                <div className={subIndicatorItem.trend === 'up' ? 'shop-note-up' : 'shop-note-down'}>环比上月&nbsp;<span className={!subIndicatorItem.ratio || subIndicatorItem.ratio === 0 || subIndicatorItem.ratio === '￥0' ? 'hide' : ''}>{subIndicatorItem.ratio}</span></div>
                            </div>
                        </div>,
                    );
                }
                node.push(
                    <div className="detail-item" key={`subIndicatorIndex${subIndicatorIndex}`}>
                        <div className="item1-name">{subIndicatorItem.indicatorName}</div>
                        <div className="item1-value">{subIndicatorItem.indicatorValue}</div>
                    </div>,
                );
                return null;
            });
            return node;
        });
    }

    render() {
        const { detailData } = this.state;
        return (
            <div className="detail-content">
                {
                    detailData && detailData.length !== 0 && this.showDetail(detailData)
                }
            </div>
        );
    }
}
