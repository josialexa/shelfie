import React, { Component } from 'react'
import axios from 'axios'

export default class Form extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            price: '',
            img: '',
            id: '',
            buttonFlag: false
        }

        this.clear = this.clear.bind(this)
    }

    componentDidUpdate(prevProps) {
        if(prevProps.product != this.props.product) {
            this.setState({
                name: this.props.product.name,
                price: this.props.product.price,
                img: this.props.product.img,
                id: this.props.product.id,
                buttonFlag: true
            })
        }
    }

    handleUpdate = (e, item) => {
        let updated = {}
        updated[item] = e.target.value
    
        this.setState(updated)
    }

    clear() {
        if(this.state.buttonFlag) this.props.setProduct()
        this.setState({
            name: '',
            price: '',
            img: '',
            id: '',
            buttonFlag: false
        })
    }

    post = () => {
        axios.post('/api/product', this.state)
            .then(res => this.props.getProducts())
            .catch(err => console.log('Error posting from axios', err))
        this.clear()
    }

    update = () => {
        axios.put(`/api/product/${this.state.id}`, this.state)
            .then(res => this.props.getProducts())
            .catch(err => console.log('Error updating from axios', err))
        this.clear()
    }

    render() {
        return (
            <div>
                <div>
                    <span>Image URL: </span><input onChange={e => this.handleUpdate(e, 'img')} value={this.state.img}></input>
                </div>
                <div>
                    <span>Product Name: </span><input onChange={e => this.handleUpdate(e, 'name')} value={this.state.name}></input>
                </div>
                <div>
                    <span>Price: </span><input onChange={e => this.handleUpdate(e, 'price')} value={this.state.price}></input>
                </div>
                <div>
                    <button onClick={this.clear}>Cancel</button>
                    <button onClick={this.state.buttonFlag ? this.update : this.post}>{this.state.buttonFlag ? 'Save Changes' : 'Add to Inventory'}</button>
                </div>
            </div>
        )
    }
}
