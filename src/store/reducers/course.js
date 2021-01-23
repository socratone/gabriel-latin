import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'course',
  initialState: {
    title: '',
    items: [],
    image: '',
    courses: [],
  },
  reducers: {
    setCourse: (state, action) => action.payload
  }
});

export const { setCourse } = slice.actions;
export default slice.reducer;