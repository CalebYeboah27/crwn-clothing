import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'

import './checkout.styles.scss'

const CheckOutPage = () => {
  const cartItems = useSelector((state) => state.cart.cart.cartItems)
  const cartTotal = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  )

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Desciption</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} item={cartItem} />
      ))}

      <div className="total">
        <span>TOTAL: ${cartTotal}</span>
      </div>
    </div>
  )
}

export default CheckOutPage
