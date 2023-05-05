import type { NextPage } from "next";
import { useState, useCallback } from "react";
import MatterhornPopup from "./matterhorn-popup";
import PortalPopup from "./portal-popup";
import { useRouter } from "next/router";
import HotelCardContainer from "./hotel-card-container";
import styles from "./popular-stays-form.module.css";
const PopularStaysForm: NextPage = () => {
  const [isMatterhornPopupOpen, setMatterhornPopupOpen] = useState(false);
  const [isMatterhornPopup1Open, setMatterhornPopup1Open] = useState(false);
  const [isMatterhornPopup2Open, setMatterhornPopup2Open] = useState(false);
  const [isMatterhornPopup3Open, setMatterhornPopup3Open] = useState(false);
  const router = useRouter();

  const openMatterhornPopup = useCallback(() => {
    setMatterhornPopupOpen(true);
  }, []);

  const closeMatterhornPopup = useCallback(() => {
    setMatterhornPopupOpen(false);
  }, []);

  const openMatterhornPopup1 = useCallback(() => {
    setMatterhornPopup1Open(true);
  }, []);

  const closeMatterhornPopup1 = useCallback(() => {
    setMatterhornPopup1Open(false);
  }, []);

  const openMatterhornPopup2 = useCallback(() => {
    setMatterhornPopup2Open(true);
  }, []);

  const closeMatterhornPopup2 = useCallback(() => {
    setMatterhornPopup2Open(false);
  }, []);

  const openMatterhornPopup3 = useCallback(() => {
    setMatterhornPopup3Open(true);
  }, []);

  const closeMatterhornPopup3 = useCallback(() => {
    setMatterhornPopup3Open(false);
  }, []);

  const onViewAllStaysButtonClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <>
      <div className={styles.popularStays}>
        <div className={styles.popularStaysHeader}>
          <div className={styles.popularStaysTitle}>
            <b className={styles.popularStays1}>Popular Stays</b>
          </div>
          <button
            className={styles.viewAllStaysButton}
            onClick={onViewAllStaysButtonClick}
          >
            <div className={styles.viewAllStays}>View all stays</div>
            <img
              className={styles.arrowRightIcon}
              alt=""
              src="/arrowright4.svg"
            />
          </button>
        </div>
        <div className={styles.hotelCards}>
          <HotelCardContainer
            matterhornSuitesImage="/unsplashrlwe8f8anoc@2x.png"
            entireBungalow="Entire bungalow"
            matterhornSuites="Matterhorn Suites"
            night="$575/night"
            reviews="(60 reviews)"
            prop="4.9"
            vector="/vector7.svg"
            openMatterhornPopup={openMatterhornPopup}
          />
          <HotelCardContainer
            matterhornSuitesImage="/unsplashtsn8bpopveo@2x.png"
            entireBungalow="2-Story beachfront suite"
            matterhornSuites="Discovery Shores"
            night="$360/night"
            reviews="(116 reviews)"
            prop="4.8"
            vector="/vector8.svg"
            propFlex="1"
            propGap="11px"
            propWidth="37.54%"
            propRight="62.46%"
            openMatterhornPopup={openMatterhornPopup1}
          />
          <HotelCardContainer
            matterhornSuitesImage="/unsplashrlwe8f8anoc1@2x.png"
            entireBungalow="Single deluxe hut"
            matterhornSuites="Arctic Hut "
            night="$420/night"
            reviews="(78 reviews)"
            prop="4.7"
            vector="/vector9.svg"
            propFlex="1"
            propGap="5px"
            propWidth="37.58%"
            propRight="62.42%"
            openMatterhornPopup={openMatterhornPopup2}
          />
          <HotelCardContainer
            matterhornSuitesImage="/unsplashyqrybvxug5q@2x.png"
            entireBungalow="Deluxe King Room"
            matterhornSuites="Lake Louise Inn"
            night="$244/night"
            reviews="(63 reviews)"
            prop="4.6"
            vector="/vector10.svg"
            propFlex="unset"
            propGap="11px"
            propWidth="37.54%"
            propRight="62.46%"
            openMatterhornPopup={openMatterhornPopup3}
          />
        </div>
        <div className={styles.mobileViewAllStays}>
          <div className={styles.viewAllStays1}>View all stays</div>
          <img
            className={styles.arrowRightIcon}
            alt=""
            src="/arrowright5.svg"
          />
        </div>
      </div>
      {isMatterhornPopupOpen && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.3)"
          placement="Centered"
          onOutsideClick={closeMatterhornPopup}
        >
          <MatterhornPopup onClose={closeMatterhornPopup} />
        </PortalPopup>
      )}
      {isMatterhornPopup1Open && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.3)"
          placement="Centered"
          onOutsideClick={closeMatterhornPopup1}
        >
          <MatterhornPopup onClose={closeMatterhornPopup1} />
        </PortalPopup>
      )}
      {isMatterhornPopup2Open && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.3)"
          placement="Centered"
          onOutsideClick={closeMatterhornPopup2}
        >
          <MatterhornPopup onClose={closeMatterhornPopup2} />
        </PortalPopup>
      )}
      {isMatterhornPopup3Open && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.3)"
          placement="Centered"
          onOutsideClick={closeMatterhornPopup3}
        >
          <MatterhornPopup onClose={closeMatterhornPopup3} />
        </PortalPopup>
      )}
    </>
  );
};

export default PopularStaysForm;
