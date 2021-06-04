import React from "react";
import propTypes from "prop-types";
import styles from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => (
  <div>
    <span className={styles.status}>
      {isOnline ? (
        <div className={styles.isOnline}></div>
      ) : (
        <div className={styles.isOffline}></div>
      )}
    </span>
    <img src={avatar} alt={name} width="38" />
    <p>{name}</p>
  </div>
);

FriendListItem.propTypes = {
  avatar: propTypes.string,
  name: propTypes.string.isRequired,
  isOnline: propTypes.bool.isRequired,
};

export default FriendListItem;
