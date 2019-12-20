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
      products: []
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

  render() {
    return (
      <div className="App">
        <Header />
        <Dashboard products={this.state.products} />
        <Form getProducts={this.getProducts} />
      </div>
    )
  }
}

export default App;
