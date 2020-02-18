import React from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { Redirect } from "react-router";

import { login } from "../../redux/index";
import { Input } from "../index";
import { requiredField } from "../../utils/validators/validators";
import s from "../common/FormsControls/FormsControls.module.css";

const LoginForm = (handleSubmit, error) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          placeholder={"Email"}
          name={"email"}
          component={Input}
          validate={[requiredField]}
        />
      </div>
      <div>
        <Field
          placeholder={"Password"}
          name={"password"}
          type={"password"}
          component={Input}
          validate={[requiredField]}
        />
      </div>
      <div>
        <Field
          component={Input}
          name={"rememberMe"}
          type={"checkbox"}
          validate={[requiredField]}
        />
        Remember Me!
      </div>
      {error && <div className={s.formSummaryError}>Error , sorry =(</div>}
      <div>
        <button>Login </button>
      </div>
    </form>
  );
};
//похожая компонента mapstateToProps
const LoginReduxForm = reduxForm({
  form: "login"
})(LoginForm);

const Login = props => {
  const onSubmit = formData => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };

  if (props.isAuth) {
    return <Redirect to={"/profile"} />;
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth
});

export const LogContainer = connect(mapStateToProps, { login })(Login);
