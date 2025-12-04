
import ReactPaginate from 'react-paginate';
import "./Pagination.css"

type PaginationProperties = {
    currentPage: number;
    onChangePage: (page: number) => void;
}

type OnChangePageSelected = {
    selected: number;
}

export default function Pagination({ currentPage, onChangePage }: PaginationProperties) {

    const onChangePageLocal = (event: OnChangePageSelected) => {
        window.scrollTo(0, 0);
        onChangePage(event.selected + 1);
    };

    return (
        <>
            <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={onChangePageLocal}
                pageRangeDisplayed={10}
                pageCount={2}
                previousLabel="<"
                renderOnZeroPageCount={null}
                forcePage={currentPage - 1}

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
