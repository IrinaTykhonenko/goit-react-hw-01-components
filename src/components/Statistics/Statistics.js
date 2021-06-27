import React from "react";
import propTypes from "prop-types";
import styles from "./Statistics.module.css";

const Statistics = ({ stats, title }) => (
  <section className={styles.container}>
    {title && <h2 className={styles.title}>{title}</h2>}
    <ul className={styles.list}>
      {stats.map(({ id, label, percentage }) => (
        <li key={id}>
          <span className={styles.label}>{label}</span>
          <span className={styles.percentage}>{percentage}</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.propTypes = {
  title: propTypes.string,
  stats: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      label: propTypes.string.isRequired,
      percentage: propTypes.number.isRequired,
    })
  ),
};

export default Statistics;
