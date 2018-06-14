/**
 * Created by chenqu on 2017/8/9.
 */
import React, { Component } from 'react';
import './Shop.pcss';

export default class Shop extends Component {

    render() {
        const { item } = this.props;
        const newShop = item.indicators[0];
        const onlineShop = item.indicators[1];
        let trendClass;
        if (newShop.ratio && newShop.ratio !== 0 && newShop.ratio !== '0' && newShop.ratio !== '¥0') {
            if (newShop.trend === 'up') {
                trendClass = 'shop-note-up';
            } else {
                trendClass = 'shop-note-down';
            }
        } else {
            trendClass = 'shop-note-no';
        }

        return (
            <div className="shop-flex">
                <div className="shop-detail">
                    <div className="shop-title">{newShop.indicatorName}</div>
                    <div className="shop-value">{newShop.indicatorValue}</div>
                    <div className={trendClass}>环比上月&nbsp;<span className={`${!newShop.ratio || newShop.ratio === 0 || newShop.ratio === '￥0' ? 'hide' : ''}`}>{newShop.ratio}</span></div>
                </div>
                <div className="shop-detail">
                    <div className="shop-title">{onlineShop.indicatorName}</div>
                    <div className="shop-value">{onlineShop.indicatorValue}</div>
                    <div className={onlineShop.trend === 'up' ? 'shop-note-up' : 'shop-note-down'}>环比上月&nbsp;<span className={`${!onlineShop.ratio || onlineShop.ratio === 0 || onlineShop.ratio === '￥0' ? 'hide' : ''}`}>{onlineShop.ratio}</span></div>
                </div>
            </div>
        );
    }

}
