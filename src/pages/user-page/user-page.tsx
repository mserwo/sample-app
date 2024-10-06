import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Layout } from "../../components/layout";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { getUserData } from "../../api";
import { updateUserData } from "../../api";
import { UserContext } from "../../App";

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
      .email("Nieprawidłowy adres email")
      .required("Email jest wymagany"),
    nick: Yup.string().required("Nick jest wymagany"),
    firstName: Yup.string().required("Imię jest wymagane"),
    lastName: Yup.string().required("Nazwisko jest wymagane"),
  });

  const handleSubmit = async (values: UserFormValues) => {
    if (token) {
      try {
        const response = await updateUserData(token, values);
        console.log("Dane użytkownika zostały zapisane");
      } catch (error) {
        console.error("Błąd podczas zapisywania danych");
      }
    } else {
      console.error("Brak tokena");
    }
  };

  return (
    <Layout>
      <h2>Dane użytkownika</h2>
      {userId ? (
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          enableReinitialize
        >
          {({ errors, touched }) => (
            <Form>
              <div>
                <label>Email:</label>
                <Field
                  type="email"
                  name="email"
                  placeholder="Twój email"
                  className={errors.email && touched.email ? "error" : ""}
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="error-message"
                />
              </div>
              <div>
                <label>Nick:</label>
                <Field
                  type="text"
                  name="nick"
                  placeholder="Twój nick"
                  className={errors.nick && touched.nick ? "error" : ""}
                />
                <ErrorMessage
                  name="nick"
                  component="div"
                  className="error-message"
                />
              </div>
              <div>
                <label>Imię:</label>
                <Field
                  type="text"
                  name="firstName"
                  placeholder="Twoje imię"
                  className={
                    errors.firstName && touched.firstName ? "error" : ""
                  }
                />
                <ErrorMessage
                  name="firstName"
                  component="div"
                  className="error-message"
                />
              </div>
              <div>
                <label>Nazwisko:</label>
                <Field
                  type="text"
                  name="lastName"
                  placeholder="Twoje nazwisko"
                  className={errors.lastName && touched.lastName ? "error" : ""}
                />
                <ErrorMessage
                  name="lastName"
                  component="div"
                  className="error-message"
                />
              </div>
              <button type="submit">Zapisz</button>

              {Object.keys(errors).length > 0 && (
                <div className="error-message">Uzupełnij brakujące dane</div>
              )}
            </Form>
          )}
        </Formik>
      ) : (
        <div>Nie znaleziono ID użytkownika!</div>
      )}
    </Layout>
  );
};
