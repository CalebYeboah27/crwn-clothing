import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { toggleCartHidden } from '../../redux/features/cart/cartSlice'
import './cart-icon.styles.scss'

const CartIcon = () => {
  const dispatch = useDispatch()
  const toggleHiddenCart = useCallback(() => dispatch(toggleCartHidden()), [dispatch])

  const cartItems = useSelector((state) => state.cart.cart.cartItems)
  const itemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0)

  return (
    <div className="cart-icon" onClick={() => toggleHiddenCart()}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  )
}

export default CartIcon
