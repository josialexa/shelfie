import React, { Component } from 'react'
import Product from '../Product/Product'
import axios from 'axios'

export default class Dashboard extends Component {

    delete = (id) => {
        axios.delete(`/api/product/${id}`)
            .then(res => this.props.getProducts())
            .catch(err => console.log('Error deleting product', err))
    }

    render() {
        return (
            <div>
                {this.props.products.map(v => <Product key={v.id} product={v} delete={this.delete} setProduct={this.props.setProduct} />)}
            </div>
        )
    }
}
