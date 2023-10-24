import styles from "./footer.module.scss";

const BottomBar = () => {
  return (
    <div className={styles.bottomBar}>
      <div className={styles.bottomBar_leftText}>
        {"Copyright © 2021 UI8 LLC. All rights reserved"}
      </div>
      <div>
        <div>{"We use cookies for better service."}</div>
        <div>{"Accept"}</div>
      </div>
    </div>
  );
};

export default BottomBar;
