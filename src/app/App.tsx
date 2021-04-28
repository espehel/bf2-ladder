import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import Header from './Header';
import Scoreboard from './Scoreboard';
import Schedule from './schedule/Schedule';
import Match from './match/Match';
import CreateMatch from './match/CreateMatch';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: {
      margin: theme.spacing(1),
    },
  })
);

const App: FC = () => {
  const styles = useStyles();
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Switch>
          <Route path="/match/:id">
            <Match />
          </Route>
          <Route path="/match/">
            <CreateMatch />
          </Route>
          <Route path="/">
            <Scoreboard />
            <Schedule />
          </Route>
        </Switch>
      </main>
    </>
  );
};

export default App;
