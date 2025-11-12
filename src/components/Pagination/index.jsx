import React from 'react'
import ReactPaginate from 'react-paginate';
import "./Pagination.css"



export default function Pagination({ onChangePage }) {
    return (
        <>
            <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={(event) => onChangePage(event.selected + 1)}
                pageRangeDisplayed={10}
                pageCount={2}
                previousLabel="<"
                renderOnZeroPageCount={null}


                containerClassName="pagination"
                pageClassName="page-item"
                pageLinkClassName="page-link"

                previousClassName="page-item"
                previousLinkClassName="page-link"

                nextClassName="page-item"
                nextLinkClassName="page-link"

                breakClassName="page-item"
                breakLinkClassName="page-link"

                activeClassName="active"
            />
        </>
    )
}
