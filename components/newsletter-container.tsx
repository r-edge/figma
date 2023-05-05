import type { NextPage } from "next";
import WeeklyUpdatesContainer from "./weekly-updates-container";
import styles from "./newsletter-container.module.css";
const NewsletterContainer: NextPage = () => {
  return (
    <div className={styles.footerSection}>
      <WeeklyUpdatesContainer
        newsletterSectionBackgrou="/newsletter-section-background1@2x.png"
        logo="/logo1.svg"
        socialIcons="/social-icons1.svg"
      />
    </div>
  );
};

export default NewsletterContainer;
