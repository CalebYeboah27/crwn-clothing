import React from 'react'
import { useSelector } from 'react-redux'
import CarItem from '../cart-item/cart-item.component'
import CustomButton from '../custom-button/custom-button.component'

import './cart-dropdown.styles.scss'

const CartDropdown = () => {
  const cartItems = useSelector((state) => state.cart.cart.cartItems)

  return (
    <div className="cart-dropdown">
      {console.log(cartItems)}
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CarItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  )
}

export default CartDropdown
