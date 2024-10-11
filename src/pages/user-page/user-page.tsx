import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Layout } from "../../components/layout";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { getUserData } from "../../api";
import { updateUserData } from "../../api";
import { UserContext } from "../../App";
import styles from "./user-page.module.scss";

interface UserFormValues {
  email: string;
  nick: string;
  firstName: string;
  lastName: string;
}

export const UserPage = () => {
  const { token } = useContext(UserContext);
  const { userId } = useParams<{ userId: string }>();
  const [userData, setUserData] = useState<UserFormValues>({
    email: "",
    nick: "",
    firstName: "",
    lastName: "",
  });
  const [dataUpdate, setDataUpdate] = useState<boolean>(false);

  const fetchUserData = async () => {
    if (token) {
      try {
        const fetchedData = await getUserData(token);
        setUserData({
          email: fetchedData.email || "",
          nick: fetchedData.nick || "",
          firstName: fetchedData.firstName || "",
          lastName: fetchedData.lastName || "",
        });
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }
  };

  useEffect(() => {
    fetchUserData();
  }, [token]);

  const initialValues: UserFormValues = userData;

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("nvalid email address")
      .required("EEmail is required"),
    nick: Yup.string().required("Nick is required"),
    firstName: Yup.string().required("Name is required"),
    lastName: Yup.string().required("Last name is required"),
  });

  const handleSubmit = async (values: UserFormValues) => {
    if (token) {
      try {
        const response = await updateUserData(token, values);
        console.log("Dane użytkownika zostały zapisane");
        setDataUpdate(true);
      } catch (error) {
        console.error("Błąd podczas zapisywania danych");
      }
    } else {
      console.error("Brak tokena");
    }
  };

  return (
    <Layout>
      {/* <div className={styles.wrap}>
        wrap
        <div className={styles.cont}>
          content
          <div className={styles.el}>el</div>
        </div>
      </div> */}
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.header}>User data</div>
          {userId ? (
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
              enableReinitialize
            >
              {({ errors, touched }) => (
                <Form className={styles.form}>
                  <div className={styles.items}>
                    <label>Email:</label>
                    <Field
                      className={styles.field}
                      type="email"
                      name="email"
                      placeholder="email"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="error-message"
                    />
                  </div>
                  <div className={styles.items}>
                    <label>Nick:</label>
                    <Field
                      className={styles.field}
                      type="text"
                      name="nick"
                      placeholder="nick"
                    />
                    <ErrorMessage
                      name="nick"
                      component="div"
                      className="error-message"
                    />
                  </div>
                  <div className={styles.items}>
                    <label>Name:</label>
                    <Field
                      className={styles.field}
                      type="text"
                      name="firstName"
                      placeholder="name"
                    />
                    <ErrorMessage
                      name="firstName"
                      component="div"
                      className="error-message"
                    />
                  </div>
                  <div className={styles.items}>
                    <label>Last name:</label>
                    <Field
                      className={styles.field}
                      type="text"
                      name="lastName"
                      placeholder="last name"
                    />
                    <ErrorMessage
                      name="lastName"
                      component="div"
                      className="error-message"
                    />
                  </div>
                  <div className={styles.submitContainer}>
                    <button className={styles.submit} type="submit">
                      Submit
                    </button>
                  </div>

                  {Object.keys(errors).length > 0 && (
                    <div className={styles.errorMessage}>
                      Complete the missing data
                    </div>
                  )}
                  {dataUpdate && (
                    <div className={styles.dataUpdate}>
                      Data has been updated
                    </div>
                  )}
                </Form>
              )}
            </Formik>
          ) : (
            <div>User ID not found!</div>
          )}
        </div>
      </div>
    </Layout>
  );
};
