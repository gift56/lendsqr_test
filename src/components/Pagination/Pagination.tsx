import ReactPaginate from "react-paginate";
import style from "../../styles/pagination.module.scss";
import { FiChevronLeft } from "react-icons/fi";

interface Props {
  pageCount?: any;
  handlePageClick?: any;
}

const Pagination = ({ pageCount, handlePageClick }: Props) => {
  return (
    <div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel={<FiChevronLeft />}
        renderOnZeroPageCount={undefined}
        containerClassName={style.paginationCon}
        pageLinkClassName={style.pageLink}
        previousLinkClassName={style.previous}
        nextLinkClassName="text-[#FF2742] leading-[27px] text-[18px] font-normal capitalize"
        activeLinkClassName="bg-[#FF2742] w-[45px] h-[45px] p-[10px] flex items-center justify-center text-white rounded-[5px]"
      />
    </div>
  );
};

export default Pagination;
