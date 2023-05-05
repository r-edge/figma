import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./header.module.css";
const Header: NextPage = () => {
  const router = useRouter();

  const onFickleflightLogoContainerClick = useCallback(() => {
    router.push("/homepage");
  }, [router]);

  const onWebScreenClick = useCallback(() => {
    router.push("/homepage");
  }, [router]);

  const onExploreTextClick = useCallback(() => {
    router.push("/homepage");
  }, [router]);

  const onSearchTextClick = useCallback(() => {
    router.push("/results-page");
  }, [router]);

  return (
    <header className={styles.topHeader}>
      <div className={styles.topContainer}>
        <div
          className={styles.fickleflightLogo}
          onClick={onFickleflightLogoContainerClick}
        >
          <div className={styles.symbols}>
            <img
              className={styles.webScreenIcon}
              alt=""
              src="/webscreen.svg"
              onClick={onWebScreenClick}
            />
          </div>
        </div>
        <div className={styles.navigationRight}>
          <div className={styles.navigationMenu}>
            <div className={styles.explore} onClick={onExploreTextClick}>
              Explore
            </div>
            <div className={styles.explore} onClick={onSearchTextClick}>
              Search
            </div>
            <button className={styles.hotels}>Hotels</button>
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
  );
};

export default Header;
