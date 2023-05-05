import type { NextPage } from "next";
import styles from "./recent-searches-container.module.css";

type RecentSearchesContainerType = {
  sIN?: string;
  duration?: string;
  lAX?: string;
  departOn?: string;
  sep2021?: string;
};

const RecentSearchesContainer: NextPage<RecentSearchesContainerType> = ({
  sIN,
  duration,
  lAX,
  departOn,
  sep2021,
}) => {
  return (
    <div className={styles.flightMainContainer}>
      <div className={styles.toAndFrom}>
        <div className={styles.fromDetails}>
          <b className={styles.sin}>{sIN}</b>
        </div>
        <img className={styles.durationIcon} alt="" src={duration} />
        <div className={styles.toDetails}>
          <b className={styles.lax}>{lAX}</b>
        </div>
      </div>
      <div className={styles.departOn7Container}>
        <b>{departOn}</b>
        <span>{sep2021}</span>
      </div>
    </div>
  );
};

export default RecentSearchesContainer;
