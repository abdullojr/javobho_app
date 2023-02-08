import LeftBar from "Components/leftbar";
import React from "react";
import "./styles.scss";
import logo from "assets/img/logo.png";
import profile from "assets/img/profile.png";

const AppHeader = () => {
  const [open, setOpen] = React.useState<boolean>(false);

  React.useEffect(() => {}, []);

  return (
    <div className="header">
      <LeftBar isActive={open} state={setOpen} />
      <img
        src={profile}
        alt="profile_img"
        width={32}
        className="profile_image"
        onClick={() => setOpen(true)}
      />
      <img src={logo} alt="logo" width={15} />
      <div />
    </div>
  );
};

export default AppHeader;
