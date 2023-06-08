export interface IBasket {
  type: string;
  id: number;
  sku: string;
  title: string;
  regular_price: {
    currency: string;
    value: number;
  };
  image: string;
  brand: string;
  count: number;
}

export interface BasketSliceState {
  basket: IBasket[];
  totalPrice: number;
  totalUnits: number;
}
