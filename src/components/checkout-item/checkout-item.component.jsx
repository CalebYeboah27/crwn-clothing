import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'

import {
  addItem,
  clearItemFromCart,
  removeItem,
} from '../../redux/features/cart/cartSlice'

import './checkout-item.styles.scss'

const CheckoutItem = ({ item }) => {
  const { id, name, imageUrl, price, quantity } = item

  const dispatch = useDispatch()
  const clearItem = useCallback(
    () => dispatch(clearItemFromCart(item)),
    [dispatch, item]
  )

  return (
    <div key={id} className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>

      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => dispatch(removeItem(item))}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => dispatch(addItem(item))}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => clearItem()}>
        &#10005;
      </div>
    </div>
  )
}

export default CheckoutItem
