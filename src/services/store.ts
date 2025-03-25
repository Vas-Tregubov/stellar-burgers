import { configureStore, combineReducers } from '@reduxjs/toolkit';

import burgerConstructor from './slices/burger-constructor/slice';
import feed from './slices/feed/slice';
import ingredients from './slices/ingredients/slice';
import order from './slices/order/slice';
import user from './slices/user/slice';

import {
  TypedUseSelectorHook,
  useDispatch as dispatchHook,
  useSelector as selectorHook
} from 'react-redux';

export const rootReducer = combineReducers({
  burgerConstructor,
  feed,
  ingredients,
  order,
  user
});

const store = configureStore({ reducer: rootReducer });

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export const useDispatch: () => AppDispatch = dispatchHook;
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;

export default store;
