import { BriefCaseIcon, HomeIcon, selectIcon } from "../../../assets";
import style from "../../../styles/dashoboard.module.scss";
import { NavLink } from "react-router-dom";
import { customersLink } from "../../../utils/sidebarLinks";

const DashboardSidebar = () => {
  return (
    <div className={style.sidebarCon}>
      <div className={style.switchLink}>
        <div className={style.link}>
          <img src={BriefCaseIcon} alt="/" />
          <span>Switch Organization</span>
          <img src={selectIcon} alt="/" />
        </div>
        <NavLink to="/dashboard/home" className={`${style.link} sidebar`}>
          <img src={HomeIcon} alt="/" />
          <span>Dashboard</span>
        </NavLink>
      </div>
      <div className={style.links}>
        <h2>CUSTOMERS</h2>
        {customersLink.map((item, i) => (
          <NavLink to={item.to} key={i} className={`${style.link} sidebar`}>
            <img src={item.img} alt="/" />
            <span>{item.text}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default DashboardSidebar;
