import { configureStore } from '@reduxjs/toolkit'
import matchReducer from './matchSlice'

export default configureStore({
  reducer: {
      match: matchReducer
  },
})