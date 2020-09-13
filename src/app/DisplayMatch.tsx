import React, { FC } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import { Avatar } from '@material-ui/core';
import Card from '@material-ui/core/Card';

import { Match, MatchStatus } from '../types/common/models';

import { getStartTime, getTotalTickets } from './utils/schedule';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    accordion: {
      width: '100%',
    },
    card: {
      width: '100%',
      padding: theme.spacing(2),
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
    mapCell: {
      display: 'flex',
      alignItems: 'center',
    },
    mapIcon: {
      width: theme.spacing(7),
      height: theme.spacing(7),
      marginRight: theme.spacing(1),
    },
  })
);

interface Props {
  match: Match;
}

const Match: FC<Props> = ({ match }) => {
  const classes = useStyles();

  if (match.status === MatchStatus.Open) {
    return (
      <Card className={classes.card}>
        <Typography className={classes.heading}>
          {`${match.team_a.name} ${getStartTime(match.match_time)} ${
            match.team_b.name
          }`}
        </Typography>
      </Card>
    );
  }
  return (
    <Accordion className={classes.accordion}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography className={classes.heading}>
          {`${match.team_a.name} ${getTotalTickets(
            'a',
            match.maps
          )} - ${getTotalTickets('b', match.maps)} ${match.team_b.name}`}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Map</TableCell>
              <TableCell>Round 1</TableCell>
              <TableCell>Round 2</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {match.maps.map((matchMap) => (
              <TableRow key={matchMap.map.name}>
                <TableCell className={classes.mapCell}>
                  <Avatar
                    alt={matchMap.map.name}
                    src={matchMap.map.image}
                    className={classes.mapIcon}
                  />
                  <Typography>{matchMap.map.name}</Typography>
                </TableCell>
                <TableCell>{`${matchMap.score_a.round_1} - ${matchMap.score_b.round_1}`}</TableCell>
                <TableCell>{`${matchMap.score_a.round_2} - ${matchMap.score_b.round_2}`}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </AccordionDetails>
    </Accordion>
  );
};

export default Match;
