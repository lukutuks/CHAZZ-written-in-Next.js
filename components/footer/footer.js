import React from "react";
import styles from "../../styles/Footer.module.css";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.width25}>
              <div className={styles.footerTitle}>MENIU</div>
              <ul className={styles.footerMenu}>
                <li>
                  <a
                    className={styles.footerLink}
                    href="/apie-chazz"
                    title="CHAZZ - labai  lietuviški daržovių traškučiai, kurie gimsta Trakų rajone. Tikros daržovės. Tikri čipsai. Sužinokite daugiau!"
                  >
                    <span>Apie Chazz</span>
                  </a>
                </li>
                <li>
                  <a
                    className={styles.footerLink}
                    href="/DUK"
                    title="Dažniausiai užduodami klausimai"
                  >
                    <span>D.U.K</span>
                  </a>
                </li>
                <li>
                  <a
                    className={styles.footerLink}
                    href="https://chazzchips.com/lt/kur-rasti-chazz"
                    title="Sužinok, kuriose parduotuvėse gali nusipirkti CHAZZ daržovių traškučių. CHAZZ - Tikros daržovės. Tikri čipsai."
                  >
                    <span>Kur rasti CHAZZ?</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className={styles.width25}>
              <div className={styles.footerTitle}>INFORMACIJA</div>
              <ul className={styles.footerMenu}>
                <li>
                  <a
                    className={styles.footerLink}
                    href="/privatumo-politika"
                    title="Privatumo Politika"
                  >
                    <span>Privatumo Politika</span>
                  </a>
                </li>
                <li>
                  <a
                    className={styles.footerLink}
                    href="/pirkimo-pristatymo-ir-grazinimo-taisykles"
                    title="CHAZZ pirkimo, pristatymo ir grąžinimo taisyklės"
                  >
                    <span>Pirkimo, pristatymo ir grąžinimo taisyklės</span>
                  </a>
                </li>
                <li>
                  <a
                    className={styles.footerLink}
                    href="/kontaktai"
                    title="CHAZZ Kontaktai"
                  >
                    <span>Kontaktai</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className={styles.width25}>
              <div className={styles.footerTitle}>KONTAKTAI</div>
              <div className={styles.imprintText}>
                <p>
                  <strong>
                    <a href="tel:+37060123456">
                      +37060123456
                      <br />
                    </a>
                  </strong>
                  <a href="mail:labas@chazzchips.com">
                    email@emailprovider.com
                    <br />
                  </a>
                  Darbo laikas: I-V, 9.00-18-00
                </p>
                <p>
                  <b>
                    Adreso g. 1, Apskritis,
                    <br />
                  </b>
                  LT-12345 Trakų r., Lietuva
                </p>
                <p>
                  <b>
                    COMPANY, UAB
                    <br />
                  </b>
                  Įm.k.: 123456789
                  <br />
                  PVM kodas: LT100010001000
                  <br />
                  Maisto tvarkymo subjekto
                  <br />
                  atpažinimo numeris 123456789
                </p>
              </div>
              <div className={styles.marginTop40}>
                <div className={styles.socialTitle}>Sek mus!</div>
                <ul className={styles.socialLinks}>
                  <li className={styles.facebook}>
                    <a
                      href="https://www.facebook.com/CHAZZ-CHIPS-2345492985689778"
                      rel="nofollow"
                      target="_blank"
                    ></a>
                  </li>
                  <li className={styles.instagram}>
                    <a
                      href="https://www.instagram.com/chazz.lt/"
                      rel="nofollow"
                      target="_blank"
                    ></a>
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.width25}>
              <div className={styles.footerTitle}>MOKĖJIMO BŪDAI</div>
              <ul className={styles.footerPaymentLogos}>
                <li>
                    <img src="../images/mastercard-logo.jpeg" alt-width="39" height="30"/>
                </li>
                <li>
                    <img src="../images/mastercard.jpeg" alt-width="76" height="26"/>
                </li>
                <li>
                    <img src="../images/visa-verified.jpeg" alt-width="60" height="34"/>
                </li>
                <li>
                    <img src="../images/visa.jpeg" alt-width="58" height="19"/>
                </li>
                <li className={styles.paysera}>
                    <img src="../images/paysera.jpeg" alt-width="58" height="19"/>
                </li>
              </ul>
            </div>  
          </div>
            <div className={styles.row}></div>
        </div>
        <div className={`${styles.row} ${styles.copyrow}`}>
            <div className={styles.container}>
            <div className={styles.reserved}>
                        All rights reserved by chazzchips.com. Project was built for educational purposes only.
                </div>

            </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
