import React, { Component, useState } from 'react'
// import ReactModal from 'react-modal'

export default class Model extends Component {
    
    render() {
        return (
            <div className="row mt-4">
            <div className="col-4 text-center">
            <h2>{this.props.detail.tenSP}</h2>
            <img
                className="img-fluid"
                            alt="..."
    src={this.props.detail.image}
            />
            </div>
            <div className="col-8">
            <table className="table">
                <thead>
                <tr>
                    <td colSpan={2}>
                    <h1>Chi tiết sản phẩm</h1>
                    </td>
                </tr>
                <tr>
                    <td>Product code</td>
                    <td>{this.props.detail.id}</td>
                </tr>
                <tr>
                    <td>Product's name</td>
                    <td>{this.props.detail.name}</td>
                </tr>
                <tr>
                    <td>Price</td>
                    <td>{this.props.detail.price}$</td>
                </tr>
                <tr>
                    <td>Description</td>
                    <td>{this.props.detail.id}</td>
                </tr>
                <tr>
                    <td>Quantity</td>
                    <td>{this.props.detail.quantity}</td>
                </tr>
                </thead>
            </table>
            </div>
        </div>
        )
    }
}
