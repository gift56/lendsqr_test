import { BriefCaseIcon, HomeIcon, selectIcon } from "../../../assets";
import style from "../../../styles/dashoboard.module.scss";
import { NavLink } from "react-router-dom";

const DashboardSidebar = () => {
  return (
    <div className={style.sidebarCon}>
      <div className={style.switchLink}>
        <div className={style.link}>
          <img src={BriefCaseIcon} alt="/" />
          <span>Switch Organization</span>
          <img src={selectIcon} alt="/" />
        </div>
        <NavLink to="/dashboard" className={`${style.link} sidebar`}>
          <img src={HomeIcon} alt="/" />
          <span>Dashboard</span>
        </NavLink>
      </div>
    </div>
  );
};

export default DashboardSidebar;
