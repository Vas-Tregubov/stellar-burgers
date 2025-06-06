import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  TLoginData,
  TRegisterData,
  getOrdersApi,
  getUserApi,
  loginUserApi,
  logoutApi,
  registerUserApi,
  updateUserApi
} from '../../../utils/burger-api';
import { deleteCookie, setCookie } from '../../../utils/cookie';

// Логин

export const loginUserThunk = createAsyncThunk(
  'users/loginUser',
  async (data: TLoginData) =>
    loginUserApi(data).then((data) => {
      setCookie('accessToken', data.accessToken);
      localStorage.setItem('refreshToken', data.refreshToken);
      return data.user;
    })
);

// Логаут

export const logoutUserThunk = createAsyncThunk('users/logoutUser', async () =>
  logoutApi().then(() => {
    deleteCookie('accessToken');
    localStorage.removeItem('refreshToken');
  })
);

export const getUserThunk = createAsyncThunk('user/getUser', async () => {
  const response = await getUserApi();
  console.log('Пользователь загружен:', response);
  return response;
});

export const registerUserThunk = createAsyncThunk(
  'users/registerUser',
  async (data: TRegisterData) =>
    registerUserApi(data).then((data) => {
      setCookie('accessToken', data.accessToken);
      localStorage.setItem('refreshToken', data.refreshToken);
      return data.user;
    })
);

export const updateUserThunk = createAsyncThunk(
  'users/updateUser',
  async (data: Partial<TRegisterData>) => updateUserApi(data)
);

export const getOrdersThunk = createAsyncThunk(
  'users/getUserOrders',
  async () => getOrdersApi()
);
