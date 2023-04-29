import { useState } from "react";
import UserTable from "../../components/UserTable/UserTable";
import { Card, Pagination } from "../../components";
import { selectIcon } from "../../assets";
import { cardData } from "../../utils/cardData";
import { tableData, usersColumns } from "../../utils/tableData";
import { BsThreeDotsVertical } from "react-icons/bs";
import style from "../../styles/dashoboard.module.scss";

const Dashboard = () => {
  const [data, setData] = useState(tableData);
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

  const statusName = (value: any) => {
    if (value === "Active") {
      return "Active";
    } else if (value === "Inactive") {
      return "Inactive";
    } else if (value === "Blacklisted") {
      return "Blacklisted";
    } else if (value === "Pending") {
      return "Pending";
    }
  };

  const Click = (id: any) => {
    alert(id);
  };

  const activities = currentData.map((data: any, i: any) => ({
    organization: <span>{data.organizationName}</span>,
    username: <span>{data.userName}</span>,
    email: <span>{data.email}</span>,
    phone: <span>{data.phone}</span>,
    date: <span>{data.date}</span>,
    status: (
      <p className={`${statusColor(data.status)}`}>{statusName(data.status)}</p>
    ),
    iconProps: (
      <div className={style.icon} onClick={() => Click(i)}>
        <BsThreeDotsVertical />
      </div>
    ),
  }));

  return (
    <div className={style.mainDashboard}>
      <h2>Dashboard</h2>
      <div className={style.cardContainer}>
        {cardData.map((item, i) => (
          <Card data={item} key={i} />
        ))}
      </div>
      <div className={style.tableCon}>
        <UserTable columns={usersColumns} data={activities} />
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

export default Dashboard;
