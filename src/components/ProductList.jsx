import React, { Component } from 'react'

import ProductItem from './ProductItem';

export default class ProductList extends Component {
    renderShoes = (data) => {
        return data.map ((element, idx) => {
            return (
                <div key={idx} className="col-4">
                <ProductItem getShoesDetail={this.props.getShoesDetail}  element={element}/>
            </div>
            )
        })
    }

        render() {
            return (
            <div className='row'>
                {this.renderShoes(this.props.data)}
            </div>
            )
        }
}
