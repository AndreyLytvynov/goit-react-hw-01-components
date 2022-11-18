import React from 'react';
import FriendListItem from './FriendListItem';

const FriendList = ({ friends }) => {
  return (
    <ul>
      {friends.map(el => {
        return (
          <FriendListItem
            key={el.id}
            avatar={el.avatar}
            name={el.name}
            isOnline={el.isOnline}
          />
        );
      })}
    </ul>
  );
};

export default FriendList;
