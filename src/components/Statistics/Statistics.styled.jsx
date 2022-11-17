import styled from 'styled-components';

export const StatisticStyled = styled.section`
  margin: 0 auto;
  min-width: 270px;
  max-width: 270px;
  background-color: rgb(248, 248, 248);
  overflow: hidden;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 0px 0px 4px 4px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const StatisticList = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  background-color: #ccc;
  list-style-type: none;
`;

export const TitleStatistic = styled.h2`
  text-align: center;
  font-size: 30px;
  font-weight: 700;
`;

export const TitleData = styled.li`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: white;
`;
