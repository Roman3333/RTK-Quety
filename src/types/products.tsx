export interface IProduct {
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
}

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'sucsess',
  ERROR = 'error',
}

export interface ProductSliceState {
  products: IProduct[];
  isLoading: Status;
}
