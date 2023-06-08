import { FC, useState } from 'react';

import Cards from '../../components/home/cards/Cards';
import Filters from '../../components/home/filters/Filters';
import Form from '../../components/home/form/Form';
import { useGetProductsQuery } from '../../redux/api/api';
import cn from './home.module.scss';

const Home: FC = () => {
  const [brands, setBrands] = useState<string[]>(['Brand 1', 'Brand 2', 'Brand 3', 'Brand 4']);

  const { data, isLoading } = useGetProductsQuery(null);

  return (
    <section className={cn.cards}>
      <div className="container">
        <div className={cn.cardsInner}>
          <Filters brands={brands} />
          {isLoading ? (
            <div>Идет заугузка товаров...</div>
          ) : data ? (
            <Cards itemsPerPage={6} products={data} />
          ) : (
            <div>Товары не найдены</div>
          )}
        </div>
        <Form />
      </div>
    </section>
  );
};

export default Home;
