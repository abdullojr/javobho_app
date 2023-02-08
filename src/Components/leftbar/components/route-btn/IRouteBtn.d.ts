import IIcon from "Components/icon/icon";

declare namespace IRouteBtn {
  interface navProps {
    name: string;
    path: string;
    icon: IIcon.name;
    activeIcon: IIcon.name;
  }

  interface props {
    text: string;
    icon: IIcon.name;
  }
}

export default IRouteBtn;
