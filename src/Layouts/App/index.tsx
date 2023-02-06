import React from "react";
import AppHeader from "Components/header";
import AppFooter from "Components/footer";
import FixedButton from "Components/fixed-button";

const AppLayout = () => {
  return (
    <div>
      <AppHeader />
      {/* <Outlet /> */}
      <AppFooter />
      <FixedButton />
    </div>
  );
};

export default AppLayout;
