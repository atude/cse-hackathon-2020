import React from 'react';
import styled from 'styled-components';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import VolunteerDashboard from './VolunteerDashboard';
import CustomerDashboard from './CustomerDashboard';
import CustomerProcessing from './CustomerProcessing';
import Layout from './Layout';

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#5D576B',
      contrastText: '#fff',
    },
    secondary: {
      main: '#f44336',
      contrastText: '#000',
    },
  },
});

const StyledAppBar = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const StyledDashboard = styled.div`
  .profile-container {
    padding: 1.5em;
    flex-direction: column;
    display: flex;
  }
  .avatar {
    width: 8em;
    height: 8em;
    align-self: center;
  }
  .karma-container {
    flex-direction: row;
    justify-content: space-between;
    display: flex;
  }
  .skill-chip {
    color: #fff;
    border-radius: 16px;
    padding: 0.4em 1em 0.4em 1em;
    margin: 0.3em;
  }
  .chip-wrapper {
    margin: 1em;
  }
  .link {
    color: #fff
  }
`;

const Homepage = () => {
  return (
    <Router>
      <MuiThemeProvider theme={theme}>
        <div>
          <AppBar position="static">
            <Toolbar >
              <StyledAppBar>
                <div className="link">
                  <Link className="link" to="/">Helping Hand</Link>
              </div>
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
              </StyledAppBar>
            </Toolbar>
          </AppBar>
          <Layout>
            <StyledDashboard>
              <Switch>
                <Route exact path="/">
                  <CustomerDashboard />
                </Route>
                <Route path="/processing">
                  <CustomerProcessing />
                </Route>
                <Route path="/volunteer">
                  <VolunteerDashboard />
                </Route>
              </Switch>
            </StyledDashboard>
          </Layout>
        </div>
      </MuiThemeProvider>
    </Router>
  );
}

export default Homepage;