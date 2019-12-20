import React, { Component } from 'react'
import Product from '../Product/Product'
import axios from 'axios'

export default class Dashboard extends Component {
    constructor() {
        super()
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        axios.get('/api/product')
            .then(res => this.setState({products: res.data}))
            .catch(err => console.log('Error getting data', err))
      }
    
      getProducts() {
        axios.get('/api/product')
          .then(res => this.setState({products: res.data}))
          .catch(err => console.log('Error getting data', err))
      }

    delete = (id) => {
        axios.delete(`/api/product/${id}`)
            .then(res => this.props.getProducts())
            .catch(err => console.log('Error deleting product', err))
    }

    render() {
        return (
            <div>
                {this.state.products.map(v => <Product key={v.id} product={v} delete={this.delete} setProduct={this.props.setProduct} />)}
            </div>
        )
    }
}
