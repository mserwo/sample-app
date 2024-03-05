import styles from "./bottom-bar.module.scss";

export const BottomBar = () => {
  return (
    <div className={styles.bottomBar}>
      <div className={styles.bottomBar_content}>
        <div className={styles.bottomBar_content_leftText}>
          {"Copyright © 2021 UI8 LLC. All rights reserved"}
        </div>
        <div className={styles.bottomBar_content_rightText}>
          <div>{"We use cookies for better service."}</div>
          <div className={styles.bottomBar_content_rightText_accept}>
            {"Accept"}
          </div>
        </div>
      </div>
    </div>
  );
};
