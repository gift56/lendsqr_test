import { useState } from "react";
import {
  Card,
  EditModal,
  FilterModal,
  MobileTable,
  Pagination,
  UserTable,
} from "../../components";
import { selectIcon } from "../../assets";
import { cardData } from "../../utils/cardData";
import { tableData, usersColumns } from "../../utils/tableData";
import { BsThreeDotsVertical } from "react-icons/bs";
import style from "../../styles/dashoboard.module.scss";

const DashboardUser = () => {
  const [data, setData] = useState(tableData);
  const [showFilter, setShowFilter] = useState(false);
  const [index, setIndex] = useState(null);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 14;
  const endOffset = itemOffset + itemsPerPage;
  const currentData = data.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(data.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

  const statusColor = (value: any) => {
    if (value === "Active") {
      return style.active;
    } else if (value === "Inactive") {
      return style.inactive;
    } else if (value === "Blacklisted") {
      return style.blacklist;
    } else if (value === "Pending") {
      return style.pendeing;
    }
  };

  const Click = (id: any) => {
    setIndex(id);
  };

  const activities = currentData.map((data: any) => ({
    organization: (
      <span className={style.content}>{data.organizationName}</span>
    ),
    username: <span className={style.content}>{data.userName}</span>,
    email: <span className={style.content}>{data.email}</span>,
    phone: <span className={style.content}>{data.phone}</span>,
    date: <span className={style.content}>{data.date}</span>,
    status: (
      <span className={`${statusColor(data.status)} ${style.status}`}>
        {data.status}
      </span>
    ),
    iconProps: (
      <div className={style.content} onClick={() => Click(data.id)}>
        <BsThreeDotsVertical />
        <EditModal id={i} show={index} setShow={setIndex} />
      </div>
    ),
  }));

  return (
    <div className={style.mainDashboard}>
      <h2>Users</h2>
      <div className={style.cardContainer}>
        {cardData.map((item, i) => (
          <Card data={item} key={i} />
        ))}
      </div>
      <div className={style.tableCon}>
        <div className={style.desktopTable}>
          <UserTable
            columns={usersColumns}
            data={activities}
            setShowFilter={setShowFilter}
          />
          <FilterModal show={showFilter} setShow={setShowFilter} />
        </div>
        <div className={style.mobileTable}>
          <MobileTable
            data={activities}
            show={false}
            text=""
            to="/dashboard/home/"
            className=""
            idPresent={false}
          />
        </div>
        <div className={style.paginate}>
          <div className={style.showing}>
            <span>Showing</span>
            <div className={style.filterCon}>
              <span>100</span>
              <img src={selectIcon} alt="/" />
            </div>
            <span>out of 100</span>
          </div>
          <div>
            <Pagination
              pageCount={pageCount}
              handlePageClick={handlePageClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardUser;
