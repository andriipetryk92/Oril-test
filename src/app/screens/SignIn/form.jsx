import React, { Component } from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Typography from '@material-ui/core/Typography';
import renderField from '../../components/Input';
import * as validation from "../../utils/validation";
import { signIn } from '../../redux/auth/actions';


class SignInForm extends Component {
    render() {
        const { valid, signIn, email, password } = this.props;

        const onLogin = (e) => {
            e.preventDefault();
            signIn({ email, password })
        };

        return (
            <form
                className="form form-auth"
                onSubmit={e => onLogin(e)}
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
                    className="last-input-second"
                    label="Password"
                    model="password"
                    name="password"
                    component={renderField}
                    type="password"
                    placeholder="Enter password"
                    validate={validation.requiredPassword}
                />
                <Button className="btn-auth" type="submit" disabled={!valid}
                >
                    SIGN IN
            </Button>
                <div className="not-account">
                    <Typography>
                        Don't have an account?&nbsp;
                    <Link to={'/'}>
                            Sign up here
                    </Link>
                    </Typography>
                </div>
            </form>
        );
    }
};

const selector = formValueSelector('signInForm');

const mapStateToProps = state => {
    const email = selector(state, 'email');
    const password = selector(state, 'password');
    return {
        email,
        password,
    }
}

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({ signIn }, dispatch)
);

const SignInFormToExport = reduxForm({
    form: 'signInForm'
})(SignInForm);


export default connect(mapStateToProps, mapDispatchToProps)(SignInFormToExport)
