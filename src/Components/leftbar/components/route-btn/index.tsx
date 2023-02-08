import Icon from "Components/icon";
import styles from "./style.module.scss";

export const NavBtn = (props: any) => {
  return (
    <div
      className={styles.container}
      children={
        <div className={styles.children}>
          <Icon name={props.icon} size={30} />
          <span>{props.text}</span>
        </div>
      }
    />
  );
};
