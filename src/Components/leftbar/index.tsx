import React from "react";
import "./styles.scss";
import ILeftBar from "./LeftBar";
import Icon from "Components/icon";

const LeftBar = (props: ILeftBar.props) => {
  return (
    <>
      <div className={`container navigation ${props.isActive && "open"}`}>
        <div className="close-btn" onClick={() => props.state(false)}>
          <Icon name="arrowLongLeft" />
        </div>
      </div>
    </>
  );
};

export default LeftBar;
