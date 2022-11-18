import styled from 'styled-components';

export const FriendStyled = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 0px 0px 4px 4px;
  width: 250px;
  padding: 10px;

  margin: 0 auto;
  margin-top: 10px;

  .avatar {
    margin-left: 10px;
    background-color: #ebebeb;
    border-radius: 10px;
  }
`;

export const NameStyled = styled.span`
  font-size: 25px;
  font-weight: 500;
  margin-left: 10px;
`;

export const OnlineIcon = styled.span`
  width: 20px;
  height: 20px;
  background-color: ${props => (props.isOnline ? '#4de852' : '#f02913')};
  border-radius: 50%;
`;
