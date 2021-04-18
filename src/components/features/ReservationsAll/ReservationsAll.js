import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from '../../common/Title/Title';

const useStyles = makeStyles({
  context: {
    flex: 1,
  },
});

export default function ReservationsAll() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>All reservations today</Title>
      <Typography component='p' variant='h3'>
        12
      </Typography>
      <Typography color='textSecondary' className={classes.context}>
        on 18 Apr, 2021
      </Typography>
    </React.Fragment>
  );
}
