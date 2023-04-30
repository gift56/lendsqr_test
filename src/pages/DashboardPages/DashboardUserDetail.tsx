import { useState } from "react";
import style from "../../styles/dashoboard.module.scss";
import { BackIcon } from "../../assets";
import { Link } from "react-router-dom";
import { Button } from "../../components";

const DashboardUserDetail = () => {
  const [tab, setTab] = useState("General");

  const tabsItem = [
    {
      tabs: "General",
      text: "General Details",
    },
    {
      tabs: "Documents",
      text: "Documents",
    },
    {
      tabs: "Bank",
      text: "Bank Details",
    },
    {
      tabs: "Loans",
      text: "Loans",
    },
    {
      tabs: "Savings",
      text: "Savings",
    },
    {
      tabs: "App",
      text: "App and System",
    },
  ];

  return (
    <div className={style.mainDashboard}>
      <Link to="/dashboard/users" className={style.back}>
        <img src={BackIcon} alt="/" />
        <span>Back to Users</span>
      </Link>
      <div className={style.headingStyle}>
        <h2>User Details</h2>
        <div className={style.buttons}>
          <Button
            disabled={false}
            type="button"
            text="Blacklist User"
            className={style.blacklist}
            onClick={() => {}}
          />
          <Button
            disabled={false}
            type="button"
            text="Activate User"
            className={style.active}
            onClick={() => {}}
          />
        </div>
      </div>
      <div className={style.profileDetails}>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default DashboardUserDetail;
