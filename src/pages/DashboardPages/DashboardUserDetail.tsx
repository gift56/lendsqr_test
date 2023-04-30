import { useState } from "react";
import style from "../../styles/dashoboard.module.scss";
import { Avatar, BackIcon } from "../../assets";
import { Link, useParams } from "react-router-dom";
import { Button } from "../../components";
import { tableData } from "../../utils/tableData";

const DashboardUserDetail = () => {
  const { id } = useParams();
  const data = tableData.find((item: any) => item.id === id);
  console.log(data);
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
        <div>
          <div>
            <img src={Avatar} alt="user_prifile" />
            <div>
              <h2></h2>
            </div>
          </div>
        </div>
        <div className={style.tabCon}></div>
      </div>
    </div>
  );
};

export default DashboardUserDetail;
