import styles from "./bottom-bar.module.scss";

export const BottomBar = () => {
  return (
    // <div className={styles.bottomBar}>
    //   <div className={styles.bottomBar_content}>
    //     <div className={styles.bottomBar_content_leftText}>
    //       {"Copyright © 2026 Marcin Serwotka. All rights reserved"}
    //     </div>
    //   </div>
    // </div>

    <div className={styles.bottomBar}>
      <div className={styles.bottomBar_content}>
        <div className={styles.bottomBar_content_Text}>
          {"Copyright © 2026 Marcin Serwotka. All rights reserved"}
        </div>
      </div>
    </div>
  );
};
