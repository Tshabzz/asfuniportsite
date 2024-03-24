import { configureStore } from '@reduxjs/toolkit'
import newsReducer from '@/feautures/news/newsSlice'

export default configureStore({
  reducer: {
    news: newsReducer
  },
})