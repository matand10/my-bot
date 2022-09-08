import { configureStore } from '@reduxjs/toolkit';
import { botReducer } from './bot/bot.reducer';

export const store = configureStore({
  reducer: {
    botModule: botReducer
  },
});
