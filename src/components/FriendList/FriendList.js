import React from "react";
import propTypes from "prop-types";
import FriendListItem from "./FriendListItem";

const FriendList = ({ friends }) => (
  <ul class="friend-list">
    {friends.map(({ avatar, name, isOnline, id }) => (
      <li key={id}>
        <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
      </li>
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
    })
  ),
};

export default FriendList;
