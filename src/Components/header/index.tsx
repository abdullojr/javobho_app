import "./styles.scss";
import logo from "assets/img/logo.png";
import profile from "assets/img/profile.png";

const AppHeader = () => {
  return (
    <div className="header">
      <img
        src={profile}
        alt="profile_img"
        width={32}
        className="profile_image"
      />
      <img src={logo} alt="logo" width={15} />
      <div />
    </div>
  );
};

export default AppHeader;
