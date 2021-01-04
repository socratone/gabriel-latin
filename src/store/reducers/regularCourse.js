import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'regularCourse',
  initialState: {
    mainTitle: '',
    subTitle: '',
    headText: [],
    contentsItems: [],
    items: []
  },
  reducers: {
    setRegularCourse: (state, action) => action.payload
  }
});

export const { setRegularCourse } = slice.actions;
export default slice.reducer;