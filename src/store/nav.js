import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'nav',
  initialState: {
    font: {
      color: '#707070'
    },
    dropdown: {
      color: 'black',
      borderColor: 'gainsboro',
      backgroundColor: 'white'
    }
  },
  reducers: {
    setNavItem: (state, action) => {
      state.font.color = action.payload.color;
      state.font.fontWeight = action.payload.fontWeight;
    },
    setDropdown: (state, action) => {
      state.dropdown.color = action.payload.color;
      state.dropdown.borderColor = action.payload.borderColor;
      state.dropdown.backgroundColor = action.payload.backgroundColor;
    },
  }
});

export const { setNavItem, setDropdown } = slice.actions;
export default slice.reducer;