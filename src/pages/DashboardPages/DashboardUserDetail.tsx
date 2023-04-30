import { useState } from "react";
import style from "../../styles/dashoboard.module.scss";
import { BackIcon } from "../../assets";
import { Link } from "react-router-dom";

const DashboardUserDetail = () => {
  const [tab, setTab] = useState("General");

  return (
    <div className={style.mainDashboard}>
      <Link to="/dashboard/users" className={style.back}>
        <img src={BackIcon} alt="/" />
        <span>Back to Users</span>
      </Link>
    </div>
  );
};

export default DashboardUserDetail;
