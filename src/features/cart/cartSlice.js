import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart: null,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      // it's okay to do this because immer makes it immmutable under the hood
      state.cart += action.payload
    },
    removeFromCart(state, action) {},
  },
})

export const { addToCart, removeFromCart } = cartSlice.actions
export default cartSlice.reducer

// const searchFieldSlice = createSlice({
//   name: 'searchField',
//   initialState,
//   reducers: {
//     setSearchField(state, action) {
//       // it's okay to do this because immer makes it immmutable under the hood
//       state.searchField = action.payload
//     },
//   },
// })

// export const { setSearchField } = searchFieldSlice.actions
// export default searchFieldSlice.reducer
