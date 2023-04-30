import { useState } from "react";
import style from "../../styles/dashoboard.module.scss";
import { Avatar, BackIcon } from "../../assets";
import { Link, useParams } from "react-router-dom";
import { Button } from "../../components";
import { IoStar } from "react-icons/io5";
import { IoIosStarOutline } from "react-icons/io";
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
            <img
              src={data.profile.avatar ? data.profile.avatar : Avatar}
              alt="user_prifile"
            />
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
            <p>
              {data.profile.bvn}/{data.orgName}
            </p>
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
            <div className={style.data}>
              <h5>full Name</h5>
              <h3>
                {data.profile.firstName} {data.profile.lastName}
              </h3>
            </div>
            <div className={style.data}>
              <h5>Phone Number</h5>
              <h3>{data.profile.phoneNumber}</h3>
            </div>
            <div className={style.data}>
              <h5>Email Address</h5>
              <h3>{data.email}</h3>
            </div>
            <div className={style.data}>
              <h5>Bvn</h5>
              <h3>{data.profile.bvn}</h3>
            </div>
            <div className={style.data}>
              <h5>Gender</h5>
              <h3>{data.profile.gender}</h3>
            </div>
            <div className={style.data}>
              <h5>Martial status</h5>
              <h3>Single</h3>
            </div>
            <div className={style.data}>
              <h5>Children</h5>
              <h3>None</h3>
            </div>
            <div className={style.data}>
              <h5>Type of residence</h5>
              <h3>{data.profile.address}</h3>
            </div>
          </div>
        </div>
        <div className={style.personsDetail}>
          <h3>Education and Employment</h3>
          <div className={`${style.dataContent} col-4`}>
            <div className={style.data}>
              <h5>level of education</h5>
              <h3>{data.education.level}</h3>
            </div>
            <div className={style.data}>
              <h5>employment status</h5>
              <h3>{data.education.employmentStatus}</h3>
            </div>
            <div className={style.data}>
              <h5>sector of employment</h5>
              <h3>{data.education.sector}</h3>
            </div>
            <div className={style.data}>
              <h5>Duration of employment</h5>
              <h3>{data.education.duration}</h3>
            </div>
            <div className={style.data}>
              <h5>office email</h5>
              <h3>{data.education.officeEmail}</h3>
            </div>
            <div className={style.data}>
              <h5>Monthly income</h5>
              <h3>
                {data.profile.currency}
                {data.education.monthlyIncome[1]} - {data.profile.currency}
                {data.education.monthlyIncome[0]}
              </h3>
            </div>
            <div className={style.data}>
              <h5>loan repayment</h5>
              <h3>{data.education.loanRepayment}</h3>
            </div>
          </div>
        </div>
        <div className={style.personsDetail}>
          <h3>Socials</h3>
          <div className={style.dataContent}>
            <div className={style.data}>
              <h5>Twitter</h5>
              <h3>{data.socials.twitter}</h3>
            </div>
            <div className={style.data}>
              <h5>Facebook</h5>
              <h3>{data.socials.facebook}</h3>
            </div>
            <div className={style.data}>
              <h5>Instagram</h5>
              <h3>{data.socials.instagram}</h3>
            </div>
          </div>
        </div>
        <div className={style.personsDetail}>
          <h3>Guarantor</h3>
          <div className={style.dataContent}>
            <div className={style.data}>
              <h5>full Name</h5>
              <h3>
                {data.guarantor.firstName} {data.guarantor.lastName}
              </h3>
            </div>
            <div className={style.data}>
              <h5>Phone Number</h5>
              <h3>{data.guarantor.phoneNumber}</h3>
            </div>
            <div className={style.data}>
              <h5>Email Address</h5>
              <h3>{data.guarantor.address}</h3>
            </div>
            <div className={style.data}>
              <h5>Relationship</h5>
              <h3>{data.guarantor.gender}</h3>
            </div>
          </div>
        </div>
        <div className={style.personsDetail}>
          <div className={`${style.dataContent} bnone`}>
            <div className={style.data}>
              <h5>full Name</h5>
              <h3>
                {data.guarantor.firstName} {data.guarantor.lastName}
              </h3>
            </div>
            <div className={style.data}>
              <h5>Phone Number</h5>
              <h3>{data.guarantor.phoneNumber}</h3>
            </div>
            <div className={style.data}>
              <h5>Email Address</h5>
              <h3>{data.guarantor.address}</h3>
            </div>
            <div className={style.data}>
              <h5>Relationship</h5>
              <h3>{data.guarantor.gender}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardUserDetail;
