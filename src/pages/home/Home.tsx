import React, { createContext, useContext, useEffect, useState } from "react";
import { Link, useNavigate, useRouteLoaderData } from "react-router-dom";
import { getUserId } from "../../api/fetch-user-id";
import { UserContext } from "../../App";
import { Layout } from "../../components/layout";
import { jwtDecode } from "jwt-decode";

interface UserData {
  id: string;
  email: string;
}

export const Home = () => {
  const { token } = useContext(UserContext);
  const navigate = useNavigate();
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    const receiveUserData = async () => {
      if (token) {
        try {
          const data = await getUserId(token);
          if (data) {
            setUserData(data);
          }
        } catch (error) {
          console.error("Error fetching user ID", error);
        }
      } else {
        navigate("/login");
      }
    };

    receiveUserData();
  }, [token, navigate]);

  return (
    <Layout>
      <div>Jesteś zalogowany! Twój token to: {token}</div>
      {userData ? (
        <>
          <div>Twoje ID to: {userData.id}</div>
          <div>Twój email to: {userData.email}</div>
          <div>
            <Link to={`/userpage/${userData.id}`}>
              Przejdź do ustawień konta
            </Link>
          </div>
        </>
      ) : (
        <div>Ładowanie danych użytkownika...</div>
      )}
    </Layout>
  );
};
