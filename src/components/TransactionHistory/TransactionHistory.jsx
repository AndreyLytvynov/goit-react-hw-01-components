import React from 'react';
import { Box } from 'components/Box';
import { TableHeadStyled, TableBodyStyled } from './TransactionHistory.styled';

const TransactionHistory = ({ items }) => {
  return (
    <Box
      as="table"
      mx="auto"
      mt="20px"
      width="70%"
      display="flex"
      flexDirection="column"
      borderRadius="normal"
      overflow="hidden"
    >
      <TableHeadStyled>
        <Box
          as="tr"
          textAlign="center"
          display="flex"
          justifyContent="space-between"
        >
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </Box>
      </TableHeadStyled>

      <TableBodyStyled>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <Box
              as="tr"
              textAlign="center"
              display="flex"
              p="10px"
              justifyContent="space-between"
              key={id}
            >
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </Box>
          );
        })}
      </TableBodyStyled>
    </Box>
  );
};

export default TransactionHistory;
