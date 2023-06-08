import { FC } from 'react';

import { IProduct } from '../../../types/products';
import { useAppDispatch, useAppSelector } from '../../../redux/redux-hooks';
import { IBasket } from '../../../types/basket';
import { RootState } from '../../../redux/store';
import { addItem } from '../../../redux/basket/basket';
import cn from './card.module.scss';

const CartItem: FC<IProduct> = ({ image, title, brand, regular_price, id, type, sku }) => {
  const productCount = useAppSelector((state: RootState) =>
    state.basket.basket.find((obj) => obj.id === id),
  );
  const addProduct = (e: any) => {
    const obj: IBasket = {
      type,
      id,
      sku,
      title,
      regular_price,
      image,
      brand,
      count: 0,
    };

    dispatch(addItem(obj));
  };
  const dispatch = useAppDispatch();

  return (
    <div className={cn.card}>
      <div className={cn.cardImg}>
        <img src={image} alt="img" loading="lazy" />
      </div>
      <h3 className={cn.cardTitle}>{title}</h3>
      <div className={cn.cardBottom}>
        <div className={cn.cardBrand}>
          <span>{brand}</span>
        </div>
        <div className={cn.cardValue}>
          <span>{regular_price.value} </span>
          <span>{regular_price.currency}</span>
        </div>
      </div>
      <button onClick={addProduct} className={cn.cardBtn}>
        Add {productCount && <span className={cn.cardBtnCount}>{productCount.count}</span>}
      </button>
    </div>
  );
};

export default CartItem;
