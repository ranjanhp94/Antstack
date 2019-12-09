import React from 'react';
import axios from 'axios';
import Product from './components/Product'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      filteredProducts: []
    }
    this.handleSearchByPincode = this.handleSearchByPincode.bind(this)
    this.handleSearchByDate = this.handleSearchByDate.bind(this)
  }

  componentDidMount() {
    axios.get('http://localhost:3005/products')
      .then(response =>
        this.setState(() => ({
          products: response.data,
          filteredProducts: response.data
        }))
      )
  }

  handleSearchByPincode(res) {
    this.setState(prevState => ({
      filteredProducts: prevState.products.filter(product => product.deliveryPincode.indexOf(res) !== -1)
    }))
  }

  handleSearchByDate(result) {
    let res1 = result.split("/").join("/")
    this.setState(prevState => ({
      filteredProducts: prevState.products.filter(product => product.orderDate.indexOf(res1) !== -1)
    }))
  }

  render() {
    return (
      <div>
        <Product products={this.state.products} filteredProducts={this.state.filteredProducts} handleSearchByPincode={this.handleSearchByPincode} handleSearchByDate={this.handleSearchByDate} />
      </div>
    )
  }
}

export default App;