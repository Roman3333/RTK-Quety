import { FC } from 'react';

import cn from './footer.module.scss';

const Footer: FC = () => {
  return (
    <footer className={cn.footer}>
      <div className="container">
        <div className={cn.footerInner}>Copyright by Roman</div>
      </div>
    </footer>
  );
};

export default Footer;
