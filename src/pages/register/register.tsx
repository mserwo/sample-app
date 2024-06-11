import React, { useState } from "react";
import { Layout } from "../../components/layout";
import styles from "./register.module.scss";
import { Formik, Field, Form, FormikHelpers, ErrorMessage } from "formik";
import * as Yup from "yup";
import { postRegister } from "../../api";
import classNames from "classnames";

interface RegisterResponse {
  isError: boolean;
  message: string;
}

interface Values {
  email: string;
  password: string;
  repeatPassword: string;
}

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string().required("Required"),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref("password"), undefined], "Passwords must match")
    .required("Required"),
});

export const Register = () => {
  const [registerResponse, setRegisterResponse] = useState<RegisterResponse>({
    isError: false,
    message: "",
  });

  const onHandleSubmit = (values: Values) => {
    const onSucces = () => {
      setRegisterResponse({
        isError: false,
        message: "Thank you for your registration!",
      });
    };
    const onError = (errorMessage: string) => {
      setRegisterResponse({ isError: true, message: errorMessage });
    };

    postRegister(values.email, values.password, onSucces, onError);
  };

  return (
    <Layout>
      <div className={styles.container}>
        <div>
          <div className={styles.header}>Register to create an account</div>

          <Formik
            initialValues={{
              email: "",
              password: "",
              repeatPassword: "",
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

                <div className={styles.items}>
                  <label htmlFor="repeatPassword">Repeat Password</label>
                  <Field
                    className={styles.field}
                    id="repeatPassword"
                    name="repeatPassword"
                    placeholder="Repeat Password"
                    type="password"
                  />
                  <ErrorMessage
                    name="repeatPassword"
                    component="div"
                    className={styles.error}
                  />
                </div>

                <button className={styles.submit} type="submit">
                  Submit
                </button>

                {registerResponse.message && (
                  <div
                    className={classNames(styles.responseOk, {
                      [styles.responseError]: registerResponse.isError,
                    })}
                  >
                    {registerResponse.message}
                  </div>
                )}
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </Layout>
  );
};
