import styles from "./footer.module.scss";

const BottomBar = () => {
  return (
    <div className={styles.bottomBar}>
      <div className={styles.bottomBar_divider}></div>
      <div className={styles.bottomBar_content}>
        <div className={styles.bottomBar_leftText}>
          {"Copyright © 2021 UI8 LLC. All rights reserved"}
        </div>
        <div className={styles.bottomBar_rightFrame}>
          <div className={styles.bottomBar_rightText}>
            {"We use cokkies for better service."}
          </div>
          <div className={styles.bottomBar_accept}>{"Accept"}</div>
        </div>
      </div>
    </div>
  );
};

export default BottomBar;
