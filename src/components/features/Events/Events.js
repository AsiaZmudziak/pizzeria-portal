import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from '../../common/Title/Title';

// Generate Event Data
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
    'George Orwell',
    '4',
    '14:00',
    'MC ⠀•••• 0385',
    832.25
  ),
  createData(
    1,
    '18 Apr, 2021',
    'Sigrid Nunez',
    '1',
    '16:00',
    'VISA ⠀•••• 2647',
    267.56
  ),
  createData(
    2,
    '18 Apr, 2021',
    'Sylvia Plath',
    '1',
    '14:30',
    'VISA ⠀•••• 1239',
    125.65
  ),
  createData(
    3,
    '18 Apr, 2021',
    'Charles Bukowski',
    '5',
    '14:30',
    'VISA ⠀•••• 2547',
    258.14
  ),
  createData(
    4,
    '18 Apr, 2021',
    'Ernest Hemingway',
    '2',
    '19:30',
    'VISA ⠀•••• 2394',
    567.14
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

export default function Events() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Events</Title>
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
          See more events
        </Link>
      </div>
    </React.Fragment>
  );
}
