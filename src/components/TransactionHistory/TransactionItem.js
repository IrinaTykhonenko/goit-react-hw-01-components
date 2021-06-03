import React, { Fragment } from "react";
import propTypes from "prop-types";

const TransactionItem = ({ type, amount, currency }) => (
  <Fragment>
    <td>{type}</td>
    <td>{amount}</td>
    <td>{currency}</td>
  </Fragment>
);

TransactionItem.propTypes = {
  type: propTypes.string.isRequired,
  amount: propTypes.string.isRequired,
  currency: propTypes.string.isRequired,
};

export default TransactionItem;
