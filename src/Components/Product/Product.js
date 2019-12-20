import React, { Component } from 'react'

export default class Product extends Component {
    render() {
        return (
            <div>
                <img src={this.props.product.img} alt={`Product ${this.props.product.name}`}></img>
                <span>{this.props.product.name}</span>
                <span>{this.props.product.price}</span>
                <div>
                    <button onClick={() => this.props.delete(this.props.product.id)}>Delete</button>
                    <button onClick={() => this.props.setProduct(this.props.product.id)}>Edit</button>
                </div>
            </div>
        )
    }
}
