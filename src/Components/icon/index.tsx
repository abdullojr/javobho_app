import React from "react";
import IIcon from "./icon";
import list from "./svg-list";

const Icon: React.FC<IIcon.props> = React.memo(
  ({ size = 24, name, className, onClick }): JSX.Element => (
    <i className={className} onClick={onClick}>
      <svg
        className={className}
        viewBox="0 0 24 24"
        style={{ width: size + "px", height: size + "px" }}
        fill="currentColor"
      >
        {list[name]}
      </svg>
    </i>
  ),
  (prevProps, nextProps) =>
    prevProps.name === nextProps.name && prevProps.size === nextProps.size
);

export default Icon;
