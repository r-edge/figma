import type { NextPage } from "next";
import styles from "./los-angeles-container.module.css";
const LosAngelesContainer: NextPage = () => {
  return (
    <div className={styles.header}>
      <div className={styles.banner}>
        <img
          className={styles.bannerBackground}
          alt=""
          src="/banner-background@2x.png"
        />
        <div className={styles.title}>
          <div className={styles.staysInLos}>Stays in Los Angeles</div>
          <div className={styles.options}>
            <div className={styles.pilldefault}>
              <div className={styles.beds}>Recommended</div>
            </div>
            <div className={styles.pilldefault1}>
              <div className={styles.beds}>Price</div>
            </div>
            <div className={styles.pilldefault1}>
              <div className={styles.beds}>Rating</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LosAngelesContainer;
