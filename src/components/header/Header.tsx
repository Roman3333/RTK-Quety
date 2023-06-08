import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';

import logo from '../../../public/aaccent.svg';
import basket from '../../../public/basket.svg';
import arrowBack from '../../../public/arrow-back.svg';
import { useAppSelector } from '../../redux/redux-hooks';
import { RootState } from '../../redux/store';
import cn from './header.module.scss';

const Header: FC = () => {
  // const { totalPrice, totalUnits } = useAppSelector((state: RootState) => state.basket);
  const { totalPrice, totalUnits } = useAppSelector((state: RootState) => state.basket);
  const location = useLocation();

  return (
    <header className={cn.header}>
      <div className="container">
        <div className={cn.headerInner}>
          <div className={cn.headerLeft}>
            <Link to={'/'}>
              <img src={logo} alt="Aaccent" />
            </Link>
          </div>
          {location.pathname === '/basket' && (
            <Link to={'/'} className={cn.headerCentr}>
              <img src={arrowBack} alt="arrow-back" width={30} height={30} />
            </Link>
          )}
          <div className={cn.headerRight}>
            <Link className={cn.headerLink} to={'/basket'}>
              <img className={cn.headerBasket} src={basket} alt="basket" width={30} height={30} />
              <span className={cn.headerCount}>{totalUnits} units</span>
              <span className={cn.headerTotalPrice}>{totalPrice.toFixed(1)} USD</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
