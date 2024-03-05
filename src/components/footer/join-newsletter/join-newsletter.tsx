import { useState } from "react";
import { SingleInputField } from "../single-input-field/single-input-field";
import styles from "./join-newsletter.module.scss";

export const JoinNewsletter = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container_title}>Join Newsletter</div>
      <div className={styles.container_content}>
        <div className={styles.container_text}>
          Subscribe our newsletter to get more free design course and resource
        </div>
        <SingleInputField
          errorText={"The field cannot be empty"}
          onHandleSubmit={(value: string) => {}}
        />
      </div>
    </div>
  );
};
