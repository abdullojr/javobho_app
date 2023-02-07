import IIcon from "../icon/icon";

declare namespace IFooter {
  interface nav {
    name: string;
    path: string;
    icon: IIcon.name;
    activeIcon: IIcon.name;
  }
}

export default IFooter;
