import React from 'react';
import ReactPaginate from 'react-paginate';

import './PaginationBar.css';

const PaginationBar = ({ totalCards, pagination, setPagination }) => {
    const handlePageChange = (pages) => {
        setPagination({ ...pagination, page: pages.selected });
    };

    const reactPaginateProps = {
        pageCount: Math.ceil(totalCards / pagination.perPage),
        pageRangeDisplayed: 3,
        marginPagesDisplayed: 1,
        previousLabel: 'Previous',
        breakLabel: '...',
        nextLabel: 'Next',
        initialPage: pagination.page,
        onPageChange: handlePageChange,
        forcePage: pagination.page,
        containerClassName: 'paginate-bar',
        pageClassName: 'paginate-bar__page',
        pageLinkClassName: 'paginate-bar-page__a',
        activeClassName: 'paginate-bar__page--active',
        activeLinkClassName: 'paginate-bar-page__a--active',
        previousClassName: 'paginate-bar__previous',
        previousLinkClassName: 'paginate-bar-previous__a',
        breakClassName: 'paginate-bar__break',
        breakLinkClassName: 'paginate-bar-break__a',
        nextClassName: 'paginate-bar__next',
        nextLinkClassName: 'paginate-bar-next__a',
        disabledClassName: 'paginate-bar__disabled',
    };

    return (
        <div>
            {reactPaginateProps.pageCount > 1 && (
                <ReactPaginate {...reactPaginateProps} />
            )}
        </div>
    );
};

export default PaginationBar;
