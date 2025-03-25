import { createSlice } from '@reduxjs/toolkit';

import { TIngredient } from '../../../utils/types';
import { getIngredientsThunk } from './actions';

export interface IIngredientsState {
  ingredients: TIngredient[];
  isIngredientsLoading: boolean;
  hasError: string | null;
}

const initialState: IIngredientsState = {
  ingredients: [],
  isIngredientsLoading: false,
  hasError: null
}

const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getIngredientsThunk.pending, (state) => {
        state.isIngredientsLoading = true;
    })
      .addCase(getIngredientsThunk.rejected, (state, action) => {
        state.isIngredientsLoading = false;
        state.hasError = action.error.message || 'Произошла ошибка';
    })
      .addCase(getIngredientsThunk.fulfilled, (state, action) => {
        state.isIngredientsLoading = false;
        state.ingredients = action.payload;
    })
      },
    selectors: {
      ingredientsSelector: (state) => state.ingredients,
      isIngredientsLoadingSelector: (state) => state.isIngredientsLoading
    }
});

export const { ingredientsSelector, isIngredientsLoadingSelector }  = ingredientsSlice.selectors;
export default ingredientsSlice.reducer;
