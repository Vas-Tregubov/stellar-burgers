import { combineReducers } from 'redux';
import ingredientsReducer from './ingredientsSlice';

const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
});

export default rootReducer;
