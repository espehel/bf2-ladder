import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import { useAsync } from 'react-use';

import { getMatches } from './api';
import Match from './Match';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
      position: 'relative',
      overflow: 'auto',
    },
    listSection: {
      backgroundColor: 'inherit',
    },
    ul: {
      backgroundColor: 'inherit',
      padding: 0,
    },
  })
);

const Schedule = () => {
  const classes = useStyles();

  const { value = [] } = useAsync(getMatches, []);

  console.log(value);

  const upcoming = value;
  const finished = value;
  const pending = value;

  return (
    <List className={classes.root} subheader={<li />}>
      <li key={`upcoming`} className={classes.listSection}>
        <ul className={classes.ul}>
          <ListSubheader>Upcoming</ListSubheader>
          {upcoming.map((match) => (
            <ListItem key={match._id}>
              <Match match={match} />
            </ListItem>
          ))}
        </ul>
      </li>
      <li key={`pending`} className={classes.listSection}>
        <ul className={classes.ul}>
          <ListSubheader>Pending</ListSubheader>
          {pending.map((match) => (
            <ListItem key={match._id}>
              <Match match={match} />
            </ListItem>
          ))}
        </ul>
      </li>
      <li key={`finished`} className={classes.listSection}>
        <ul className={classes.ul}>
          <ListSubheader>Finished</ListSubheader>
          {finished.map((match) => (
            <ListItem key={match._id}>
              <Match match={match} />
            </ListItem>
          ))}
        </ul>
      </li>
    </List>
  );
};

export default Schedule;
