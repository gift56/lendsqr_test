import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import DashboardUser from "./DashboardUser";

const index = () => {
  return (
    <Routes>
      <Route path="/home" element={<Dashboard />} />
      <Route path="/users" element={<DashboardUser />} />
    </Routes>
  );
};

export default index;
