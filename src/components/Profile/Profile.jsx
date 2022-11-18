import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import {
  StatsItemStyled,
  NameStyled,
  TagStyled,
  QuantityStyled,
  AvatarStyled,
} from './Profile.styled';

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Box
      mx="auto"
      bg="rgb(248,248,248)"
      width="270px"
      mt="20px"
      pt="20px"
      borderRadius="normal"
      overflow="hidden"
    >
      <Box mx="auto" display="flex" flexDirection="column" alignItems="center">
        <AvatarStyled src={avatar} alt={username} width="100" />
        <NameStyled>{username}</NameStyled>
        <TagStyled>@{tag}</TagStyled>
        <TagStyled>{location}</TagStyled>
      </Box>

      <Box as="ul" display="flex" pt="20px" justifyContent="space-between">
        <StatsItemStyled>
          <span>Followers</span>
          <QuantityStyled>{stats.followers}</QuantityStyled>
        </StatsItemStyled>
        <StatsItemStyled>
          <span>Views</span>
          <QuantityStyled>{stats.views}</QuantityStyled>
        </StatsItemStyled>
        <StatsItemStyled>
          <span>Likes</span>
          <QuantityStyled>{stats.likes}</QuantityStyled>
        </StatsItemStyled>
      </Box>
    </Box>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
  }),
};

export default Profile;
