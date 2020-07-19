import React from 'react';
import { Grid, Paper, Avatar, Typography, LinearProgress, Button, Divider } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import styled from 'styled-components';
import { grey } from '@material-ui/core/colors';
import TaskChoice from './TaskChoice';

import { useTheme } from '@material-ui/core/styles';

const StyledDashboard = styled.div`
  .profile-container {
    padding: 1.5em;
    flex-direction: column;
    display: flex;
    align-self:center;
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
  .wrapper {
    margin: auto;
  }
`;

const CustomerProcessing = () => {

    return (
        <StyledDashboard>
            <div className="profile-container">
                <Typography variant="h3">
                    Your request has been posted!
            </Typography>
            </div>
        </StyledDashboard>
    );
}

export default CustomerProcessing;
