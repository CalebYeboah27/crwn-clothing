import React from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '../../redux/features/cart/cartSlice'
import CustomButton from '../custom-button/custom-button.component'

import './collection-item.styles.scss'

const CollectionItem = ({ item }) => {
  const { name, price, imageUrl } = item

  const dispatch = useDispatch()
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />

      <div className="collection-footer">
        <div className="name">{name}</div>
        <div className="price">{price}</div>
      </div>
      <CustomButton
        inverted
        onClick={() => {
          dispatch(addItem(item))
        }}
      >
        Add to cart
      </CustomButton>
    </div>
  )
}

export default CollectionItem
