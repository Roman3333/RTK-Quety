import { FC, useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';

import CardItem from '../cardItem/CardItem';
import { IProduct } from '../../../types/products';
import cn from './cards.module.scss';

interface CardsProps {
  itemsPerPage: number;
  products: IProduct[];
}

const Cards: FC<CardsProps> = ({ itemsPerPage, products }) => {
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = products.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.length / itemsPerPage);

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;

    setItemOffset(newOffset);
  };

  return (
    <>
      <div className={cn.cards}>
        <div className={cn.cardsTop}>
          {currentItems.map((product) => (
            <CardItem key={product.id} {...product} />
          ))}
        </div>

        <div className={cn.cardsBottom}>
          <ReactPaginate
            nextLabel=" >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={pageCount}
            previousLabel="< "
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
            renderOnZeroPageCount={null}
          />
        </div>
      </div>
    </>
  );
};

export default Cards;
