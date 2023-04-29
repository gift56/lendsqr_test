import { Card } from "../../components";
import UserTable from "../../components/UserTable/UserTable";
import style from "../../styles/dashoboard.module.scss";
import { cardData } from "../../utils/cardData";

const Dashboard = () => {
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
      </div>
    </div>
  );
};

export default Dashboard;
