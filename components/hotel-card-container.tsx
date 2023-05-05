import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./hotel-card-container.module.css";

type HotelCardContainerType = {
  matterhornSuitesImage?: string;
  entireBungalow?: string;
  matterhornSuites?: string;
  night?: string;
  reviews?: string;
  prop?: string;
  vector?: string;

  /** Style props */
  propFlex?: Property.Flex;
  propGap?: Property.Gap;
  propWidth?: Property.Width;
  propRight?: Property.Right;

  /** Action props */
  openMatterhornPopup?: () => void;
};

const HotelCardContainer: NextPage<HotelCardContainerType> = ({
  matterhornSuitesImage,
  entireBungalow,
  matterhornSuites,
  night,
  reviews,
  prop,
  vector,
  propFlex,
  propGap,
  propWidth,
  propRight,
  openMatterhornPopup,
}) => {
  const stayDetailsStyle: CSS.Properties = useMemo(() => {
    return {
      flex: propFlex,
      gap: propGap,
    };
  }, [propFlex, propGap]);

  const vectorIconStyle: CSS.Properties = useMemo(() => {
    return {
      width: propWidth,
      right: propRight,
    };
  }, [propWidth, propRight]);

  return (
    <div className={styles.hotelCard1}>
      <div className={styles.hotelCard}>
        <img
          className={styles.matterhornSuitesImage}
          alt=""
          src={matterhornSuitesImage}
        />
        <div className={styles.stayDetails} style={stayDetailsStyle}>
          <div className={styles.stayDetailsRows}>
            <div className={styles.entireBungalow}>{entireBungalow}</div>
            <b className={styles.matterhornSuites}>{matterhornSuites}</b>
            <div className={styles.night}>{night}</div>
          </div>
          <img
            className={styles.videoIcon}
            alt=""
            src="/video2.svg"
            onClick={openMatterhornPopup}
          />
        </div>
        <div className={styles.rating}>
          <div className={styles.reviews}>{reviews}</div>
          <div className={styles.parent}>
            <div className={styles.div}>{prop}</div>
            <img
              className={styles.vectorIcon}
              alt=""
              src={vector}
              style={vectorIconStyle}
            />
          </div>
        </div>
        <button className={styles.moreDetailsButton}>
          <div className={styles.button}>More details</div>
        </button>
      </div>
    </div>
  );
};

export default HotelCardContainer;
