// src/redux/languageSlice.js
import { createSlice } from '@reduxjs/toolkit';

const languageSlice = createSlice({
  name: 'language',
  initialState: 'EN',
  reducers: {
    toggleLanguage: (state) => (state === 'EN' ? 'AR' : 'EN'),
  },
});

export const { toggleLanguage } = languageSlice.actions;
export default languageSlice.reducer;
