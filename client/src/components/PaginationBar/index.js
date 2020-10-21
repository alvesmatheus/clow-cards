import React from 'react';
import ReactPaginate from 'react-paginate';

import './index.css';

const PaginationBar = ({ totalItems, pagination, changePage }) => {
    const pageCount = Math.ceil(totalItems / pagination.perPage);

    return (
        <div className='pagination-bar'>
            {pageCount > 1 && (
                <ReactPaginate
                    pageCount={pageCount}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={1}
                    previousLabel={<i className='fa fa-backward' />}
                    breakLabel='...'
                    nextLabel={<i className='fa fa-forward' />}
                    initialPage={pagination.page}
                    onPageChange={(pages) => changePage(pages.selected)}
                    forcePage={pagination.page}
                    containerClassName='pagination-bar-wrapper'
                    pageClassName='pagination-bar-page'
                    pageLinkClassName='pagination-bar-page-link'
                    activeClassName='pagination-bar-active-page'
                    activeLinkClassName='pagination-bar-active-link,'
                    previousClassName='pagination-bar-previous-page'
                    previousLinkClassName='pagination-bar-previous-link'
                    breakClassName='pagination-bar-break'
                    breakLinkClassName='pagination-bar-break-link'
                    nextClassName='pagination-bar-next-page'
                    nextLinkClassName='pagination-bar-next-link'
                    disabledClassName='paginate-bar-disabled-page'
                />
            )}
        </div>
    );
};

export default PaginationBar;
