import type { NextPage } from "next";
import RecommendedHolidayCardContaine from "./recommended-holiday-card-containe";
import styles from "./recommended-holidays-container.module.css";
const RecommendedHolidaysContainer: NextPage = () => {
  return (
    <div className={styles.recommendedHolidaysContainer}>
      <div className={styles.recTitle}>
        <b className={styles.recommendedHolidays}>Recommended Holidays</b>
        <button className={styles.viewAllHolidaysParent}>
          <div className={styles.viewAllHolidays}>View all holidays</div>
          <img
            className={styles.arrowRightIcon}
            alt=""
            src="/arrowright2.svg"
          />
        </button>
      </div>
      <div className={styles.recCardsContainer}>
        <RecommendedHolidayCardContaine
          unsplash5MV818tzxeo="/unsplash5mv818tzxeo@2x.png"
          bali="Bali"
          d3N="4D3N"
          prop="$899"
        />
        <RecommendedHolidayCardContaine
          unsplash5MV818tzxeo="/switzerlandimage@2x.png"
          bali="Swiss"
          d3N="6D5N"
          prop="$900"
        />
        <RecommendedHolidayCardContaine
          unsplash5MV818tzxeo="/boracayimage@2x.png"
          bali="Boracay"
          d3N="5D4N"
          prop="$699"
        />
        <RecommendedHolidayCardContaine
          unsplash5MV818tzxeo="/palawanimage@2x.png"
          bali="Palawan"
          d3N="4D3N"
          prop="$789"
        />
      </div>
      <div className={styles.viewAllBottom}>
        <div className={styles.viewAllHolidays1}>View all holidays</div>
        <img className={styles.arrowRightIcon} alt="" src="/arrowright3.svg" />
      </div>
    </div>
  );
};

export default RecommendedHolidaysContainer;
