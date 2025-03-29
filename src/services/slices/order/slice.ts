import { createSlice } from '@reduxjs/toolkit';

import { TOrder } from '../../../utils/types';
import { orderBurgerThunk } from './actions';

export interface IOrderState {
  order: TOrder | null;
  isOrderLoading: boolean;
  hasError: string | null;
}

const initialState: IOrderState = {
  order: null,
  isOrderLoading: false,
  hasError: null
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    clearOrder: (state) => {
      state.order = null;
      state.isOrderLoading = false;
      state.hasError = null;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(orderBurgerThunk.pending, (state) => {
        state.isOrderLoading = true;
      })
      .addCase(orderBurgerThunk.rejected, (state, action) => {
        state.isOrderLoading = false;
        state.hasError = action.error.message || 'Произошла ошибка';
      })
      .addCase(orderBurgerThunk.fulfilled, (state, action) => {
        state.isOrderLoading = false;
        state.order = action.payload.order;
      });
  },
  selectors: {
    isOrderLoadingSelector: (state) => state.isOrderLoading,
    orderSelector: (state) => state.order
  }
});

export const { clearOrder } = orderSlice.actions;
export const { isOrderLoadingSelector, orderSelector } = orderSlice.selectors;
export default orderSlice.reducer;
