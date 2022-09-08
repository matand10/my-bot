import { configureStore } from '@reduxjs/toolkit'
import { botReducer } from './bot/bot.reducer'
import { userReducer } from './user/user.reducer'

export const store = configureStore({
  reducer: {
    userModule: userReducer,
    botModule: botReducer,
  },
});
