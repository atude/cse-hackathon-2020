import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { Typography, Grid } from '@material-ui/core';
import { BrowserRouter as Router, Link } from "react-router-dom";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});


function TaskChoice(props) {
    const {
        title,
        description,
        category
    } = props;
    const classes = useStyles();

    return (
        <Router >
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="h5" component="h2">
                    {title}
                </Typography>
                <Typography variant="body2" component="p">
                    {description}
                </Typography>
            </CardContent>
            <Link to="/processing">
                <CardActions>
                    <Button size="small">Request service</Button>
                </CardActions>
            </Link>
        </Card>
        </Router>
    )
};

export default TaskChoice