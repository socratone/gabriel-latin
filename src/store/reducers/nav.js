import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'nav',
  initialState: {
    isMenu: false,
    subItems: null
  },
  reducers: {
    toggleMenuButton: (state) => {
      if (state.isMenu) state.isMenu = false;
      else state.isMenu = true;
    },
    setSubItems: (state, action) => {
      state.subItems = action.payload.subItems;
    }
  }
});

export const { toggleMenuButton, setSubItems } = slice.actions;
export default slice.reducer;