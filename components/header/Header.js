import React from "react";
import styles from "../../styles/Header.module.css";
import { BsFillQuestionCircleFill, BsFillTelephoneFill } from "react-icons/bs";
import { HiMail, HiLocationMarker } from "react-icons/hi";
const header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerline}>
        <div className={styles.container}>
          <div className={styles.headerlineItems}>
            <a className={styles.duk}>DUK</a>
            <a className={styles.bold}>+370 695 75 304</a>
            <a className={styles.email}>labas@chazzchips.com</a>
            <a className={styles.locations}>Parduotuvės, kuriose rasi CHAZZ</a>
          </div>
        </div>
      </div>
      <div className={styles.headerNAV}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.logofield}>
              <a href="/">
                <h1>
                  <img
                    className={styles.logo}
                    src="../images/logo.jpeg"
                    alt="logo"
                  />
                  <div className={styles.logotext}>
                    Tikros daržovės. Tikri čipsai.
                  </div>
                </h1>
              </a>
            </div>
            <div className={styles.NavContainer1000}>
              <div className={styles.menu}>
                <ul data-depth="0">
                  <li className={styles.category}>
                    <a href="/parduotuve">
                      <span>PARDUOTUVĖ</span>
                    </a>
                  </li>
                  <li className={styles.category}>
                    <a href="/dovanos">
                      <span>DOVANOS</span>
                    </a>
                  </li>
                  <li className={styles.cms}>
                    <a href="/blog">
                      <span>ĮDOMYBĖS</span>
                    </a>
                  </li>
                  <li className={styles.cms}>
                    <a href="/apie-chazz">
                      <span>APIE MUS</span>
                    </a>
                  </li>
                </ul>
              </div>
              <a href="/kur-rasti-chazz" className={styles.locationIcon}>
                <span>Kur rasti CHAZZ?</span>
              </a>
              <div className={styles.cartWrapper}>
                <div className={styles.cartPreview}>
                  <div className={styles.CartHeader}>
                    <span className={styles.cartout}>
                      <span className={styles.cartText}>Krepšelis</span>
                      <span className={styles.cartCounter}>0</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className={styles.userInfo}>
                <a href="/myprofile"></a>
              </div>
              <div className={styles.openSearch}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default header;
