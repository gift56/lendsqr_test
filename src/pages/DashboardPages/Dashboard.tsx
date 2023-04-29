import { Card } from "../../components";
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
    </div>
  );
};

export default Dashboard;
