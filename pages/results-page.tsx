import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import SearchFormContainer from "../components/search-form-container";
import FilterContainer from "../components/filter-container";
import FlightInfoContainer from "../components/flight-info-container";
import BookingContainer from "../components/booking-container";
import NewsletterContainer from "../components/newsletter-container";
import styles from "./results-page.module.css";
const ResultsPage: NextPage = () => {
  const router = useRouter();

  const onFickleflightLogoClick = useCallback(() => {
    router.push("/homepage");
  }, [router]);

  const onExploreTextClick = useCallback(() => {
    router.push("/homepage");
  }, [router]);

  const onHotelsTextClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className={styles.resultsPage}>
      <header className={styles.topHeader}>
        <div className={styles.topContainer}>
          <button
            className={styles.fickleflightLogo}
            onClick={onFickleflightLogoClick}
          >
            <img className={styles.symbolsIcon} alt="" src="/webscreen.svg" />
          </button>
          <div className={styles.navigationRight}>
            <div className={styles.navigationMenu}>
              <div className={styles.explore} onClick={onExploreTextClick}>
                Explore
              </div>
              <button className={styles.search}>Search</button>
              <div className={styles.explore} onClick={onHotelsTextClick}>
                Hotels
              </div>
              <button className={styles.offers}>Offers</button>
            </div>
            <div className={styles.accountSection}>
              <img
                className={styles.hamburgerMenuIcon}
                alt=""
                src="/notification.svg"
              />
              <img
                className={styles.notificationBellIcon}
                alt=""
                src="/notification1.svg"
              />
              <img
                className={styles.unsplashd1upkifd04aIcon}
                alt=""
                src="/top_avatar@2x.png"
              />
            </div>
          </div>
        </div>
      </header>
      <SearchFormContainer />
      <div className={styles.searchResults}>
        <FilterContainer />
        <div className={styles.resultsSection}>
          <FlightInfoContainer />
          <div className={styles.recentlyBooked}>
            <div className={styles.recentlyBookedTitle}>
              <b className={styles.results}>Recently booked</b>
              <img
                className={styles.recentlyBookedTitleChild}
                alt=""
                src="/vector-21.svg"
              />
            </div>
            <div className={styles.bookingCards}>
              <BookingContainer
                airlineLogo="/icon.svg"
                singaporeAirlines="Singapore Airlines"
                price="$1128"
                depCode="SIN"
                depName="Singapore"
                arrCode="LAX"
                arrName="Los Angeles"
                flightClass="Economy"
                numPeople="2 Adults"
                expedia="Expedia"
                timeAgo="1s ago!"
              />
              <BookingContainer
                airlineLogo="/icon1.svg"
                singaporeAirlines="American Airlines"
                price="$1024"
                depCode="SFO"
                depName="San Francisco"
                arrCode="SIN"
                arrName="Singapore"
                flightClass="First Class"
                numPeople="1 Adults"
                expedia="Kayak"
                timeAgo="2s ago!"
                propTextAlign="right"
              />
              <BookingContainer
                airlineLogo="/icon2.svg"
                singaporeAirlines="Japan Airlines"
                price="$2996"
                depCode="PHX"
                depName="Phoenix"
                arrCode="DXB"
                arrName="Dubai"
                flightClass="Economy"
                numPeople="3 Adults"
                expedia="Skyscanner"
                timeAgo="3s ago!"
                propTextAlign="left"
              />
              <div className={styles.showMore}>
                <div className={styles.showMore1}>Show more</div>
                <img className={styles.iconBack} alt="" src="/icon--back.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <NewsletterContainer />
    </div>
  );
};

export default ResultsPage;
