import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../features/cart/cartSlice'
import userReducer from '../features/users/userSlice'

const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
})

export default store
