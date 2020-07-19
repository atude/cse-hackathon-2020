import React from 'react';
import { Grid, Paper, Avatar, Typography, LinearProgress, Button, Divider } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import styled from 'styled-components';
import { grey } from '@material-ui/core/colors';
import TaskChoice from './TaskChoice';

import { useTheme } from '@material-ui/core/styles';

const skills = [
    "yes",
    "no",
    "maybe"
];

const tasks = [
    {
        title: "Computer",
        description: "I am having trouble with my computer",
        category: "pass"
    },
    {
        title: "Gardening",
        description: "I need help with the gardening",
        category: "pass"
    },
    {
        title: "Friendly Chat",
        description: "I need a friend",
        category: "pass"
    },
    {
        title: "Television",
        description: "I need help with my TV",
        category: "pass"
    },
    {
        title: "Phone",
        description: "Phone is work bad",
        category: "pass"
    },
    {
        title: "Internet",
        description: "Turn the router off and on again",
        category: "pass"
    },
    {
        title: "Friendly Chat",
        description: "I am so lonely",
        category: "pass"
    },
    {
        title: "COVID-19",
        description: "What in tarnation is goin on here",
        category: "pass"
    },
    {
        title: "Custom",
        description: "Make your own task!",
        category: "pass"
    },
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
  .wrapper {
    margin: 1em;
  }
`;

const CustomerDashboard = () => {
    const theme = useTheme();

    return (
        <StyledDashboard>
            <Grid container direction="row" spacing={2}>
                <Grid item xs={12} md={3}>
                    <Paper className="profile-container">
                        <Avatar className="avatar" />
                        <br /><br />
                        <Typography variant="h5">
                            Welcome, <br /><b>Claire</b>
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
                <Grid item xs={3} md={9}>
                    <Paper className="profile-container">
                        <Typography variant="h5">
                            What do you need help with today?
            </Typography>
                        <br /><Divider /><br />
                        <div className="wrapper">
                        <Grid container spacing={3}>
                            {tasks.map((task) => (
                                <Grid item xs={4}>
                                    <TaskChoice
                                        title={task.title}
                                        description={task.description}
                                        category={task.category}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                        </div>
                    </Paper>
                </Grid>
            </Grid>
        </StyledDashboard>
    );
}

export default CustomerDashboard;
