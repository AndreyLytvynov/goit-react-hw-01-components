import React from 'react';
import { getRandomHexColor } from 'utils/randomColor';
import {
  StatisticStyled,
  StatisticList,
  TitleStatistic,
  TitleData,
} from './Statistics.styled';

const Statistics = ({ title, stats }) => {
  return (
    <StatisticStyled>
      {title && <TitleStatistic>{title}</TitleStatistic>}
      <StatisticList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <TitleData
              key={id}
              style={{ backgroundColor: getRandomHexColor() }}
            >
              <span className="label">{label}</span>
              <span className="percentage">{percentage}</span>
            </TitleData>
          );
        })}
      </StatisticList>
    </StatisticStyled>
  );
};

export default Statistics;
