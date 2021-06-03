import React from "react";
import propTypes from "prop-types";

const FriendListItem = ({ avatar, name, isOnline }) => (
  <div>
    <span class="status">{isOnline}</span>
    <img class="avatar" src={avatar} alt={name} width="48" />
    <p class="name">{name}</p>
  </div>
);

FriendListItem.propTypes = {
  avatar: propTypes.string,
  name: propTypes.string.isRequired,
  isOnline: propTypes.bool.isRequired,
};

export default FriendListItem;
