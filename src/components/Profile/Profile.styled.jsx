import styled from 'styled-components';

export const StatsItemStyled = styled.section`
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: calc(100% / 3);
  background-color: #cadae8;
  &:nth-child(-n + 2) {
    border-right: 1px solid rgba(255, 255, 255, 0.5);
  }
`;
export const NameStyled = styled.p`
  font-size: 20px;
  font-weight: 700;
  margin: 10px 12px;
`;

export const TagStyled = styled.p`
  color: rgb(165, 159, 159);
  margin-bottom: 8px;
`;

export const QuantityStyled = styled.span`
  font-size: 16px;
  font-weight: 700;
  color: rgb(33, 26, 68);
`;
export const AvatarStyled = styled.img`
  border-radius: 50%;
`;
