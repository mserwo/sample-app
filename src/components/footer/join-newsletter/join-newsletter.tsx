import { useState } from "react";
import { SingleInputField } from "../single-input-field/single-input-field";
import styles from "./join-newsletter.module.scss";
import classNames from "classnames";
import { postNewsletter } from "../../../api";

const isEmail = (email: string) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

interface NewsletterResponse {
  isError: boolean;
  message: string;
}

export const JoinNewsletter = () => {
  const [newsletterResponse, setNewsletterResponse] =
    useState<NewsletterResponse>({ isError: false, message: "" });

  const onHandleSubmit = async (value: string) => {
    const onSuccess = () =>
      setNewsletterResponse({ isError: false, message: "Email has been sent" });

    const onError = (errorMsg: string) =>
      setNewsletterResponse({ isError: true, message: errorMsg });

    if (!isEmail(value)) return onError("Wrong email adress haha");

    postNewsletter(value, onSuccess, onError);
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

        <div
          className={classNames(styles.response, {
            [styles.error]: newsletterResponse.isError,
          })}
        >
          {newsletterResponse.message}
        </div>
      </div>
    </div>
  );
};
