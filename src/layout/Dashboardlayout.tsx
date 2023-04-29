import { DashboardHeader, DashboardSidebar } from "../components";
import { Outlet } from "react-router-dom";
import style from "../styles/layout.module.scss";
import { useState } from "react";

const Dashboardlayout = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <main className={style.mainWrapper}>
      <DashboardHeader show={showNav} setShow={setShowNav} />
      <div className={style.wrapperContent}>
        <div className={style.sidebar}>
          <DashboardSidebar show={showNav} setShow={setShowNav} />
        </div>
        <div className={style.outlet}>
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default Dashboardlayout;
