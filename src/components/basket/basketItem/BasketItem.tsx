import { FC } from 'react';

import { useAppDispatch, useAppSelector } from '../../../redux/redux-hooks';
import { addItem, removeItem, minusItem } from '../../../redux/basket/basket';
import { IBasket } from '../../../types/basket';
import cn from './basketItem.module.scss';

const BasketItem: FC<IBasket> = ({ image, title, brand, regular_price, id, type, sku, count }) => {
  const dispatch = useAppDispatch();

  const plusProduct = () => {
    dispatch(addItem({ image, title, brand, regular_price, id, type, sku, count }));
  };

  const minusProduct = () => {
    dispatch(minusItem({ image, title, brand, regular_price, id, type, sku, count }));
  };

  const deleteItem = () => {
    dispatch(removeItem({ image, title, brand, regular_price, id, type, sku, count }));
  };

  return (
    <div className={cn.basketItem}>
      <div className={cn.basketItem}>
        <img src={image} alt="product" width={30} height={30} />
      </div>
      <div className={cn.basketItemTitle}>{title}</div>
      <div className={cn.basketItemCount}>
        {' '}
        <button disabled={count === 1} onClick={minusProduct}>
          -
        </button>{' '}
        <span>{count}</span> <button onClick={plusProduct}>+</button>
      </div>
      <div className={cn.basketItemRemove} onClick={deleteItem}>
        Delete{' '}
      </div>
    </div>
  );
};

export default BasketItem;
