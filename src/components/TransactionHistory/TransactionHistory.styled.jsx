import styled from 'styled-components';

export const TableHeadStyled = styled.thead`
  background-color: #9dd4e1;
  & th {
    color: white;
    width: calc(100% / 3);
    padding: 10px;
    &:nth-child(-2n + 2) {
      border-left: 1px solid #c5ebf4;
      border-right: 1px solid #c5ebf4;
    }
  }
`;

export const TableBodyStyled = styled.tbody`
  & tr:nth-child(2n) {
    background-color: #d6f0f5;
  }
  & td {
    color: #8eb8c0;
    width: calc(100% / 3);
  }
`;
