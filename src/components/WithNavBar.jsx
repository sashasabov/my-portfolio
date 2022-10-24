import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const WithNavBar = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};

export default WithNavBar;
