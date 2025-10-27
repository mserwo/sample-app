import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Layout } from "../../components/layout";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { updateUserData } from "../../api";
import { UserContext } from "../../App";
import styles from "./user-page.module.scss";
import { readUserData } from "../../api/read-user-data";
import defaultAvatar from "../../assets/images/defaultAvatar.svg";

interface UserFormValues {
  email: string;
  nick: string;
  firstName: string;
  lastName: string;
  avatarUrl: string;
  city: string;
  phone: string;
  description?: string;
}

export const UserPage = () => {
  const { token, setEmail, setNick, setFirstName, setLastName } =
    useContext(UserContext);
  const { userId } = useParams<{ userId: string }>();
  const [userData, setUserData] = useState<UserFormValues>({
    email: "",
    nick: "",
    firstName: "",
    lastName: "",
    avatarUrl: defaultAvatar,
    city: "",
    phone: "",
    description: "",
  });
  const [dataUpdate, setDataUpdate] = useState<boolean>(false);
  const [showEdit, setShowEdit] = useState<boolean>(false);
  const navigate = useNavigate();

  const fetchUserData = async () => {
    if (token) {
      try {
        const fetchedData = await readUserData(token);
        setUserData({
          email: fetchedData.email || "",
          nick: fetchedData.nick || "",
          firstName: fetchedData.firstName || "",
          lastName: fetchedData.lastName || "",
          avatarUrl: fetchedData.avatarUrl || defaultAvatar,
          city: fetchedData.city || "",
          phone: fetchedData.phone || "",
          description: fetchedData.description || "",
        });
        setEmail(fetchedData.email || "");
        setNick(fetchedData.nick || "");
        setFirstName(fetchedData.firstName || "");
        setLastName(fetchedData.lastName || "");
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }
  };

  useEffect(() => {
    fetchUserData();
  }, [token, showEdit]);

  const EditData = () => {
    setShowEdit(true);
    setDataUpdate(false);
  };

  const initialValues: UserFormValues = userData;

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    nick: Yup.string().required("Nick is required"),
    firstName: Yup.string().required("Name is required"),
    lastName: Yup.string().required("Last name is required"),
    city: Yup.string(),
    phone: Yup.string(),
    description: Yup.string(),
  });

  const handleSubmit = async (values: UserFormValues) => {
    if (token) {
      try {
        await updateUserData(token, values);
        setDataUpdate(true);
        setShowEdit(false);
      } catch (error) {
        console.error("Error saving data:", error);
      }
    }
  };

  if (!token) {
    navigate("/");
    return null;
  }

  const capitalizeFirst = (str: string) =>
    str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

  return (
    <Layout>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.header}>User data</div>
          {userId ? (
            <>
              {showEdit ? (
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                  enableReinitialize
                >
                  {({ errors }) => (
                    <Form className={styles.form}>
                      <div className={styles.mainSection}>
                        <div className={styles.leftSection}>
                          <img
                            className={styles.avatar}
                            src={userData.avatarUrl}
                            alt="avatar"
                          />
                          <div className={styles.itemsNick}>
                            {capitalizeFirst(userData.nick)}
                          </div>

                          <Field
                            as="textarea"
                            className={styles.userDescriptionEdit}
                            name="description"
                            placeholder="Write something about yourself..."
                            rows={6}
                          />
                        </div>

                        <div className={styles.rightSection}>
                          <div className={styles.items}>
                            <label>Nick:</label>
                            <Field
                              className={styles.field}
                              type="text"
                              name="nick"
                            />
                            <ErrorMessage
                              name="nick"
                              component="div"
                              className="error-message"
                            />
                          </div>
                          <div className={styles.items}>
                            <label>First Name:</label>
                            <Field
                              className={styles.field}
                              type="text"
                              name="firstName"
                            />
                            <ErrorMessage
                              name="firstName"
                              component="div"
                              className="error-message"
                            />
                          </div>
                          <div className={styles.items}>
                            <label>Last Name:</label>
                            <Field
                              className={styles.field}
                              type="text"
                              name="lastName"
                            />
                            <ErrorMessage
                              name="lastName"
                              component="div"
                              className="error-message"
                            />
                          </div>
                          <div className={styles.items}>
                            <label>Email:</label>
                            <Field
                              className={styles.field}
                              type="email"
                              name="email"
                            />
                            <ErrorMessage
                              name="email"
                              component="div"
                              className="error-message"
                            />
                          </div>
                          <div className={styles.items}>
                            <label>City:</label>
                            <Field
                              className={styles.field}
                              type="text"
                              name="city"
                            />
                            <ErrorMessage
                              name="city"
                              component="div"
                              className="error-message"
                            />
                          </div>
                          <div className={styles.items}>
                            <label>Phone:</label>
                            <Field
                              className={styles.field}
                              type="text"
                              name="phone"
                            />
                            <ErrorMessage
                              name="phone"
                              component="div"
                              className="error-message"
                            />
                          </div>
                        </div>
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
                <div className={styles.dataContainer}>
                  <div className={styles.mainSection}>
                    <div className={styles.leftSection}>
                      <img
                        className={styles.avatar}
                        src={userData.avatarUrl}
                        alt="avatar"
                      />
                      <div className={styles.itemsNick}>
                        {capitalizeFirst(userData.nick)}
                      </div>

                      <div className={styles.userDescription}>
                        {userData.description ||
                          "This is a short user description."}
                      </div>
                    </div>

                    <div className={styles.rightSection}>
                      <div className={styles.dataItem}>
                        Nick:{" "}
                        <div className={styles.dataField}>{userData.nick}</div>
                      </div>
                      <div className={styles.dataItem}>
                        First Name:{" "}
                        <div className={styles.dataField}>
                          {userData.firstName}
                        </div>
                      </div>
                      <div className={styles.dataItem}>
                        Last Name:{" "}
                        <div className={styles.dataField}>
                          {userData.lastName}
                        </div>
                      </div>
                      <div className={styles.dataItem}>
                        Email:{" "}
                        <div className={styles.dataField}>{userData.email}</div>
                      </div>
                      <div className={styles.dataItem}>
                        City:{" "}
                        <div className={styles.dataField}>{userData.city}</div>
                      </div>
                      <div className={styles.dataItem}>
                        Phone:{" "}
                        <div className={styles.dataField}>{userData.phone}</div>
                      </div>
                    </div>
                  </div>
                  <button className={styles.editData} onClick={EditData}>
                    Edit Data
                  </button>
                </div>
              )}
            </>
          ) : (
            <div>User ID not found!</div>
          )}
        </div>
      </div>
    </Layout>
  );
};
