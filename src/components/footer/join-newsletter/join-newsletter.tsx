import { SingleInputField } from "../single-input-field/single-input-field";
import styles from "./join-newsletter.module.scss";

interface InputAnswerProps {
  errorText: string;
  correctText: string;
}

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
          correctText={
            "Thank you! Your email address has been successfully saved"
          }
        />
      </div>
    </div>
  );
};
