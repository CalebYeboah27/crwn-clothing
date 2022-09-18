import { createSlice } from '@reduxjs/toolkit'
import { addItemsToCart } from './cart.utils'

const initialState = {
  cart: {
    cartItems: [],
    hidden: true,
  },
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toggleCartHidden(state, action) {
      state.cart.hidden = !state.cart.hidden
    },
    addItem(state, action) {
      // it's okay to do this because immer makes it immmutable under the hood
      state.cart.cartItems.push(action.payload)
    },
    removeFromCart(state, action) {
      state.cart.cartItems.splice(
        state.cart.cartItems.indexOf(action.payload),
        1
      )
    },
  },
})

export const { addItem, removeFromCart, toggleCartHidden } = cartSlice.actions
export default cartSlice.reducer
