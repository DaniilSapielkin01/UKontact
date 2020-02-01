import React from "react";
import { reduxForm, Field } from "redux-form";

const LoginForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={"Login"} name={"login"} component={"input"} />
      </div>
      <div>
        <Field placeholder={"Password"} name={"password"} component={"input"} />
      </div>
      <div>
        <Field component={"input"} name={"rememberMe"} type={"checkbox"} />
      </div>
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

export const Login = props => {
  const onSubmit = formData => {
    console.log(formData);
  };
  return (
    <div className="">
      <h1>Login Form</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};
