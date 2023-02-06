import Icon from "../icon";
import "./styles.scss";

const Footer = () => {
  return (
    <div className="footer">
      {true ? (
        <Icon name="home" size={18} />
      ) : (
        <Icon name="homeFilled" size={18} />
      )}
      {true ? (
        <Icon name="explore" size={18} />
      ) : (
        <Icon name="exploreFilled" size={18} />
      )}
      <Icon name="home" size={18} />
      {true ? (
        <Icon name="profile" size={18} />
      ) : (
        <Icon name="profileFilled" size={18} />
      )}
    </div>
  );
};

export default Footer;
