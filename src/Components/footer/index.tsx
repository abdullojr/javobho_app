import { NavLink } from "react-router-dom";
import Icon from "../icon";
import IFooter from "./IFooter";
import "./styles.scss";
import { apiPaths } from "api/constants/api-paths";

const nav: IFooter.nav[] = [
  { name: "Home", path: "/", icon: "home", activeIcon: "homeFilled" },
  {
    name: "Explore",
    path: apiPaths.application.explore,
    icon: "explore",
    activeIcon: "exploreFilled",
  },
  {
    name: "Notifications",
    path: apiPaths.application.notifications,
    icon: "note",
    activeIcon: "noteFilled",
  },
  {
    name: "Messages",
    path: apiPaths.application.messages,
    icon: "message",
    activeIcon: "messageFilled",
  },
];

const Footer = () => {
  return (
    <div className="footer">
      {nav.map(item => (
        <NavLink end draggable={false} key={item.path} to={item.path}>
          {({ isActive }) => (
            <div className="color_main">
              <Icon name={isActive ? item.activeIcon : item.icon} />
            </div>
          )}
        </NavLink>
      ))}
    </div>
  );
};

export default Footer;
