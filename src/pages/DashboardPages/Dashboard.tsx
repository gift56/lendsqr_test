import { useState, useEffect } from "react";
import { Card, MobileTable, Pagination, UserTable } from "../../components";
import { selectIcon } from "../../assets";
import { cardData } from "../../utils/cardData";
import { usersColumns } from "../../utils/tableData";
import { BsThreeDotsVertical } from "react-icons/bs";
import style from "../../styles/dashoboard.module.scss";
import { Axios } from "../../config/config";
import useUserStore from "../../store";
import moment from "moment";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { setAllUsers } = useUserStore();

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

  const isActive = (lastActiveDate: any) => {
    const now = moment();
    const lastActive = moment(lastActiveDate);
    const diffInMinutes = now.diff(lastActive, "minutes");
    // consider a user to be active if their last activity was within the last 30 minutes
    return diffInMinutes < 30;
  };

  const statusColor = (value: any) => {
    if (isActive(value)) {
      return style.active;
    } else {
      return style.inactive;
    }
    // if (value === "Active") {
    //   return style.active;
    // } else if (value === "Inactive") {
    //   return style.inactive;
    // } else if (value === "Blacklisted") {
    //   return style.blacklist;
    // } else if (value === "Pending") {
    //   return style.pendeing;
    // }
  };

  const statusName = (value: any) => {
    if (isActive(value)) {
      return "Active";
    } else {
      return "Inactive";
    }
  };

  useEffect(() => {
    const fetchAllUsers = async () => {
      setLoading(true);
      try {
        const res = await Axios.get("/users");
        setData(res.data);
        setAllUsers(res.data);
        setLoading(false);
      } catch (error: any) {
        setError(error.message);
        setLoading(false);
      }
    };
    return () => {
      fetchAllUsers();
    };
  }, []);

  const Click = (id: any) => {
    alert(id);
  };

  const activities = currentData.map((data: any, i: any) => ({
    organization: <span className={style.content}>{data.orgName}</span>,
    username: <span className={style.content}>{data.userName}</span>,
    email: <span className={style.content}>{data.email}</span>,
    phone: <span className={style.content}>{data.phoneNumber}</span>,
    date: <span className={style.content}>{moment(data.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</span>,
    status: (
      <p className={`${statusColor(data.lastActiveDate)} ${style.status}`}>
        {statusName(data.lastActiveDate)}
      </p>
    ),
    iconProps: (
      <div className={style.content} onClick={() => Click(i)}>
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
          <div>Loading...</div>
        ) : error ? (
          <div>Error : {error}</div>
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
