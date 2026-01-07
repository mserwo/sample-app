import React, { useContext, useState } from "react";
import { Layout } from "../../components/layout";
import styles from "./login.module.scss";
import { Formik, Field, Form, FormikHelpers, ErrorMessage } from "formik";
import * as Yup from "yup";
import { postLogin } from "../../api";
import classNames from "classnames";
import { UserContext } from "../../App";
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

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string().required("Required"),
});

export const Login = () => {
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

  const onHandleSubmit = async (values: Values) => {
    const onSuccess = async (token: string) => {
      setLoginResponse({
        isError: false,
        message: "You are logged in!",
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

    postLogin(values.email, values.password, onSuccess, onError);
  };

  return (
    <Layout>
      <div className={styles.wrapper}>
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
              {() => (
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
      </div>
    </Layout>
  );
};
