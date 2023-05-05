import type { NextPage } from "next";
import DestinationContainer from "./destination-container";
import styles from "./popular-destinations-main.module.css";
const PopularDestinationsMain: NextPage = () => {
  return (
    <div className={styles.popDestinationsMain}>
      <div className={styles.destinationsTitles}>
        <div className={styles.titleContainer}>
          <b className={styles.planYourNext}>Plan your next trip</b>
          <b className={styles.mostPopularDestinations}>
            Most Popular Destinations
          </b>
        </div>
        <button className={styles.viewAllTop}>
          <div className={styles.viewAllDestinations}>
            View all destinations
          </div>
          <img className={styles.arrowRightIcon} alt="" src="/arrowright.svg" />
        </button>
      </div>
      <div className={styles.cardsContainer}>
        <DestinationContainer
          parisImage="/parisimage@2x.png"
          paris="Paris"
          prop="$699"
        />
        <DestinationContainer
          parisImage="/greeceimage@2x.png"
          paris="Greece"
          prop="$1079"
          propWidth="99.92px"
          propDisplay="inline-block"
          propWidth1="unset"
          propLeft="47.39px"
        />
        <DestinationContainer
          parisImage="/norwayimage@2x.png"
          paris="Norway"
          prop="$895"
          propWidth="90.92px"
          propDisplay="inline-block"
          propWidth1="90.92px"
          propLeft="38.39px"
        />
        <DestinationContainer
          parisImage="/tuscanyimage@2x.png"
          paris="Tuscany"
          prop="$1245"
          propWidth="100.62px"
          propDisplay="inline-block"
          propWidth1="100.62px"
          propLeft="48.09px"
        />
      </div>
      <div className={styles.viewAllBottom}>
        <div className={styles.viewAllDestinations1}>View all destinations</div>
        <img className={styles.arrowRightIcon} alt="" src="/arrowright1.svg" />
      </div>
    </div>
  );
};

export default PopularDestinationsMain;
