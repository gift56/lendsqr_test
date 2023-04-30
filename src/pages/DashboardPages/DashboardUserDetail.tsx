import { useState } from "react";
import style from "../../styles/dashoboard.module.scss";
import { Avatar, BackIcon } from "../../assets";
import { Link, useParams } from "react-router-dom";
import { Button } from "../../components";
import { IoStar } from "react-icons/io5";
import { IoIosStarOutline } from "react-icons/io";
import {
  educationData,
  gurantorData,
  personData,
  socialData,
} from "../../utils/userData";
import useUserStore from "../../store";
import { User } from "../../utils/types";

const DashboardUserDetail = () => {
  const { id } = useParams();
  const { allUsers } = useUserStore();
  const data: User | any = allUsers.find((item: any) => item.id === id);

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
    <div className={`${style.mainDashboard} ${style.userDetailCon}`}>
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
        <div className={style.topSide}>
          <div className={style.profile}>
            <img src={Avatar} alt="user_prifile" />
            <div>
              <h2>{data.userName}</h2>
              <p>{data.accountNumber}</p>
            </div>
          </div>
          <div className={style.tiers}>
            <h5>{`User’s Tier`}</h5>
            <div className={style.stars}>
              <span className={style.fill}>
                <IoStar />
              </span>
              <span className={style.fill}>
                <IoIosStarOutline />
              </span>
              <span className={style.fill}>
                <IoIosStarOutline />
              </span>
            </div>
          </div>
          <div className={style.amt}>
            <h2>{data.accountBalance}</h2>
            <p>{data?.phoneNumber}/{data.orgName}</p>
          </div>
        </div>
        <div className={style.tabCon}>
          {tabsItem.map((item: any, i: any) => (
            <p
              onClick={() => setTab(item.tabs)}
              key={i}
              className={`${style.singleTab} ${
                tab === item.tabs && `${style.activeTab}`
              }`}
            >
              {item.text}
            </p>
          ))}
        </div>
      </div>
      <div className={style.mainDetailsInfo}>
        <div className={style.personsDetail}>
          <h3>Personal Information</h3>
          <div className={style.dataContent}>
            {personData.map((item: any, i: any) => (
              <div key={i} className={style.data}>
                <h5>{item.title}</h5>
                <h3>{item.content}</h3>
              </div>
            ))}
          </div>
        </div>
        <div className={style.personsDetail}>
          <h3>Education and Employment</h3>
          <div className={`${style.dataContent} col-4`}>
            {educationData.map((item: any, i: any) => (
              <div key={i} className={style.data}>
                <h5>{item.title}</h5>
                <h3>{item.content}</h3>
              </div>
            ))}
          </div>
        </div>
        <div className={style.personsDetail}>
          <h3>Socials</h3>
          <div className={style.dataContent}>
            {socialData.map((item: any, i: any) => (
              <div key={i} className={style.data}>
                <h5>{item.title}</h5>
                <h3>{item.content}</h3>
              </div>
            ))}
          </div>
        </div>
        <div className={style.personsDetail}>
          <h3>Guarantor</h3>
          <div className={style.dataContent}>
            {gurantorData.map((item: any, i: any) => (
              <div key={i} className={style.data}>
                <h5>{item.title}</h5>
                <h3>{item.content}</h3>
              </div>
            ))}
          </div>
        </div>
        <div className={style.personsDetail}>
          <div className={`${style.dataContent} bnone`}>
            {gurantorData.map((item: any, i: any) => (
              <div key={i} className={style.data}>
                <h5>{item.title}</h5>
                <h3>{item.content}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardUserDetail;
