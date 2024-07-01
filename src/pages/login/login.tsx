import React, { useState } from "react";
import { Layout } from "../../components/layout";
import styles from "./login.module.scss";
import { Formik, Field, Form, FormikHelpers, ErrorMessage } from "formik";
import * as Yup from "yup";
import { postLogin } from "../../api";
import classNames from "classnames";

interface LoginResponse {
  isError: boolean;
  message: string;
}

interface Values {
  email: string;
  password: string;
}

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string().required("Required"),
});

export const Login = () => {
  const [loginResponse, setLoginResponse] = useState<LoginResponse>({
    isError: false,
    message: "",
  });

  const onHandleSubmit = (values: Values) => {
    const onSucces = () => {
      setLoginResponse({
        isError: false,
        message: "You are logged in!",
      });
    };
    const onError = (errorMessage: string) => {
      setLoginResponse({ isError: true, message: errorMessage });
    };

    postLogin(values.email, values.password, onSucces, onError);
  };

  return (
    <Layout>
      <div className={styles.container}>
        <div>
          <div className={styles.header}>Log in to your account</div>

          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(
              values: Values,
              { setSubmitting, resetForm }: FormikHelpers<Values>
            ) => {
              onHandleSubmit(values);
              resetForm();
              setSubmitting(false);
            }}
          >
            {({ errors, touched }) => (
              <Form className={styles.form}>
                <div className={styles.items}>
                  <label htmlFor="email">Your Email</label>
                  <Field
                    className={styles.field}
                    id="email"
                    name="email"
                    placeholder="john@gmail.com"
                    type="email"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className={styles.error}
                  />
                </div>

                <div className={styles.items}>
                  <label htmlFor="password">Password</label>
                  <Field
                    className={styles.field}
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    type="password"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className={styles.error}
                  />
                </div>

                <button className={styles.submit} type="submit">
                  Submit
                </button>

                {loginResponse.message ? (
                  <div
                    className={classNames(styles.responseOk, {
                      [styles.responseError]: loginResponse.isError,
                    })}
                  >
                    {loginResponse.message}
                  </div>
                ) : null}
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </Layout>
  );
};
