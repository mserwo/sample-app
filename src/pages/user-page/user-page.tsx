import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Layout } from "../../components/layout";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { updateUserData } from "../../api";
import { LanguageContext, UserContext } from "../../App";
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
  const { userPanel } = useContext(LanguageContext);
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

  const getMockUser = () => {
    const mockUser = JSON.parse(sessionStorage.getItem("mockUser") || "{}");
    setUserData({
      email: mockUser.mockEmail || "",
      nick: mockUser.mockNick || "",
      firstName: mockUser.mockFirstName || "",
      lastName: mockUser.mockLastName || "",
      avatarUrl: "https://picsum.photos/300",
      city: mockUser.mockCity || "",
      phone: mockUser.mockPhone || "",
      description: mockUser.mockDescription || "",
    });
    console.log(mockUser);
  };

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
    const isMock = window.location.origin !== "http://localhost:5173";

    if (isMock) {
      getMockUser();
    } else if (token) {
      fetchUserData();
    }
  }, [token, showEdit]);

  const EditData = () => {
    setShowEdit(true);
    setDataUpdate(false);
  };

  const initialValues: UserFormValues = userData;

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email(userPanel.validation.email1)
      .required(userPanel.validation.email2),
    nick: Yup.string().required(userPanel.validation.nick),
    firstName: Yup.string().required(userPanel.validation.firstName),
    lastName: Yup.string().required(userPanel.validation.lastName),
    city: Yup.string(),
    phone: Yup.string()
      .required(userPanel.validation.phone1)
      .matches(/^[0-9]{9}$/, userPanel.validation.phone2),
    description: Yup.string(),
  });

  const handleSubmit = async (values: UserFormValues) => {
    const mockUser = JSON.parse(sessionStorage.getItem("mockUser") || "{}");
    if (token) {
      try {
        await updateUserData(token, values);
        setDataUpdate(true);
        setShowEdit(false);
      } catch (error) {
        console.error("Error saving data:", error);
      }
    } else if (mockUser.mockToken) {
      mockUser.mockEmail = values.email;
      mockUser.mockNick = values.nick;
      mockUser.mockFirstName = values.firstName;
      mockUser.mockLastName = values.lastName;
      mockUser.mockAvatarUrl = "https://picsum.photos/300";
      mockUser.mockCity = values.city;
      mockUser.mockPhone = values.phone;
      mockUser.mockDescription = values.description;

      sessionStorage.setItem(
        "mockUser",
        JSON.stringify({
          mockEmail: values.email,
          mockToken: "example token",
          mockNick: values.nick,
          mockFirstName: values.firstName,
          mockLastName: values.lastName,
          mockAvatarUrl: "https://picsum.photos/300",
          mockCity: values.city,
          mockPhone: values.phone,
          mockDescription: values.description,
        }),
      );

      setDataUpdate(true);
      setShowEdit(false);
    }
  };

  const mockUser = JSON.parse(sessionStorage.getItem("mockUser") || "{}");

  if (!token && !mockUser.mockToken) {
    navigate("/");
    return null;
  }

  const capitalizeFirst = (str: string) =>
    str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

  return (
    <Layout>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.header}>{userPanel.title}</div>
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
                            placeholder={userPanel.descriptionPlaceHolder}
                            rows={6}
                          />
                        </div>

                        <div className={styles.rightSection}>
                          <div className={styles.items}>
                            <label>{userPanel.nickField}</label>
                            <Field
                              className={styles.field}
                              type="text"
                              name="nick"
                            />
                            <ErrorMessage
                              name="nick"
                              component="div"
                              className={styles.errorField}
                            />
                          </div>
                          <div className={styles.items}>
                            <label>{userPanel.firstNameField}</label>
                            <Field
                              className={styles.field}
                              type="text"
                              name="firstName"
                            />
                            <ErrorMessage
                              name="firstName"
                              component="div"
                              className={styles.errorField}
                            />
                          </div>
                          <div className={styles.items}>
                            <label>{userPanel.lastNameField}</label>
                            <Field
                              className={styles.field}
                              type="text"
                              name="lastName"
                            />
                            <ErrorMessage
                              name="lastName"
                              component="div"
                              className={styles.errorField}
                            />
                          </div>
                          <div className={styles.items}>
                            <label>{userPanel.emailField}</label>
                            <Field
                              className={styles.field}
                              type="email"
                              name="email"
                            />
                            <ErrorMessage
                              name="email"
                              component="div"
                              className={styles.errorField}
                            />
                          </div>
                          <div className={styles.items}>
                            <label>{userPanel.cityField}</label>
                            <Field
                              className={styles.field}
                              type="text"
                              name="city"
                            />
                            <ErrorMessage
                              name="city"
                              component="div"
                              className={styles.errorField}
                            />
                          </div>
                          <div className={styles.items}>
                            <label>{userPanel.phoneField}</label>
                            <Field
                              className={styles.field}
                              type="text"
                              name="phone"
                            />
                            <ErrorMessage
                              name="phone"
                              component="div"
                              className={styles.errorField}
                            />
                          </div>
                        </div>
                      </div>

                      <div className={styles.submitContainer}>
                        <button className={styles.submit} type="submit">
                          {userPanel.submitButton}
                        </button>
                      </div>

                      {Object.keys(errors).length > 0 && (
                        <div className={styles.errorMessage}>
                          {userPanel.errorMessage}
                        </div>
                      )}
                      {dataUpdate && (
                        <div className={styles.dataUpdate}>
                          {userPanel.updateMessage}
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
                        {userData.description || userPanel.description}
                      </div>
                    </div>

                    <div className={styles.rightSection}>
                      <div className={styles.dataItem}>
                        {userPanel.nickField}{" "}
                        <div className={styles.dataField}>{userData.nick}</div>
                      </div>
                      <div className={styles.dataItem}>
                        {userPanel.firstNameField}{" "}
                        <div className={styles.dataField}>
                          {userData.firstName}
                        </div>
                      </div>
                      <div className={styles.dataItem}>
                        {userPanel.lastNameField}{" "}
                        <div className={styles.dataField}>
                          {userData.lastName}
                        </div>
                      </div>
                      <div className={styles.dataItem}>
                        {userPanel.emailField}{" "}
                        <div className={styles.dataField}>{userData.email}</div>
                      </div>
                      <div className={styles.dataItem}>
                        {userPanel.cityField}{" "}
                        <div className={styles.dataField}>{userData.city}</div>
                      </div>
                      <div className={styles.dataItem}>
                        {userPanel.phoneField}{" "}
                        <div className={styles.dataField}>{userData.phone}</div>
                      </div>
                    </div>
                  </div>
                  <button className={styles.editData} onClick={EditData}>
                    {userPanel.editButton}
                  </button>
                </div>
              )}
            </>
          ) : (
            <div>{userPanel.idError}</div>
          )}
        </div>
      </div>
    </Layout>
  );
};
