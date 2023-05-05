import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./results-container.module.css";

type ResultsContainerType = {
  roomSize?: string;
  roomType?: string;
  hotelName?: string;
  roomDimensions?: string;
  roomImageUrl?: string;

  /** Style props */
  propCursor?: Property.Cursor;

  /** Action props */
  openMatterhornPopup?: () => void;
};

const ResultsContainer: NextPage<ResultsContainerType> = ({
  roomSize,
  roomType,
  hotelName,
  roomDimensions,
  roomImageUrl,
  propCursor,
  openMatterhornPopup,
}) => {
  const videoIconStyle: CSS.Properties = useMemo(() => {
    return {
      cursor: propCursor,
    };
  }, [propCursor]);

  return (
    <div className={styles.resultsCard}>
      <img className={styles.resultsImageIcon} alt="" src={roomSize} />
      <div className={styles.resultsDetails}>
        <div className={styles.resultsTitle}>
          <div className={styles.resultAndVideo}>
            <div className={styles.kingBedStandard}>{roomType}</div>
            <b className={styles.holidayInnExpre}>{hotelName}</b>
            <div className={styles.review}>
              <div className={styles.reviews}>(1,136 reviews)</div>
              <div className={styles.stars}>
                <div className={styles.div}>4.7</div>
                <img
                  className={styles.vectorIcon}
                  alt=""
                  src={roomDimensions}
                />
              </div>
            </div>
          </div>
          <img
            className={styles.videoIcon}
            alt=""
            src={roomImageUrl}
            style={videoIconStyle}
            onClick={openMatterhornPopup}
          />
        </div>
        <div className={styles.priceAndCta}>
          <div className={styles.pricing}>
            <b className={styles.s286}>$S 286</b>
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

export default ResultsContainer;
