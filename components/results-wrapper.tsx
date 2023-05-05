import type { NextPage } from "next";
import styles from "./results-wrapper.module.css";

type ResultsWrapperType = {
  resultsImage?: string;
  freehandLosAngeles?: string;
  bedInQuad?: string;
  reviews?: string;
  prop?: string;
  vector?: string;
  s198?: string;
};

const ResultsWrapper: NextPage<ResultsWrapperType> = ({
  resultsImage,
  freehandLosAngeles,
  bedInQuad,
  reviews,
  prop,
  vector,
  s198,
}) => {
  return (
    <div className={styles.resultsCard}>
      <img className={styles.resultsImageIcon} alt="" src={resultsImage} />
      <div className={styles.resultsDetails}>
        <div className={styles.resultsTitle}>
          <div className={styles.result}>
            <b className={styles.freehandLosAngeles}>{freehandLosAngeles}</b>
            <div className={styles.bedInQuad}>{bedInQuad}</div>
            <div className={styles.review}>
              <div className={styles.reviews}>{reviews}</div>
              <div className={styles.stars}>
                <div className={styles.div}>{prop}</div>
                <img className={styles.vectorIcon} alt="" src={vector} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.priceAndCta}>
          <div className={styles.pricing}>
            <b className={styles.s198}>{s198}</b>
            <div className={styles.night}>/night</div>
          </div>
          <button className={styles.viewDetailsButton}>
            <div className={styles.viewDetailsButtonChild} />
            <div className={styles.searchFlights}>View Details</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultsWrapper;
