import React, { FC } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import Header from './Header';
import Scoreboard from './Scoreboard';

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
        <Scoreboard />
      </main>
    </>
  );
};

export default App;
