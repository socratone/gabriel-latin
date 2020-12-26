import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'nav',
  initialState: {
    color: '#707070'
  },
  reducers: {
    setFontColor: (state, action) => {
      state.color = action.payload.color;
    }
  }
});

export const { setFontColor } = slice.actions;
export default slice.reducer;