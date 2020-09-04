import React from 'react';
import ReactPaginate from 'react-paginate';

import './PaginationBar.css';

const PaginationBar = ({ totalItems, pagination, setPagination }) => {
    const pageCount = Math.ceil(totalItems / pagination.perPage);

    const handlePageChange = (pages) => {
        setPagination({ ...pagination, page: pages.selected });
    };

    return (
        <div className='pagination-bar'>
            {pageCount > 1 && (
                <ReactPaginate
                    pageCount={pageCount}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={1}
                    previousLabel='Previous'
                    breakLabel='...'
                    nextLabel='Next'
                    initialPage={pagination.page}
                    onPageChange={handlePageChange}
                    forcePage={pagination.page}
                    containerClassName='paginate-bar'
                    pageClassName='paginate-bar__page'
                    pageLinkClassName='paginate-bar-page__a'
                    activeClassName='paginate-bar__page--active'
                    activeLinkClassName='paginate-bar-page__a--active'
                    previousClassName='paginate-bar__previous'
                    previousLinkClassName='paginate-bar-previous__a'
                    breakClassName='paginate-bar__break'
                    breakLinkClassName='paginate-bar-break__a'
                    nextClassName='paginate-bar__next'
                    nextLinkClassName='paginate-bar-next__a'
                    disabledClassName='paginate-bar__disabled'
                />
            )}
        </div>
    );
};

export default PaginationBar;
