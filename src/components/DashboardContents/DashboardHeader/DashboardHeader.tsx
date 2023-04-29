import style from "../../../styles/dashoboard.module.scss";
import { Logo, UserProfile, dropdownIcon, notifyIcon } from "../../../assets";
import { CustomizeInput } from "../..";
import { GrSearch } from "react-icons/gr";
import { Link } from "react-router-dom";

const DashboardHeader = () => {
  return (
    <header className={style.header}>
      <div className={style.logoArea}>
        <div className={style.logo}>
          <img src={Logo} alt="lendsqr_logo" />
        </div>
        <div className={style.searchCon}>
          <CustomizeInput type="text" placeholder="Search for anything" />
          <span>
            <GrSearch />
          </span>
        </div>
      </div>
      <div className={style.dropDownArea}>
        <Link to="/dashboard">Docs</Link>
        <img src={notifyIcon} alt="/" />
        <div className={style.userDrop}>
          <img src={UserProfile} alt="profile_image" className={style.user} />
          <span>Adedeji</span>
          <img src={dropdownIcon} alt="/" className={style.drop} />
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
