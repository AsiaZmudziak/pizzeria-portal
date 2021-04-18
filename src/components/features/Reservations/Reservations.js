import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from '../../common/Title/Title';

// Generate Order Data
function createData(
  id,
  date,
  name,
  table,
  hour,
  paymentMethod,
  amount
) {
  return { id, date, name, table, hour, paymentMethod, amount };
}

const rows = [
  createData(
    0,
    '18 Apr, 2021',
    'Joaquin Phoenix',
    '6',
    '12:00',
    'MC ⠀•••• 2394',
    259.325
  ),
  createData(
    1,
    '18 Apr, 2021',
    'Jack Nicholson',
    '3',
    '12:00',
    'VISA ⠀•••• 2147',
    215.32
  ),
  createData(
    2,
    '18 Apr, 2021',
    'Al Pacino',
    '5',
    '13:00',
    'MC ⠀•••• 23697',
    428.15
  ),
  createData(
    3,
    '18 Apr, 2021',
    'Alan Rickmans',
    '2',
    '15:00',
    'MC ⠀•••• 1254',
    458.14
  ),
  createData(
    4,
    '18 Apr, 2021',
    'Clint Eastwood',
    '3',
    '15:00',
    'VISA ⠀•••• 2369',
    53.23
  ),
  createData(
    5,
    '18 Apr, 2021',
    'Robert Downey Jr.',
    '1',
    '15:30',
    'VISA ⠀•••• 2264',
    853.56
  ),
  createData(
    6,
    '18 Apr, 2021',
    'Tom Hanks',
    '4',
    '16:00',
    'VISA ⠀•••• 2394',
    101.21
  ),
  createData(
    7,
    '18 Apr, 2021',
    'Anthony Hopkins',
    '6',
    '16:30',
    'MC ⠀•••• 3478',
    768.45
  ),
  createData(
    8,
    '18 Apr, 2021',
    'Christoph Waltz',
    '2',
    '18:00',
    'VISA ⠀•••• 3456',
    213.56
  ),
  createData(
    9,
    '18 Apr, 2021',
    'Joe Pesci',
    '4',
    '21:00',
    'VISA ⠀•••• 3456',
    875.65
  ),
  createData(
    10,
    '18 Apr, 2021',
    'Kevin Spacey',
    '3',
    '21:30',
    'VISA ⠀•••• 8943',
    923.00
  ),
  createData(
    10,
    '18 Apr, 2021',
    'Sonic',
    '1',
    '22:30',
    'VISA ⠀•••• 239',
    659.00
  ),

];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Reservations() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Reservations</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Table No.</TableCell>
            <TableCell>Hour</TableCell>
            <TableCell>Payment Method</TableCell>
            <TableCell align="right">Sale Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.table}</TableCell>
              <TableCell>{row.hour}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more reservations
        </Link>
      </div>
    </React.Fragment>
  );
}
