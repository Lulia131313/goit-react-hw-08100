import { Field, Form, Formik } from "formik";
import { Link } from "react-router-dom";

const AuthForm = ({ title, onSubmit, initialValues, type }) => {
  return (
    <div className="formWrapper">
      <Formik onSubmit={onSubmit} initialValues={initialValues}>
        <Form className="form">
          {type === "register" && (
            <Field
              className="input"
              type="text"
              name="name"
              placeholder="Enter your name"
            />
          )}

          <Field type="text" name="email" placeholder="Enter your email" />
          <Field
            type="password"
            name="password"
            placeholder="Enter your password"
          />
          <button type="submit">{title}</button>
          <p>
            You{" "}
            {type === "register"
              ? "already have an account?"
              : "don`t have an account?"}
            <Link to={type === "register" ? "/login" : "/register"}>
              {type === "register" ? "Login" : "Register"}
            </Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default AuthForm;