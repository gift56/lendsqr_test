import { selectIcon } from "../../assets";
import { Card, Pagination } from "../../components";
import UserTable from "../../components/UserTable/UserTable";
import style from "../../styles/dashoboard.module.scss";
import { cardData } from "../../utils/cardData";

const Dashboard = () => {
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

  return (
    <div className={style.mainDashboard}>
      <h2>Dashboard</h2>
      <div className={style.cardContainer}>
        {cardData.map((item, i) => (
          <Card data={item} key={i} />
        ))}
      </div>
      <div className={style.tableCon}>
        <UserTable />
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
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
