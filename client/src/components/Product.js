import React from 'react';
import { Table, Container, Row, Col } from 'reactstrap';

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            filteredProducts: []
        }
        this.handleSearchByPincode = this.handleSearchByPincode.bind(this)
        this.handleSearchByDate = this.handleSearchByDate.bind(this)
    }

    handleSearchByPincode(e) {
        e.preventDefault();
        this.props.handleSearchByPincode(e.target.value)
    }

    handleSearchByDate(e) {
        e.preventDefault();
        this.props.handleSearchByDate(e.target.value)
    }

    render() {
        return (
            <Container>
                <br />
                <Row>
                    <Col><label> Pin Code:
          <input type="text" className="form-control search-form" name="search" placeholder="search pincode" onChange={this.handleSearchByPincode} />
                    </label></Col>

                    <Col><label> Date:
          <input type="text" className="form-control search-form" name="search" placeholder="search by date" onChange={this.handleSearchByDate} />
                    </label></Col>
                </Row>

                <div>
                    <Table bordered style={{ width: '72%' }}>
                        <thead>
                            <tr>
                                <th>Order Id</th>
                                <th>Customer Id</th>
                                <th>Pin Code</th>
                                <th>Order Date</th>
                                <th>Items</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.props.filteredProducts.map(product => {
                                    return (
                                        <tr key={product.orderId}>
                                            <td>{product.orderId}</td>
                                            <td>{product.customerId}</td>
                                            <td>{product.deliveryPincode}</td>
                                            <td>{product.orderDate}</td>
                                            <td>
                                                <ul className="list-unstyled">
                                                    {product.items.split(';').map((item, index) => {
                                                        const productInfo = item.split(':')
                                                        return (
                                                            item === "" ? "" :
                                                                <li key={index}>{productInfo[0]} - {productInfo[1]}</li>
                                                        )
                                                    })}
                                                </ul>

                                            </td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </Table>
                </div>
            </Container >
        )
    }
}

export default Product;