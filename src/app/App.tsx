import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useAsync } from 'react-use';

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
  const state = useAsync(async () => {
    const response = await fetch('/api/sanity/teams');
    const result = await response.json();
    return result;
  }, []);
  const state1 = useAsync(async () => {
    const response = await fetch('/api/sanity/results');
    const result = await response.json();
    return result;
  }, []);
  console.log(state.value);
  console.log(state1.value);
  return (
    <main className={styles.main}>
      <h1>BF2 Ladder</h1>
      <a className={styles.loginLink} href="/api/discord/login">
        Login through discord
      </a>
    </main>
  );
};

export default App;
