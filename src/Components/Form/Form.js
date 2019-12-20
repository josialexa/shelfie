import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import defaultPic from '../../shelfie_icon.png'
import './Form.css'

export default class Form extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            price: 0,
            img: '',
            id: '',
            buttonFlag: false
        }

        this.clear = this.clear.bind(this)
    }

    //PRE - ROUTING VERSION
    // componentDidUpdate(prevProps) {
    //     if(prevProps.product != this.props.product) {
    //         this.setState({
    //             name: this.props.product.name,
    //             price: this.props.product.price,
    //             img: this.props.product.img,
    //             id: this.props.product.id,
    //             buttonFlag: true
    //         })
    //     }
    // }

    componentDidMount() {
        if(this.props.match.params.id) this.getProduct(this.props.match.params.id)
    }

    componentDidUpdate(prevProps) {
        if(this.props.match.params != prevProps.match.params) this.clear()
    }

    handleUpdate = (e, item) => {
        let updated = {}
        updated[item] = e.target.value
    
        this.setState(updated)
    }

    clear() {
        // if(this.state.buttonFlag) this.props.setProduct()
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
            .then(res => console.log('Success'))
            .catch(err => console.log('Error posting from axios', err))
        this.clear()
    }

    update = () => {
        axios.put(`/api/product/${this.state.id}`, this.state)
            .then(res => console.log('Success'))
            .catch(err => console.log('Error updating from axios', err))
        this.clear()
    }

    getProduct = (id) => {
        axios.get(`/api/product/${id}`)
            .then(res => {
                this.setState({
                    name: res.data[0].name,
                    price: res.data[0].price,
                    img: res.data[0].img,
                    id: res.data[0].id,
                    buttonFlag: true
                })
            })
    }

    render() {
        return (
            <div className='form'>
                <div className='form-image-container'>
                    <img src={this.state.img || defaultPic} alt='Uploaded Product Pic' className='form-image' />
                </div>
                <div className='form-item'>
                    <span>Image URL: </span><input onChange={e => this.handleUpdate(e, 'img')} value={this.state.img}></input>
                </div>
                <div className='form-item'>
                    <span>Product Name: </span><input onChange={e => this.handleUpdate(e, 'name')} value={this.state.name}></input>
                </div>
                <div className='form-item'>
                    <span>Price: </span><input onChange={e => this.handleUpdate(e, 'price')} value={this.state.price}></input>
                </div>
                <div className='form-buttons'>
                    <Link to='/'><button onClick={this.clear}>Cancel</button></Link>
                    <Link to='/'><button onClick={this.state.buttonFlag ? this.update : this.post}>{this.state.buttonFlag ? 'Save Changes' : 'Add to Inventory'}</button></Link>
                </div>
            </div>
        )
    }
}
