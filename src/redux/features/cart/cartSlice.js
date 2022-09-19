import { createSlice } from '@reduxjs/toolkit'
import { addItemsToCart, removeItemFromCart } from './cart.utils'

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
      // state.cart.cartItems.push(action.payload)
      const { cartItems } = state.cart
      state.cart.cartItems = addItemsToCart(cartItems, action.payload)
    },
    clearItemFromCart(state, action) {
      const { cartItems } = state.cart

      state.cart.cartItems = cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id
      )
    },
    removeItem(state, action) {
      state.cart.cartItems = removeItemFromCart(
        state.cart.cartItems,
        action.payload
      )
    },
  },
})

export const { addItem, removeItem, clearItemFromCart, toggleCartHidden } =
  cartSlice.actions
export default cartSlice.reducer
