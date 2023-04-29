import { DashboardHeader, DashboardSidebar } from "../components";
import { Outlet } from "react-router-dom";
import style from "../styles/layout.module.scss";

const Dashboardlayout = () => {
  return (
    <main className={style.mainWrapper}>
      <DashboardHeader />
      <div className={style.wrapperContent}>
        <div className={style.sidebar}>
          <DashboardSidebar />
        </div>
        <div className={style.outlet}>
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default Dashboardlayout;
