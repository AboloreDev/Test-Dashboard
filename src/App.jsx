import React from "react";
import { Route, Routes } from "react-router-dom";
import DashboardLayout from "./Layouts/DashboardLayouts";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="font-sans">
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
