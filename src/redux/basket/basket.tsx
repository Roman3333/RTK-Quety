import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IBasket, BasketSliceState } from '../../types/basket';

const initialState: BasketSliceState = {
  basket: [],
  totalPrice: 0,
  totalUnits: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<IBasket>) {
      const findItem = state.basket.find((obj) => obj.id === action.payload.id);

      if (findItem) {
        findItem.count++;
      } else {
        state.basket.push({
          ...action.payload,
          count: 1,
        });
      }

      state.totalPrice = calcTotalPrice(state.basket);
      state.totalUnits = calcTotalUnits(state.basket);
    },
    minusItem(state, action: PayloadAction<IBasket>) {
      const findItem = state.basket.find((obj) => obj.id === action.payload.id);

      if (findItem) {
        findItem.count--;
      }

      state.totalPrice = calcTotalPrice(state.basket);
      state.totalUnits = calcTotalUnits(state.basket);
    },
    removeItem(state, action: PayloadAction<IBasket>) {
      state.basket = state.basket.filter((obj) => obj.id !== action.payload.id);
      state.totalPrice = calcTotalPrice(state.basket);
      state.totalUnits = calcTotalUnits(state.basket);
    },
    clearBasket(state) {
      state.basket = [];
      state.totalPrice = 0;
      state.totalUnits = 0;
    },
  },
});

export const { addItem, removeItem, minusItem, clearBasket } = cartSlice.actions;

export default cartSlice.reducer;

const calcTotalPrice = (items: IBasket[]) => {
  return items.reduceRight((sum, obj) => obj.regular_price.value * obj.count + sum, 0);
};

const calcTotalUnits = (items: IBasket[]) => {
  return items.reduceRight((sum, obj) => obj.count + sum, 0);
};
