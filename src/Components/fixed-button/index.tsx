import React from "react";
import "./style.scss";
import Icon from "Components/icon";

const FixedButton = () => {
  return (
    <div
      className="root"
      children={<i children={<Icon name="plus" size={25} />} />}
    />
  );
};

export default FixedButton;
