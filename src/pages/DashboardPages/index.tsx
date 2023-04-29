import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";

const index = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
};

export default index;