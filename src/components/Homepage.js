import React from 'react';
import styled from 'styled-components';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import VolunteerDashboard from './VolunteerDashboard';
import Layout from './Layout';

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

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

const Homepage = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <div>
        <AppBar position="static">
          <Toolbar >
            <StyledAppBar>
              <div>
                AirTasker 2
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
          <VolunteerDashboard />
        </Layout>
      </div>
    </MuiThemeProvider>
  );
}

export default Homepage;