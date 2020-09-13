import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import { useAsync } from 'react-use';
import { SanityDocument } from '@sanity/client';

import { Match } from '../types/common/models';

import { getMatches } from './api';
import DisplayMatch from './DisplayMatch';

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

  const { value: matches = [] } = useAsync(getMatches, []);

  const matchDates: [string, SanityDocument<Match>[]][] = matches
    .map((match) => match.match_time.split('T')[0])
    .filter((date, i, dates) => dates.indexOf(date) === i)
    .sort()
    .map((date) => [date, []]);

  const matchMap = new Map(matchDates);
  matches.forEach((match) =>
    matchMap.get(match.match_time.split('T')[0])?.push(match)
  );

  console.log(matchMap);

  return (
    <List className={classes.root} subheader={<li />}>
      {[...matchMap.keys()].map((date) => (
        <li key={date} className={classes.listSection}>
          <ul className={classes.ul}>
            <ListSubheader>{date}</ListSubheader>
            {matchMap.get(date)?.map((match) => (
              <ListItem key={match._id}>
                <DisplayMatch match={match} />
              </ListItem>
            ))}
          </ul>
        </li>
      ))}
    </List>
  );
};

export default Schedule;
