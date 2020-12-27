import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'nav',
  initialState: {
    font: {
      color: '#707070'
    }
  },
  reducers: {
    setFont: (state, action) => {
      state.font.color = action.payload.color;
      state.font.fontWeight = action.payload.fontWeight;
    }
  }
});

export const { setFont } = slice.actions;
export default slice.reducer;