import React, { useState, FC } from 'react';
import axios from 'axios';

import { useAppSelector } from '../../../redux/redux-hooks';
import { RootState } from '../../../redux/store';
import cn from './form.module.scss';

interface IFormProps {
  isModalVisible: boolean;
  setIsModalVisible: (isModalVisible: boolean) => void;
}

const Form: FC<IFormProps> = ({ isModalVisible, setIsModalVisible }) => {
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const { basket, totalPrice } = useAppSelector((state: RootState) => state.basket);

  const sendForm = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const formData = new FormData();

      formData.append('Name', name);
      formData.append('Phone', phone);
      formData.append('Products', JSON.stringify(basket));
      formData.append('TotalPrice', totalPrice.toString());

      const response = await axios.post('https://app.aaccent.su/js/confirm.php', formData);
      const data = await response.data;

      console.log(data);
      console.log(...formData);
      setIsModalVisible(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={cn.formWrapper}>
      <form onSubmit={sendForm} action="">
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
        />
        <input
          type="phone"
          name="phone"
          value={phone}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)}
        />
        <button>Оформить заказ</button>
      </form>
    </div>
  );
};

export default Form;
