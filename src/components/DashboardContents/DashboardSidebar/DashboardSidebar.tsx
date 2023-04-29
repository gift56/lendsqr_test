import { BriefCaseIcon, HomeIcon, selectIcon } from "../../../assets";
import style from "../../../styles/dashoboard.module.scss";
import { NavLink } from "react-router-dom";
import {
  businessLink,
  customersLink,
  settingsLink,
} from "../../../utils/sidebarLinks";

interface IProp {
  linkData: any;
  text: string;
  className: any;
}

const DashboardSidebar = ({ show, setShow }: any) => {
  const ServicesLinks = ({ linkData, text, className }: IProp) => (
    <div className={`${style.links} ${className}`}>
      <h2>{text}</h2>
      {linkData.map((item: any, i: any) => (
        <NavLink
          onClick={() => setShow(false)}
          to={item.to}
          key={i}
          className={`${style.link} sidebar`}
        >
          <img src={item.img} alt="/" />
          <span>{item.text}</span>
        </NavLink>
      ))}
    </div>
  );

  return (
    <div
      className={`${
        show ? `${style.sidebarCon} ${style.show}` : `${style.sidebarCon}`
      }`}
    >
      <div className={style.switchLink}>
        <div className={style.link}>
          <img src={BriefCaseIcon} alt="/" />
          <span>Switch Organization</span>
          <img src={selectIcon} alt="/" />
        </div>
        <NavLink
          onClick={() => setShow(false)}
          to="/dashboard/home"
          className={`${style.link} sidebar`}
        >
          <img src={HomeIcon} alt="/" />
          <span>Dashboard</span>
        </NavLink>
      </div>
      <ServicesLinks linkData={customersLink} text="CUSTOMERS" className="" />
      <ServicesLinks linkData={businessLink} text="BUSINESSES" className="" />
      <ServicesLinks
        linkData={settingsLink}
        text="SETTINGS"
        className={style.settings}
      />
    </div>
  );
};

export default DashboardSidebar;
