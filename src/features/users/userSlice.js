import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentUser: null,
}

const userSlice = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {
    setCurrentUser(state, action) {
      // it's okay to do this because immer makes it immmutable under the hood
      state.currentUser = action.payload
    },
  },
})

export const { setCurrentUser } = userSlice.actions
export default userSlice.reducer
