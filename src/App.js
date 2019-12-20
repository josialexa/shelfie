import React, {Component} from 'react'
import {HashRouter as Router} from 'react-router-dom'
import Header from './Components/Header/Header'
import routes from './routes'
// import Dashboard from './Components/Dashboard/Dashboard'
// import Form from './Components/Form/Form'
import './App.css';

class App extends Component {
  //PRE - ROUTING
  // setProduct = (id) => {
  //   if(!id) {
  //     this.setState({product: {}})
  //   } else {
  //     const index = this.state.products.findIndex(v => v.id == id)
  //     this.setState({product: this.state.products[index]})
  //   }
  // }

  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          {routes}
        </Router>
        {/* <Dashboard products={this.state.products} getProducts={this.getProducts} setProduct={this.setProduct} />
        <Form getProducts={this.getProducts} product={this.state.product} setProduct={this.setProduct} /> */}
      </div>
    )
  }
}

export default App;
