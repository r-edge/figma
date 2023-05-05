import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./booking-container.module.css";

type BookingContainerType = {
  airlineLogo?: string;
  singaporeAirlines?: string;
  price?: string;
  depCode?: string;
  depName?: string;
  arrCode?: string;
  arrName?: string;
  flightClass?: string;
  numPeople?: string;
  expedia?: string;
  timeAgo?: string;

  /** Style props */
  propTextAlign?: Property.TextAlign;
};

const BookingContainer: NextPage<BookingContainerType> = ({
  airlineLogo,
  singaporeAirlines,
  price,
  depCode,
  depName,
  arrCode,
  arrName,
  flightClass,
  numPeople,
  expedia,
  timeAgo,
  propTextAlign,
}) => {
  const arrNameStyle: CSS.Properties = useMemo(() => {
    return {
      textAlign: propTextAlign,
    };
  }, [propTextAlign]);

  return (
    <div className={styles.bookingCard}>
      <div className={styles.airlinePrice}>
        <div className={styles.airline}>
          <img className={styles.airlinelogoIcon} alt="" src={airlineLogo} />
          <div className={styles.singaporeAirlines}>{singaporeAirlines}</div>
        </div>
        <div className={styles.price}>{price}</div>
      </div>
      <div className={styles.locations}>
        <div className={styles.departure}>
          <div className={styles.depcode}>{depCode}</div>
          <div className={styles.depname}>{depName}</div>
        </div>
        <img className={styles.flightIcon} alt="" src="/flight-icon.svg" />
        <div className={styles.arrival}>
          <div className={styles.depcode}>{arrCode}</div>
          <div className={styles.arrname} style={arrNameStyle}>
            {arrName}
          </div>
        </div>
      </div>
      <div className={styles.details}>
        <div className={styles.class}>
          <img className={styles.classIcon} alt="" src="/class-icon.svg" />
          <div className={styles.singaporeAirlines}>{flightClass}</div>
        </div>
        <div className={styles.class}>
          <img className={styles.classIcon} alt="" src="/calender.svg" />
          <div className={styles.singaporeAirlines}>{numPeople}</div>
        </div>
      </div>
      <div className={styles.provider}>
        <div className={styles.singaporeAirlines}>
          <span>{`Booked on `}</span>
          <span className={styles.expedia}>{expedia}</span>
        </div>
        <div className={styles.timeago}>{timeAgo}</div>
      </div>
    </div>
  );
};

export default BookingContainer;
