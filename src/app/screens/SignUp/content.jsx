import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Forms from './form';

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
              Create an Account
            </Typography>
            <Typography>
              Already have an account?&nbsp;
              <Typography
                onClick={this.props.toSignIn}
                component="span">
                Sign in here
              </Typography>
            </Typography>
          </div>
          <Paper className="paper">
            <Forms onSubmit={this.props.toSignIn} />
          </Paper>
        </div>
      </Grid>
    )
  }
}

export default Content;
