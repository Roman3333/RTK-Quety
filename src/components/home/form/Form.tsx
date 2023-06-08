import { FC, useState, FormEvent } from 'react';

import { IProduct } from '../../../types/products';
import cn from './form.module.scss';
import { useCreateProductsMutation } from '../../../redux/api/api';

const Form: FC = () => {
  const [product, setTitle] = useState({
    title: '',
    value: 0,
    img: '',
    brand: '',
  });
  const [createProducts] = useCreateProductsMutation();

  const send = (e: FormEvent) => {
    e.preventDefault();

    const obj: IProduct = {
      type: 'simple',
      id: Date.now(),
      sku: 's1',
      title: product.title,
      regular_price: {
        currency: 'USD',
        value: product.value,
      },
      image: product.img,
      brand: product.brand,
    };

    createProducts(obj).then(() => {
      setTitle({
        title: '',
        value: 0,
        img: '',
        brand: '',
      });
    });
  };

  return (
    <div className={cn.form}>
      <div>Create new product:</div>
      <form onSubmit={send} action="">
        <label>
          <input
            value={product.title}
            onChange={(e) => setTitle({ ...product, title: e.target.value })}
            type="text"
            placeholder="title"
          />
        </label>
        <label>
          <input
            value={product.value}
            onChange={(e) => setTitle({ ...product, value: parseFloat(e.target.value) })}
            type="number"
            placeholder="value"
          />
        </label>
        <label>
          <input
            value={product.img}
            onChange={(e) => setTitle({ ...product, img: e.target.value })}
            type="text"
            placeholder="img"
          />
        </label>
        <label>
          <input
            value={product.brand}
            onChange={(e) => setTitle({ ...product, brand: e.target.value })}
            type="text"
            placeholder="brand"
          />
        </label>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default Form;
