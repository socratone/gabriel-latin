import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'regularCourse',
  initialState: {
    contentsItems: [{
      id: 0,
      tabTitle: '',
      image: '',
      title: '',
      description: ''
    }]
  },
  reducers: {
    setRegularCourse: (state, action) => action.payload
  }
});

export const { setRegularCourse } = slice.actions;
export default slice.reducer;