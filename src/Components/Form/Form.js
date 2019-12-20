import React, { Component } from 'react'
import axios from 'axios'

export default class Form extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            price: '',
            img: ''
        }

        this.clear = this.clear.bind(this)
    }

    handleUpdate = (e, item) => {
        let updated = {}
        updated[item] = e.target.value
    
        this.setState(updated)
    }

    clear() {
        this.setState({
            name: '',
            price: '',
            img: ''
        })
    }

    post = () => {
        axios.post('/api/product', this.state)
            .then(res => this.props.getProducts())
            .catch(err => console.log('Error posting from axios', err))
        this.clear()
    }    

    render() {
        return (
            <div>
                <input onChange={e => this.handleUpdate(e, 'img')} value={this.state.img}></input>
                <input onChange={e => this.handleUpdate(e, 'name')} value={this.state.name}></input>
                <input onChange={e => this.handleUpdate(e, 'price')} value={this.state.price}></input>
                <button onClick={this.clear}>Cancel</button>
                <button onClick={this.post}>Add to Inventory</button>
            </div>
        )
    }
}
