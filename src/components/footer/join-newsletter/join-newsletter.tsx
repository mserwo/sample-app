import { useState } from "react";
import { SingleInputField } from "../single-input-field/single-input-field";
import styles from "./join-newsletter.module.scss";

import * as NewsletterClient from "../../../api";
import classNames from "classnames";
// imported with namespace, easier to document what api is being used, its just sugar syntax, you could also use
// import { postNewsletter } from "../../../api";
// and use the function like this:
// postNewsletter(value, onSuccess, onError)
// it works the same.

interface NewsletterResponse {
  isError: boolean;
  message: string;
}

export const JoinNewsletter = () => {
  const [newsletterResponse, setNewsletterResponse] =
    useState<NewsletterResponse>({ isError: false, message: "" });

  const onHandleSubmit = async (value: string) => {
    // define what happens if request is successful
    const onSuccess = () =>
      setNewsletterResponse({ isError: false, message: "Email has been sent" });

    // define what happens on error
    const onError = () =>
      setNewsletterResponse({ isError: true, message: "Something went wrong" });

    // NewsletterClient -> namespace
    // postNewsletter -> function
    // we pass value, onSuccess (callback function), onError (callback function)
    NewsletterClient.postNewsletter(value, onSuccess, onError);
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
