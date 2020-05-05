import React from 'react';
import ReactPaginate from 'react-paginate';

import './CardsList.css';

import CardsItem from './List/CardsItem';
import CardsSearch from './List/CardsSearch';

const CardsList = (props) => {
    const handlePageChange = (pages) => {
        props.setPagination({ ...props.pagination, page: pages.selected });
    };

    return (
        <div className='cards-list'>
            <CardsSearch
                filters={props.filters}
                setFilters={props.setFilters}
                pagination={props.pagination}
                setPagination={props.setPagination}
            />
            <div className='cards-items-wrapper'>
                {props.cards.map((card) => (
                    <CardsItem key={card.name} card={card} />
                ))}
            </div>
            <ReactPaginate
                pageCount={Math.ceil(
                    props.totalCards / props.pagination.perPage
                )}
                pageRangeDisplayed={3}
                marginPagesDisplayed={1}
                previousLabel={'Previous'}
                breakLabel={'...'}
                nextLabel={'Next'}
                initialPage={props.pagination.page}
                onPageChange={handlePageChange}
                containerClassName={'paginate-bar'}
                pageClassName={'paginate-bar__page'}
                pageLinkClassName={'paginate-bar-page__a'}
                activeClassName={'paginate-bar__page--active'}
                activeLinkClassName={'paginate-bar-page__a--active'}
                previousClassName={'paginate-bar__previous'}
                previousLinkClassName={'paginate-bar-previous__a'}
                breakClassName={'paginate-bar__break'}
                breakLinkClassName={'paginate-bar-break__a'}
                nextClassName={'paginate-bar__next'}
                nextLinkClassName={'paginate-bar-next__a'}
                disabledClassName={'paginate-bar__disabled'}
            />
        </div>
    );
};

export default CardsList;
