import React from 'react';
import { Grid, Paper, Avatar, Typography, LinearProgress, Button, Divider } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import styled from 'styled-components';
import { grey } from '@material-ui/core/colors';
import TaskItem from './TaskItem';

import { useTheme } from '@material-ui/core/styles';

const skills = [
  "yes",
  "no",
  "maybe"
];

const tasks = [
  {
    id: 0,
    description: "Help me change my channel Help me change my channel Help me change my channel Help me change my channel Help me change my channel Help me change my channel",
    categories: ["Technology"],
    customerName: "Sylas Broken",
    creationTimestamp: new Date().getTime(),
    languages: ["English"]
    // what happens if u reject a task
  },
  {
    id: 1,
    description: "Help me build an IKEA desk",
    categories: ["Technology", "Gardening"],
    customerName: "Michael Bob",
    creationTimestamp: new Date().getTime(),
    languages: ["English"]
    // what happens if u reject a task
  },
  {
    id: 2,
    description: "Help me to get out of Iron",
    categories: ["Technology", "Gardening"],
    customerName: "Hectic Habib",
    creationTimestamp: new Date().getTime(),
    languages: ["English"]
    // what happens if u reject a task
  }
]

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
`;

const VolunteerDashboard = () => {
  const theme = useTheme();

  return (
    <StyledDashboard>
      <Grid container direction="row" spacing={2}>
        <Grid item xs={12} md={3}>
          <Paper className="profile-container">
            <Avatar className="avatar" />
            <br /><br />
            <Typography variant="h5">
              Welcome, <br /><b>Jonathan</b>
            </Typography>
            <br />
            <Typography>
              Level 2
            </Typography>
            <LinearProgress
              variant="determinate"
              value={50}
              color="secondary"
            />
            <br />
            <Typography style={{ color: grey.A700 }}>
              Complete x more tasks to reach level 3!
            </Typography>
            <br />
            <div className="karma-container">
              <Typography><b>Rating</b></Typography>
              <Typography>4.5/5</Typography>
            </div>
            <br />
            <div>
              <Typography><b>Skills</b></Typography>
            </div>
            <br />
            <div className="chip-wrapper">
            {skills.map((skill) => (
                <span
                  className="skill-chip"
                  style={{ backgroundColor: theme.palette.primary.main }}
                >
                  {skill}
                </span>
            ))}
            </div>
            <br /><br />
            <Button
              variant="contained"
              color="secondary"
              startIcon={<EditIcon />}
            >
              Edit profile
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12} md={9}>
          <Paper className="profile-container">
            <Typography variant="h5">
              Available Tasks
            </Typography>
            <br /><Divider /><br />
            {tasks.map((task) => (
              <div className="chip-wrapper">
                <TaskItem
                  key={task.id}
                  description={task.description}
                  categories={task.categories}
                  customerName={task.customerName}
                  languages={task.languages}
                  creationTimestamp={task.creationTimestamp}
                />
              </div>
            ))}
          </Paper>
        </Grid>
      </Grid>
    </StyledDashboard>
  );
}

export default VolunteerDashboard;
