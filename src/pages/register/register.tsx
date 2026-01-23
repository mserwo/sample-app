import React, { useContext, useState } from "react";
import { Layout } from "../../components/layout";
import styles from "./register.module.scss";
import { Formik, Field, Form, FormikHelpers, ErrorMessage } from "formik";
import * as Yup from "yup";
import { postRegister } from "../../api";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";
import { LanguageContext } from "../../App";

interface RegisterResponse {
  isError: boolean;
  message: string;
}

interface Values {
  email: string;
  password: string;
  repeatPassword: string;
}

export const Register = () => {
  const { language } = useContext(LanguageContext);
  const { registration } = language;
  const [registerResponse, setRegisterResponse] = useState<RegisterResponse>({
    isError: false,
    message: "",
  });

  const navigate = useNavigate();

  const goToLogin = () => {
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email(registration.validation.email1)
      .required(registration.validation.email2),
    password: Yup.string().required(registration.validation.password),
    repeatPassword: Yup.string()
      .oneOf(
        [Yup.ref("password"), undefined],
        registration.validation.repeatPassword1,
      )
      .required(registration.validation.repeatPassword2),
  });

  const onHandleSubmit = (values: Values) => {
    const onSucces = () => {
      setRegisterResponse({
        isError: false,
        message: registration.successMessage,
      });
      goToLogin();
    };
    const onError = (errorMessage: string) => {
      setRegisterResponse({ isError: true, message: errorMessage });
    };

    if (window.location.origin !== "http://localhost:5173") {
      sessionStorage.setItem(
        "mockUser",
        JSON.stringify({ mockEmail: values.email }),
      );
      console.log("mock register");
      onSucces();
    } else {
      postRegister(values.email, values.password, onSucces, onError);
    }
  };

  return (
    <Layout>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div>
            <div className={styles.header}>{registration.title}</div>

            <Formik
              initialValues={{
                email: "",
                password: "",
                repeatPassword: "",
              }}
              validationSchema={validationSchema}
              onSubmit={(
                values: Values,
                { setSubmitting, resetForm }: FormikHelpers<Values>,
              ) => {
                onHandleSubmit(values);
                resetForm();
                setSubmitting(false);
              }}
            >
              {({ errors, touched }) => (
                <Form className={styles.form}>
                  <div className={styles.items}>
                    <label htmlFor="email">{registration.emailField}</label>
                    <Field
                      className={styles.field}
                      id="email"
                      name="email"
                      placeholder={registration.emailPlaceholder}
                      type="email"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className={styles.error}
                    />
                  </div>

                  <div className={styles.items}>
                    <label htmlFor="password">
                      {registration.passwordField}
                    </label>
                    <Field
                      className={styles.field}
                      id="password"
                      name="password"
                      placeholder={registration.passwordPlaceholder}
                      type="password"
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className={styles.error}
                    />
                  </div>

                  <div className={styles.items}>
                    <label htmlFor="repeatPassword">
                      {registration.repeatPasswordField}
                    </label>
                    <Field
                      className={styles.field}
                      id="repeatPassword"
                      name="repeatPassword"
                      placeholder={registration.repeatPasswordPlaceholder}
                      type="password"
                    />
                    <ErrorMessage
                      name="repeatPassword"
                      component="div"
                      className={styles.error}
                    />
                  </div>

                  <button className={styles.submit} type="submit">
                    {registration.submitButton}
                  </button>

                  {registerResponse.message ? (
                    <div
                      className={classNames(styles.responseOk, {
                        [styles.responseError]: registerResponse.isError,
                      })}
                    >
                      {registerResponse.message}
                    </div>
                  ) : null}
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </Layout>
  );
};
