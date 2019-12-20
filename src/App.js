import React, {Component} from 'react';
import axios from 'axios'
import Header from './Components/Header/Header'
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      products: [],
      product: {},
      editFlag: false
    }

    this.getProducts = this.getProducts.bind(this)
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

  setProduct = (id) => {
    if(!id) {
      this.setState({product: {}})
    } else {
      const index = this.state.products.findIndex(v => v.id == id)
      this.setState({product: this.state.products[index]})
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Dashboard products={this.state.products} getProducts={this.getProducts} setProduct={this.setProduct} />
        <Form getProducts={this.getProducts} product={this.state.product} setProduct={this.setProduct} />
      </div>
    )
  }
}

export default App;
