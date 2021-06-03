import React from "react";
import PropTypes from "prop-types";
import styles from "./Profile.module.css";

const Profile = ({ name, tag, location, avatar, stats }) => {
  return (
    <div className={styles.container}>
      <div className={styles.description}>
        <img src={avatar} alt="Аватар пользователя" className={styles.avatar} />
        <p>{name}</p>
        <p>{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={styles.stats}>
        <li className={styles.stat}>
          <span className={styles.label}>Followers</span>
          <span> {stats.followers}</span>
        </li>
        <li className={styles.stat}>
          <span className={styles.label}>Views</span>
          <span> {stats.views}</span>
        </li>
        <li className={styles.stat}>
          <span className={styles.label}>Likes</span>
          <span> {stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};

export default Profile;
