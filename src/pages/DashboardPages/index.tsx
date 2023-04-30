import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import DashboardUser from "./DashboardUser";
import DashboardUserDetail from "./DashboardUserDetail";

const index = () => {
  return (
    <Routes>
      <Route path="/home" element={<Dashboard />} />
      <Route path="/users" element={<DashboardUser />} />
      <Route path="/users/:id" element={<DashboardUserDetail />} />
    </Routes>
  );
};

export default index;
