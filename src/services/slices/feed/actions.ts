import { createAsyncThunk } from '@reduxjs/toolkit';

import { getFeedsApi, getOrderByNumberApi } from '../../../utils/burger-api';

export const getFeedsThunk = createAsyncThunk('feeds/getFeeds', getFeedsApi);

export const getOrderByNumberThunk = createAsyncThunk(
  'orders/getOrder',
  getOrderByNumberApi
);
