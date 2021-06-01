import React from "react";
import propTypes from "prop-types";
import TransactionItem from "./TransactionItem";

const TransactionHistory = ({ items }) => (
  <table class="transaction-history">
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    <tbody>
      {items.map(({ id, type, amount, currency }) => (
        <tr key={id}>
          <TransactionItem
            id={id}
            type={type}
            amount={amount}
            currency={currency}
          />
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionItem.propTypes = {
  items: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
    })
  ),
};

export default TransactionHistory;
