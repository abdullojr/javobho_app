import React from "react";
import "./styles.scss";
import ILeftBar from "./LeftBar";
import Icon from "Components/icon";
import { NavLink } from "react-router-dom";
import { NavBtn } from "./components/route-btn";
import IRouteBtn from "./components/route-btn/IRouteBtn";
import img from "assets/img/profile.png";

const LeftBar = (props: ILeftBar.props) => {
  const nav: IRouteBtn.navProps[] = [
    {
      name: "Profile",
      path: "/profile",
      icon: "profile",
      activeIcon: "profileFilled",
    },
    {
      name: "Topics",
      path: "",
      icon: "topics",
      activeIcon: "topics",
    },
    {
      name: "Bookmarks",
      path: "",
      icon: "bookmarks",
      activeIcon: "bookmarksFilled",
    },
    {
      name: "Lists",
      path: "",
      icon: "lists",
      activeIcon: "listsFilled",
    },
    {
      name: "Bookshelf",
      path: "",
      icon: "lists",
      activeIcon: "listsFilled",
    },
  ];
  return (
    <>
      <div className={`container navigation ${props.isActive && "open"}`}>
        <div className="title">
          <span> Account info</span>
          <div className="close-btn" onClick={() => props.state(false)}>
            <Icon name="arrowLongLeft" />
          </div>
        </div>

        <div className={"account-full-info"}>
          <div>
            <img
              src={img}
              alt="profile_img"
              width={32}
              className="profile_img"
            />
          </div>
          <div className="username">
            <h3>Username</h3>
            <b>@{"username"}</b>
          </div>
          <div className="follow-info">
            <span>
              <b>{0}</b> <b className="simple_text">Following</b>
            </span>
            <span>
              <b>{0}</b> <b className="simple_text">Follower</b>
            </span>
          </div>
        </div>

        <div className="nav-routes">
          {nav.map(item => (
            <NavLink to={item.path} className={"link"}>
              <NavBtn text={item.name} icon={item.icon} />
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};

export default LeftBar;
