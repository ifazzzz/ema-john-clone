import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const {cart} = props;
    // console.log(cart);

    let total = 0;
    let shipping = 0;
    for(const product of cart){
        total = total + product.price
        shipping = shipping + product.shipping
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + shipping + tax;
    return (
        <div className='cart-details'>
            <h4>Order Summary</h4>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price : ${total}</p>
            <p>Shipping Charge : ${shipping}</p>
            <p>Tax Amount : ${tax}</p>
            <h5>Grand Total : ${grandTotal.toFixed(2)}</h5>
        </div>
    );
};

export default Cart;