import React, { useState, useEffect } from "react";
import { Card, MobileTable, Pagination, UserTable } from "../../components";
import { LoadingIcon, selectIcon } from "../../assets";
import { cardData } from "../../utils/cardData";
import { usersColumns } from "../../utils/tableData";
import { BsThreeDotsVertical } from "react-icons/bs";
import style from "../../styles/dashoboard.module.scss";
// import { Axios } from "../../config/config";
import useUserStore from "../../store";
import moment from "moment";

const Dashboard = () => {
  const [error, setError] = useState("");
  const { fetchAllUsers, allUsers, loading } = useUserStore();

  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 14;
  const endOffset = itemOffset + itemsPerPage;
  const currentData = allUsers.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(allUsers.length / itemsPerPage);
  // Invoke when user click to request another page.
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % allUsers.length;
    setItemOffset(newOffset);
  };

  const statusColor = (value: any) => {
    const now = moment();
    const lastActive = moment(value);
    const diffInDays = now.diff(lastActive, "days");
    if (diffInDays < 1) {
      return style.pending;
    } else if (diffInDays < 7) {
      return style.active;
    } else if (diffInDays < 30) {
      return style.inactive;
    } else {
      return style.blacklist;
    }
  };

  const statusName = (value: any) => {
    const now = moment();
    const lastActive = moment(value);
    const diffInDays = now.diff(lastActive, "days");
    if (diffInDays < 1) {
      return "Pending";
    } else if (diffInDays < 7) {
      return "Active";
    } else if (diffInDays < 30) {
      return "Inactive";
    } else {
      return "Blacklisted";
    }
  };

  // const fetchAllUsers = async () => {
  //   setLoading(true);
  //   try {
  //     const res = await Axios.get("/users");
  //     console.log(res);
  //     setData(res.data);
  //     setAllUsers(res.data);
  //     setLoading(false);
  //   } catch (error: any) {
  //     console.log(error);
  //     setError(error.message);
  //     setLoading(false);
  //   }
  // };
  useEffect(() => {
    try {
      fetchAllUsers();
    } catch (error: any) {
      console.log(error);
      setError(error.message);
    }
  }, []);

  const Click = (id: any) => {
    alert(id);
  };

  const activities = currentData.map((data: any) => ({
    organization: <span className={style.content}>{data.orgName}</span>,
    username: <span className={style.content}>{data.userName}</span>,
    email: <span className={style.content}>{data.email}</span>,
    phone: <span className={style.content}>{data.phoneNumber}</span>,
    date: (
      <span className={style.content}>
        {moment(data.createdAt).format("MMMM Do YYYY, h:mm:ss a")}
      </span>
    ),
    status: (
      <p className={`${statusColor(data.lastActiveDate)} ${style.status}`}>
        {statusName(data.lastActiveDate)}
      </p>
    ),
    iconProps: (
      <div className={style.content} onClick={() => Click(data.id)}>
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
        {loading ? (
          <div className="loadingCon">
            <img src={LoadingIcon} alt="/" />
          </div>
        ) : error ? (
          <div className="fetchErr">Error : {error}</div>
        ) : (
          <>
            <div className={style.desktopTable}>
              <UserTable columns={usersColumns} data={activities} />
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
          </>
        )}
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
