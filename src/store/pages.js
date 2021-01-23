import { combineReducers } from 'redux';
import regularCourse from './reducers/regularCourse';
import privateCourse from './reducers/privateCourse';

export default combineReducers({
  regularCourse,
  privateCourse
});