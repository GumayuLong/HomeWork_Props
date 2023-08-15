import React, { Component } from 'react'
import ProductList from './ProductList';
import data from '../../src/data/data.json'
import Model from './Model';

export default class BaiTapShoes extends Component {
    state = {
        detail: data[0],
    }

    getShoesDetail = (shoes) => {
        this.setState({
            detail: shoes,
        })
    }

    // showDesc = (desc) => {
    //     alert(desc);
    // };

    render() {
        return (
        <div>
            <ProductList getShoesDetail={this.getShoesDetail} data={data}/>
            <Model detail={this.state.detail}/>
        </div>
        )
    }
}
