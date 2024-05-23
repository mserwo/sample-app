import React from "react";
import { Layout } from "../../components/layout";
import styles from "./login.module.scss";
import { Formik, Field, Form, FormikHelpers, ErrorMessage } from "formik";
import * as Yup from "yup";

interface Values {
  email: string;
  password: string;
}

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string().required("Required"),
});

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
            validationSchema={validationSchema}
            onSubmit={(
              values: Values,
              { setSubmitting, setErrors, resetForm }: FormikHelpers<Values>
            ) => {
              setTimeout(() => {
                if (values.email === "test@example.com") {
                  setErrors({ email: "This email is already taken." });
                  alert("This email is already taken.");
                  resetForm();
                } else {
                  alert(JSON.stringify(values, null, 2));
                  resetForm();
                }

                setSubmitting(false);
              }, 500);
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
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </Layout>
  );
};
