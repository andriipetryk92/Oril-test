import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import SignInForm from './form';

import './style.scss';

class Content extends React.Component {
    render() {
        return (
            <Grid
                alignItems="center"
                justify="center"
                className="container"
                container>
                <div className="auth-content">
                    <div className="title">
                        <Typography variant="h6" component="h3">
                            Sign in to your account
                    </Typography>
                    </div>
                    <Paper className="paper">
                        <SignInForm />
                    </Paper>
                </div>
            </Grid>
        )
    }
}

export default Content;
