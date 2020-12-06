import React, { useState } from 'react';

class Product extends React.Component {
    constructor() {
        super();
    }
    handleAddToCart(product) {
        this.props.addToCart(product);
    }
    render() {
        const { productData } = this.props;
        return (
            <div className="product-container">
                <h5>{productData.title}</h5>
                <div>{productData.desc}</div>
                <p>{productData.price}</p>
                <div>
                    <div>Quantity: {productData.qty}</div>
                </div>
                <button onClick={() => this.handleAddToCart(productData)} >Add</button>
                <button>View</button>
            </div>
        )
    }
}
export default Product;