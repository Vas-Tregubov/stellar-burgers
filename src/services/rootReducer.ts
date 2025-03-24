import { combineSlices } from '@reduxjs/toolkit';
import { ingredientsSlice } from './ingredientsSlice';

const rootReducer = combineSlices(ingredientsSlice);

export default rootReducer;
