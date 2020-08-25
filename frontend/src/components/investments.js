import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const GATEWAY_INVESTORS_URL = 'http://localhost:9001/investors'

const Investments = ({investors}) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">First Name</TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell align="right">Currency</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {investors.map(investor => (
              <TableRow>
                <TableCell>{investor.id}</TableCell>
            <TableCell>{investor.first_name}</TableCell>
            <TableCell>{investor.last_name}</TableCell>
            <TableCell><ul>{investor.investments.map(i => (
              <li>{i.amount}</li>
            ))}</ul></TableCell>
            <TableCell><ul>{investor.investments.map(i => (
              <li>{i.currency}</li>
            ))}</ul></TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Investments