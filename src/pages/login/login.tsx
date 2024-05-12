import React from "react";
import { Layout } from "../../components/layout";
import styles from "./login.module.scss";
import { Formik, Field, Form, FormikHelpers } from "formik";

interface Values {
  email: string;
  password: string;
}

export const Login = () => {
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
            onSubmit={(
              values: Values,
              { setSubmitting }: FormikHelpers<Values>
            ) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 500);
            }}
          >
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
              </div>

              <button className={styles.submit} type="submit">
                Submit
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </Layout>
  );
};
