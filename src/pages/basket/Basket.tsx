import { FC } from 'react';

import BasketItem from '../../components/basket/basketItem/BasketItem';
import Form from '../../components/basket/form/Form';
import { useAppSelector } from '../../redux/redux-hooks';

import { RootState } from '../../redux/store';
import cn from './basket.module.scss';
import Modal from '../../components/ui/Modal';
import { useGetProductsQuery } from '../../redux/api/api';

interface IBasketProps {
  isModalVisible: boolean;
  setIsModalVisible: (isModalVisible: boolean) => void;
}

const Basket: FC<IBasketProps> = ({ isModalVisible, setIsModalVisible }) => {
  const { basket } = useAppSelector((state: RootState) => state.basket);
  //получаем массив из RTK(из стейта) без отправки запроса на бэк
  const { data } = useGetProductsQuery(null);

  if (basket.length === 0) {
    return <div className="container">В корзине нету товаров</div>;
  }
  return (
    <section className={cn.basket}>
      <div className="container">
        <div className={cn.basketItems}>
          {basket.map((obj) => (
            <BasketItem key={obj.id} {...obj} />
          ))}
        </div>
        <Form isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} />
      </div>
      <Modal isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} />
    </section>
  );
};

export default Basket;
