import React from 'react';
import { FriendStyled, NameStyled, OnlineIcon } from './FriendListItem.styled';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendStyled className="item">
      <OnlineIcon isOnline={isOnline}></OnlineIcon>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <NameStyled>{name}</NameStyled>
    </FriendStyled>
  );
};

export default FriendListItem;
