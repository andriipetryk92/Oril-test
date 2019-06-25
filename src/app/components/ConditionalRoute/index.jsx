import * as React from "react";
import {
  Redirect, Route
} from "react-router-dom";

class ConditionalRoute extends React.Component {
  render() {
    const { component: Component, condition, redirectTo, ...rest } = this.props;
    return <Route {...rest} render={this.renderFn} />
  }

  renderFn = (renderProps) => {
    const { component: Component } = this.props;

    if (this.props.condition) {
      if (!Component) {
        return null;
      }
      return <Component {...renderProps} />
    }
    else {

      return <Redirect to={this.props.redirectTo} />;
      
    }
  };
}

export default ConditionalRoute;