import React from 'react';
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Link } from "react-router-dom";


function DemoHome(props) {
    return (
        <Router>
        <div>
        <Button variant="contained">
            <Link to="/customer">
                Customer Dashboard
            </Link>
        </Button>
            <Link to="/volunteer">
                Volunteer Dashboard
            </Link>
        </div>
        </Router>
    );
}

export default DemoHome;