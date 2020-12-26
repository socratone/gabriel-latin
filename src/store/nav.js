import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'nav',
  initialState: {
    color: 'white'
  },
  reducers: {
    setFontColor: (state, action) => {
      state.color = action.payload.color;
    }
  }
});

export const { setFontColor } = slice.actions;
export default slice.reducer;