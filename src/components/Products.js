import React from 'react';
import Product from './Product';

class Products extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productData: [{
                id: 1,
                title: "Samsung mobile",
                desc: "Samsung mobile",
                price: 23,
                qty: 1
            }, {
                id: 2,
                title: "Apple",
                desc: "Apple mobile",
                price: 50,
                qty: 1
            }, {
                id: 3,
                title: "Nokia mobile",
                desc: "Nokia mobile",
                price: 23,
                qty: 1
            }, {
                id: 4,
                title: "MI mobile",
                desc: "MI mobile",
                price: 13,
                qty: 1
            }],
            totalPrice: 109
        };
        this.addToCart = this.addToCart.bind(this);
    }

    addToCart(data) {
        const cart = this.state.productData.map(item => item.id === data.id ? { ...item, qty: item.qty + 1 } : item);
        const price = this.state.totalPrice + data.price;
        this.setState({ productData: cart, totalPrice: price });
    }
    render() {
        const { productData } = this.state;
        return (
            <div>
                {
                    productData.map(product => {
                        return <Product key={product.id} productData={product} addToCart={this.addToCart} />
                    })
                }
                <div>{this.state.totalPrice}</div>
            </div>
        )
    }
}
export default Products;