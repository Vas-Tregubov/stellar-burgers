import orderReducer, { IOrderState, clearOrder } from './slice';

import { order } from '../../../testData';
import { orderBurgerThunk } from './actions';
import { TNewOrderResponse } from '../../../utils/burger-api';

describe('Тесты синхронных экшенов', () => {
  test('Проверяем очистку заказа', () => {
    const initialState: IOrderState = {
      order: order,
      isOrderLoading: false,
      hasError: null
    };

    const newOrder = orderReducer(initialState, clearOrder());
    expect(newOrder).toEqual({
      order: null,
      isOrderLoading: false,
      hasError: null
    });
  });
});

describe('Тесты асинхронных экшенов', () => {
  describe('Тестируем orderBurgerThunk', () => {
    test('Тестируем отправку запроса (pending)', async () => {
      const initialState: IOrderState = {
        order: null,
        isOrderLoading: false,
        hasError: null
      };

      const newState = orderReducer(
        initialState,
        orderBurgerThunk.pending('pending', order.ingredients)
      );

      expect(newState.isOrderLoading).toBeTruthy();
      expect(newState.hasError).toBeNull();
    });
    test('Тестируем ошибку при запросе (rejected)', async () => {
      const initialState: IOrderState = {
        order: null,
        isOrderLoading: true,
        hasError: null
      };

      const error: Error = {
        name: 'rejected',
        message: 'Ошибка отправки заказа'
      };
      const newState = orderReducer(
        initialState,
        orderBurgerThunk.rejected(error, 'rejected', order.ingredients)
      );

      expect(newState.isOrderLoading).toBeFalsy();
      expect(newState.hasError).toBe(error.message);
    });
    test('Тестируем успешный запрос (fulfilled)', async () => {
      const initialState: IOrderState = {
        order: null,
        isOrderLoading: true,
        hasError: null
      };

      const newOrder: TNewOrderResponse = {
        order: order,
        name: 'new order',
        success: true
      };

      const newState = orderReducer(
        initialState,
        orderBurgerThunk.fulfilled(newOrder, 'fulfilled', order.ingredients)
      );

      expect(newState.order).toEqual(order);
      expect(newState.isOrderLoading).toBeFalsy();
      expect(newState.hasError).toBeNull();
    });
  });
});
