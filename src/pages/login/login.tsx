import React, { useContext, useState } from "react";
import { Layout } from "../../components/layout";
import styles from "./login.module.scss";
import { Formik, Field, Form, FormikHelpers, ErrorMessage } from "formik";
import * as Yup from "yup";
import { postLogin } from "../../api";
import classNames from "classnames";
import { LanguageContext, UserContext } from "../../App";
import { useNavigate } from "react-router-dom";
import { readUserData } from "../../api/read-user-data";

interface LoginResponse {
  isError: boolean;
  message: string;
}

interface Values {
  email: string;
  password: string;
}

export const Login = () => {
  const { logIn } = useContext(LanguageContext);
  const { setToken, setId, setEmail, setNick, setFirstName, setLastName } =
    useContext(UserContext);

  const navigate = useNavigate();

  const [loginResponse, setLoginResponse] = useState<LoginResponse>({
    isError: false,
    message: "",
  });

  const goToHome = () => {
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email(logIn.validation.email1)
      .required(logIn.validation.email2),
    password: Yup.string().required(logIn.validation.password),
  });

  const onHandleSubmit = async (values: Values) => {
    const onSuccess = async (token: string) => {
      setLoginResponse({
        isError: false,
        message: logIn.successMessage,
      });
      setToken(token);

      try {
        const allUserData = await readUserData(token);
        setId(allUserData.id);
        setEmail(allUserData.email);
        setNick(allUserData.nick);
        setFirstName(allUserData.name);
        setLastName(allUserData.lastName);

        goToHome();
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      }
    };
    const onError = (errorMessage: string) => {
      setLoginResponse({ isError: true, message: errorMessage });
    };

    if (window.location.origin !== "http://localhost:5173") {
      sessionStorage.setItem(
        "mockUser",
        JSON.stringify({ mockEmail: values.email, mockToken: "example token" }),
      );
      setLoginResponse({
        isError: false,
        message: logIn.successMessage,
      });
      console.log("mock login");
      goToHome();
    } else {
      postLogin(values.email, values.password, onSuccess, onError);
    }
  };

  return (
    <Layout>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div>
            <div className={styles.header}>{logIn.title}</div>

            <Formik
              initialValues={{
                email: "",
                password: "",
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
              {() => (
                <Form className={styles.form}>
                  <div className={styles.items}>
                    <label htmlFor="email">{logIn.emailField}</label>
                    <Field
                      className={styles.field}
                      id="email"
                      name="email"
                      placeholder={logIn.emailPlaceholder}
                      type="email"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className={styles.error}
                    />
                  </div>

                  <div className={styles.items}>
                    <label htmlFor="password">{logIn.passwordField}</label>
                    <Field
                      className={styles.field}
                      id="password"
                      name="password"
                      placeholder={logIn.passwordPlaceholder}
                      type="password"
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className={styles.error}
                    />
                  </div>

                  <button className={styles.submit} type="submit">
                    {logIn.submitButton}
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
      </div>
    </Layout>
  );
};
