import React, { FC } from 'react';
import Typography from '@material-ui/core/Typography';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import { Team } from '../../types/common/models';

interface Props {
  teamA: Team;
  teamB: Team;
  seperator: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    team: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
      display: 'inline',
    },
    seperator: {
      backgroundColor: 'black',
      color: 'white',
      fontWeight: 'bold',
      display: 'inline',
      margin: '0 0.5em',
    },
  })
);

const MatchHeader: FC<Props> = ({ teamA, teamB, seperator }) => {
  const classes = useStyles();

  return (
    <>
      <Typography className={classes.team}>{teamA.name}</Typography>
      <Typography className={classes.seperator}>{seperator}</Typography>
      <Typography className={classes.team}>{teamB.name}</Typography>
    </>
  );
};

export default MatchHeader;
