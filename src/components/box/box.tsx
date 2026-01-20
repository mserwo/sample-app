import { Link } from "react-router-dom";
import styles from "./box.module.scss";
import classNames from "classnames";

interface BoxProps {
  title: string;
  text: string;
  list: string[];
  primaryButtonText: string;
  primaryButtonUrl: string;
  secondaryButtonText?: string;
  secondaryButtonUrl?: string;
  color?: string;
}

export const Box = ({
  title,
  text,
  list,
  primaryButtonText,
  primaryButtonUrl,
  secondaryButtonText,
  secondaryButtonUrl,
  color = "green",
}: BoxProps) => {
  return (
    <div className={classNames(styles.box, styles[`box_${color}`])}>
      <div
        className={classNames(styles.box_title, styles[`box_title_${color}`])}
      >
        {title}
      </div>
      <div className={styles.box_text}>
        <div>{text}</div>

        <ul className={classNames(styles.list, styles[`list_${color}`])}>
          {list.map((item, idx) => (
            <li key={idx} className={styles.list_textGreen}>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.button}>
        <div className={styles.button_field}>
          <Link
            to={primaryButtonUrl}
            className={classNames(
              styles.button_field_text,
              styles[`button_field_text_${color}`],
            )}
            onClick={() => window.scrollTo(0, 0)}
          >
            {primaryButtonText}
          </Link>
        </div>

        {!secondaryButtonText || !secondaryButtonUrl ? null : (
          <div className={styles.button_field}>
            <Link
              to={secondaryButtonUrl}
              className={classNames(
                styles.button_field_text,
                styles[`button_field_text_${color}`],
              )}
              onClick={() => window.scrollTo(0, 0)}
            >
              {secondaryButtonText}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
