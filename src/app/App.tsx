import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  main: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  loginLink: {
    background: '#7289DA',
    padding: '0 20px',
    lineHeight: '35px',
    color: '#fff',
    fontFamily: 'Helvetica, Arial, sans-serif',
    fontSize: '20px',
    display: 'block',
    textDecoration: 'none',
    borderRadius: '3px',
  },
});

const App: FC = () => {
  const styles = useStyles();
  return (
    <main className={styles.main}>
      <h1>BF2 Ladder</h1>
      <a className={styles.loginLink} href="/api/discord/login">Login through discord</a>
    </main>
  );
};

export default App;
