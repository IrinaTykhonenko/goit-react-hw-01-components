import React from "react";
import propTypes from "prop-types";

const Statistics = ({ title, stats }) => (
  <section class="statistics">
    <h2 class="title">{title}</h2>
    <ul>
      {stats.map(({ id, label, percentage }) => (
        <li key={id} class="item">
          <span class="label">{label}</span>
          <span class="percentage">{percentage}</span>
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
