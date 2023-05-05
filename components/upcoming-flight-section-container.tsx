import type { NextPage } from "next";
import { useCallback } from "react";
import RecentSearchesContainer from "./recent-searches-container";
import { useRouter } from "next/router";
import styles from "./upcoming-flight-section-container.module.css";
const UpcomingFlightSectionContainer: NextPage = () => {
  const router = useRouter();

  const onHotelClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className={styles.upcomingFlightSection}>
      <div className={styles.upcomingFlightSection1}>
        <b className={styles.recentSearches}>Recent Searches</b>
        <div className={styles.flightDetails}>
          <div className={styles.recentSearches1}>
            <RecentSearchesContainer
              sIN="SIN"
              duration="/duration.svg"
              lAX="LAX"
              departOn="Depart on: "
              sep2021="7 Sep 2021"
            />
            <RecentSearchesContainer
              sIN="MY"
              duration="/duration1.svg"
              lAX="DUB"
              departOn="Depart on:"
              sep2021=" 9 Sep 2021"
            />
          </div>
          <div className={styles.prepareMenu}>
            <div className={styles.recentSearches}>Prepare for your trip</div>
            <div className={styles.tripMenus}>
              <button className={styles.hotel} onClick={onHotelClick}>
                <img
                  className={styles.hotelIcon}
                  alt=""
                  src="/hotel-icon.svg"
                />
                <div className={styles.hotel1}>Hotel</div>
              </button>
              <button className={styles.hotel}>
                <div className={styles.hotelIcon}>
                  <div className={styles.background} />
                  <img className={styles.ticketIcon} alt="" src="/ticket.svg" />
                </div>
                <div className={styles.attractions1}>Attractions</div>
              </button>
              <button className={styles.hotel}>
                <img className={styles.hotelIcon} alt="" src="/eats-icon.svg" />
                <div className={styles.attractions1}>Eats</div>
              </button>
              <button className={styles.hotel}>
                <div className={styles.hotelIcon}>
                  <div className={styles.background1} />
                  <img className={styles.trainIcon} alt="" src="/vector4.svg" />
                </div>
                <div className={styles.attractions1}>Commute</div>
              </button>
              <button className={styles.hotel}>
                <div className={styles.taxiIcon}>
                  <div className={styles.background2} />
                  <img className={styles.taxiIcon1} alt="" src="/vector5.svg" />
                </div>
                <div className={styles.taxi1}>Taxi</div>
              </button>
              <button className={styles.hotel}>
                <div className={styles.hotelIcon}>
                  <div className={styles.background3} />
                  <img className={styles.movieIcon} alt="" src="/vector6.svg" />
                </div>
                <div className={styles.attractions1}>Movies</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingFlightSectionContainer;
