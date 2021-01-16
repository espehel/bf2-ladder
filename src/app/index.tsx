import React from 'react';
import { render } from 'react-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router } from 'react-router-dom';

import './less/main.less';
import App from './App';

const rootElement = document.querySelector('#root');

const theme = createMuiTheme({
  palette: {
    primary: { main: '#6d99bb' },
    secondary: { main: '#a6413e' },
  },
  overrides: {
    MuiTypography: {
      h1: {
        fontSize: '50px',
      },
      h2: {
        fontSize: '35px',
      },
      h3: {
        fontSize: '25px',
      },
    },
  },
});

render(
  <ThemeProvider theme={theme}>
    <Router>
      <App />
    </Router>
  </ThemeProvider>,
  rootElement
);
