import "./styles.scss";
import logo from "../../assets/img/logo.png";

const AppHeader = () => {
  return (
    <div className="header">
      <img src={logo} alt="logo" width={15} />
    </div>
  );
};

export default AppHeader;
