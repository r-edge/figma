import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./flight-container.module.css";

type FlightContainerType = {
  turkish?: string;
  singaporeAirlines?: string;
  aM?: string;
  h55MNonStop?: string;
  aM1?: string;
  s730?: string;

  /** Style props */
  propTransform?: Property.Transform;
};

const FlightContainer: NextPage<FlightContainerType> = ({
  turkish,
  singaporeAirlines,
  aM,
  h55MNonStop,
  aM1,
  s730,
  propTransform,
}) => {
  const turkishIconStyle: CSS.Properties = useMemo(() => {
    return {
      transform: propTransform,
    };
  }, [propTransform]);

  return (
    <div className={styles.flightCard}>
      <div className={styles.airlineSection}>
        <img
          className={styles.turkishIcon}
          alt=""
          src={turkish}
          style={turkishIconStyle}
        />
        <div className={styles.singaporeAirlines}>{singaporeAirlines}</div>
      </div>
      <div className={styles.flightDetailsSection}>
        <div className={styles.departureDetails}>
          <div className={styles.am}>{aM}</div>
          <div className={styles.sin}>SIN</div>
        </div>
        <div className={styles.flightduration}>
          <img className={styles.flighticon} alt="" src="/flighticon.svg" />
          <div className={styles.h55mNonStop}>{h55MNonStop}</div>
        </div>
        <div className={styles.arrivalDetails}>
          <div className={styles.am}>{aM1}</div>
          <div className={styles.sin1}>LAX</div>
        </div>
      </div>
      <div className={styles.priceSection}>
        <img className={styles.priceSectionChild} alt="" src="/vector-1.svg" />
        <b className={styles.s730}>{s730}</b>
      </div>
    </div>
  );
};

export default FlightContainer;
