import React from 'react'
import { useSelector } from 'react-redux'
import CustomButton from '../custom-button/custom-button.component'

import './cart-dropdown.styles.scss'

const CartDropdown = () => {
  const cartItems = useSelector((state) => state.cart.cart.cartItems)

  return (
    <div className="cart-dropdown">
      {console.log(cartItems)}
      <div className="cart-items" >
      {cartItems.map(({ id, name, imageUrl }) => (
        <div className="cart-item" key={`cart-item-${id}`}>
          <img
            src={imageUrl}
            alt={name}
            style={{ width: '40px', height: '40px' }}
          />
          <p>{name}</p>
        </div>
      ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  )
}

export default CartDropdown
