import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { toggleCartHidden } from '../../redux/features/cart/cartSlice'
import CarItem from '../cart-item/cart-item.component'
import CustomButton from '../custom-button/custom-button.component'

import './cart-dropdown.styles.scss'

const CartDropdown = ({ history }) => {
  const cartItems = useSelector((state) => state.cart.cart.cartItems)

  const dispatch = useDispatch()
  const toggleHiddenCart = useCallback(
    () => dispatch(toggleCartHidden()),
    [dispatch]
  )

  return (
    <div className="cart-dropdown">
      {console.log(cartItems)}
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CarItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push('/checkout')
          toggleHiddenCart()
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  )
}

export default withRouter(React.memo(CartDropdown))
