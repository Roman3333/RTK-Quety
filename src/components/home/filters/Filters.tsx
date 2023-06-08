import { FC } from 'react';

import cn from './filters.module.scss';

interface FiltersProps {
  brands: string[];
}

const Filters: FC<FiltersProps> = ({ brands }) => {
  return (
    <div className={cn.filters}>
      <ul className={cn.filtersList}>
        {brands.map((brand) => (
          <li key={brand}>
            <label className={cn.filtersLabel}>
              <input type="checkbox" value={brand} />
              {brand}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filters;
