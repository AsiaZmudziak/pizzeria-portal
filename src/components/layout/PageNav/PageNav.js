import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './PageNav.module.scss';

import Button from '@material-ui/core/Button';

const PageNav = () => (
  <nav>
    <Button className={styles.link} component={NavLink} exact to={`${process.env.PUBLIC_URL}/`} activeClassName='active'>
      Dashboard
    </Button>
    <Button className={styles.link} component={NavLink} to={`${process.env.PUBLIC_URL}/login`} activeClassName='active'>
      Login
    </Button>
    <Button className={styles.link} component={NavLink} to={`${process.env.PUBLIC_URL}/tables`} activeClassName='active'>
      Tables
    </Button>
    <Button className={styles.link} component={NavLink} to={`${process.env.PUBLIC_URL}/waiter`} activeClassName='active'>
      Waiter
    </Button>
    <Button className={styles.link} component={NavLink} to={`${process.env.PUBLIC_URL}/kitchen`} activeClassName='active'>
      Kitchen
    </Button>
  </nav>
);

export default PageNav;
