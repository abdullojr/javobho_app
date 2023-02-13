import React from "react";
import styles from "./styles.module.scss";
import profile_placeholder from "assets/img/profile.png";

const Tweet = () => {
  return (
    <div className={styles.container}>
      <img
        className={styles.userProfileImage}
        alt="profile_image"
        src={profile_placeholder}
      />
      <div className={styles.content}>
        <div>
          {/* Here should be both the username and three dots function */}
        </div>
      </div>
    </div>
  );
};

export default Tweet;
