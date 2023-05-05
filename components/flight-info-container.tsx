import type { NextPage } from "next";
import FlightContainer from "./flight-container";
import styles from "./flight-info-container.module.css";
const FlightInfoContainer: NextPage = () => {
  return (
    <div className={styles.flightCards}>
      <div className={styles.results}>10 out of 177 Results</div>
      <FlightContainer
        turkish="/turkish.svg"
        singaporeAirlines="Turkish Airlines"
        aM="11:35 PM"
        h55MNonStop="33H 10M, 1-stop"
        aM1="4:45 PM"
        s730="S$ 723"
      />
      <div className={styles.flightCard}>
        <div className={styles.airlineSection}>
          <img className={styles.siaIcon} alt="" src="/sia.svg" />
          <div className={styles.singaporeAirlines}>Singapore Airlines</div>
        </div>
        <div className={styles.flightDetailsSection}>
          <div className={styles.departureDetails}>
            <div className={styles.am}>8:45 PM</div>
            <div className={styles.sin}>SIN</div>
          </div>
          <div className={styles.flightduration}>
            <img className={styles.flighticon} alt="" src="/flighticon.svg" />
            <div className={styles.h55mNonStop}>15H 10M, 2-stops</div>
          </div>
          <div className={styles.arrivalDetails}>
            <div className={styles.am}>7:55 PM</div>
            <div className={styles.sin1}>LAX</div>
          </div>
        </div>
        <div className={styles.priceSection}>
          <img
            className={styles.priceSectionChild}
            alt=""
            src="/vector-1.svg"
          />
          <b className={styles.s730}>S$ 900</b>
        </div>
      </div>
      <FlightContainer
        turkish="/japan.svg"
        singaporeAirlines="Japan Airlines"
        aM="8:20 PM"
        h55MNonStop="17H 30M, 1-stop"
        aM1="9:50 PM"
        s730="S$ 859"
        propTransform="scale(0.8)"
      />
      <FlightContainer
        turkish="/ana.svg"
        singaporeAirlines="ANA"
        aM="6:35 PM"
        h55MNonStop="19H 15M, 1-stop"
        aM1="9:50 PM"
        s730="S$ 936"
        propTransform="scale(0.8)"
      />
      <FlightContainer
        turkish="/americanairlines.svg"
        singaporeAirlines="American Airlines"
        aM="8:20 PM"
        h55MNonStop="17H 30M, 1-stop"
        aM1="9:50 PM"
        s730="S$ 936"
        propTransform="unset"
      />
      <FlightContainer
        turkish="/turkish.svg"
        singaporeAirlines="Turkish Airlines"
        aM="11:35 PM"
        h55MNonStop="33H 10M, 1-stop"
        aM1="4:45 PM"
        s730="S$ 673"
        propTransform="unset"
      />
      <FlightContainer
        turkish="/japan1.svg"
        singaporeAirlines="Japan Airlines"
        aM="10:25 PM"
        h55MNonStop="26H 45M, 1-stop"
        aM1="9:10 AM"
        s730="S$ 859"
        propTransform="scale(0.8)"
      />
      <div className={styles.primaryButton}>
        <div className={styles.primaryButtonChild} />
        <div className={styles.searchFlights}>Show more results</div>
      </div>
    </div>
  );
};

export default FlightInfoContainer;
