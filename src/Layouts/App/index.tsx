import React from "react";
import AppHeader from "Components/header";
import AppFooter from "Components/footer";
import FixedButton from "Components/fixed-button";
import { Outlet } from "react-router-dom";
import "./styles.scss";

const AppLayout = () => {
  return (
    <div>
      <AppHeader />
      <div className="app-outlet">
        <Outlet />
      </div>
      <AppFooter />
      <FixedButton />
    </div>
  );
};

export default AppLayout;
