import React, { useMemo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useAsync } from 'react-use';

import { getMatchesByTeams } from './api';
import {
  compareTeams,
  getDraws,
  getLosses,
  getPoints,
  getTickets,
  getWins,
} from './utils/scoreboard';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const Scoreboard = () => {
  const classes = useStyles();

  const { value = [] } = useAsync(getMatchesByTeams, []);
  const sortedTeams = useMemo(() => value.sort(compareTeams), [value]);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Team</TableCell>
            <TableCell align="right">MP</TableCell>
            <TableCell align="right">Win</TableCell>
            <TableCell align="right">Draw</TableCell>
            <TableCell align="right">Loss</TableCell>
            <TableCell align="right">Tickets</TableCell>
            <TableCell align="right">Points</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedTeams.map((team) => (
            <TableRow key={team.name}>
              <TableCell component="th" scope="row">
                {team.name}
              </TableCell>
              <TableCell align="right">{team.matches.length}</TableCell>
              <TableCell align="right">{getWins(team)}</TableCell>
              <TableCell align="right">{getDraws(team)}</TableCell>
              <TableCell align="right">{getLosses(team)}</TableCell>
              <TableCell align="right">{getTickets(team)}</TableCell>
              <TableCell align="right">{getPoints(team)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Scoreboard;
