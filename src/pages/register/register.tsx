import React from "react";
import { Layout } from "../../components/layout";
import styles from "./register.module.scss";
import { Formik, Field, Form, FormikHelpers } from "formik";

interface Values {
  email: string;
  password: string;
  repeatPassword: string;
}

export const Register = () => {
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

              <div className={styles.items}>
                <label htmlFor="repeatPassword">Repeat Password</label>
                <Field
                  className={styles.field}
                  id="repeatPassword"
                  name="repeatPassword"
                  placeholder="Repeat Password"
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
