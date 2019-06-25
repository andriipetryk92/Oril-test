import React, { Component } from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import Button from "@material-ui/core/Button/Button";
import renderField from '../../components/Input';
import * as validation from '../../utils/validation';
import { signUp } from '../../redux/auth/actions';

class SignUpForm extends Component {
  render() {

    const { valid, signUp, email, password } = this.props;

    const onSignUp = (e) => {
      e.preventDefault();
      signUp({ email, password });
    };

    return (
      <form
        className="form"
        onSubmit={e => onSignUp(e)}
      >
        <Field
          label="Email"
          name="email"
          component={renderField}
          type="email"
          placeholder="Your email address"
          validate={validation.requiredEmail}
        />
        <Field
          label="Password"
          name="password"
          component={renderField}
          type="password"
          placeholder="Enter password"
          validate={validation.requiredPassword}
        />
        <Field
          className="last-input"
          label="Confirm Password"
          name="confirmPassword"
          component={renderField}
          type="password"
          placeholder="Enter password again"
          validate={[validation.requiredConfirmPassword, validation.confirmPassword]}
        />
        <Button type="submit" disabled={!valid}
          className="btn-auth"
        >SIGN UP</Button>
      </form>
    );
  }
}

const selector = formValueSelector('signUpForm');

const mapStateToProps = state => {
  const email = selector(state, 'email');
  const password = selector(state, 'password');
  return {
    email,
    password,
  }
}

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ signUp }, dispatch)
);

const SignUpFormToExport = reduxForm({
  form: 'signUpForm'
})(SignUpForm);


export default connect(mapStateToProps, mapDispatchToProps)(SignUpFormToExport)
