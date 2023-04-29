import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboardlayout from "./layout/Dashboardlayout";
import DashboardPages from './pages/DashboardPages'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route element={<Dashboardlayout />}>
        <Route
          path="/dashboard/*"
          element={<DashboardPages />}
        />
      </Route>
    </Routes>
  );
};

export default App;
