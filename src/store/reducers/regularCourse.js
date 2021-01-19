import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'regularCourse',
  initialState: {
    title: '',
    items: [],
    courses: [],
  },
  reducers: {
    setRegularCourse: (state, action) => action.payload
  }
});

export const { setRegularCourse } = slice.actions;
export default slice.reducer;