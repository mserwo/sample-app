import { useState } from "react";
import { SingleInputField } from "../single-input-field/single-input-field";
import styles from "./join-newsletter.module.scss";

export const JoinNewsletter = () => {
  const [emailSent, setEmailSent] = useState(false);
  const [serverError, setServerError] = useState(false);

  const onHandleSubmit = async (value: string) => {
    try {
      const response = await fetch("http://localhost:3000/marcin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: value }),
      });

      if (response.ok) {
        setEmailSent(true);
      } else {
        setServerError(true);
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.container_title}>Join Newsletter</div>
      <div className={styles.container_content}>
        <div className={styles.container_text}>
          Subscribe our newsletter to get more free design course and resource
        </div>
        <SingleInputField
          errorText={"The field cannot be empty"}
          onHandleSubmit={onHandleSubmit}
        />
        {emailSent ? (
          <div className={styles.correctAnswer}>Email has been send</div>
        ) : null}
        {serverError ? (
          <div className={styles.correctAnswer}>Something went wrong</div>
        ) : null}
      </div>
    </div>
  );
};
