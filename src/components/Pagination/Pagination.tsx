import ReactPaginate from "react-paginate";
import style from "../../styles/pagination.module.scss";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface Props {
  pageCount?: any;
  handlePageClick?: any;
}

const Pagination = ({ pageCount, handlePageClick }: Props) => {
  return (
    <div>
      <ReactPaginate
        breakLabel="..."
        nextLabel={<FiChevronRight />}
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel={<FiChevronLeft />}
        renderOnZeroPageCount={undefined}
        containerClassName={style.paginationCon}
        pageLinkClassName={style.pageLink}
        previousLinkClassName={style.previous}
        nextLinkClassName={style.previous}
        activeLinkClassName={style.active}
      />
    </div>
  );
};

export default Pagination;
