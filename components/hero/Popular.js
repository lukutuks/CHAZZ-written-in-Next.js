import React from 'react'
import styles from "../../styles/Hero.module.css";

const Popular = () => {
  return (
    <div className={styles.container}>
        <div className={styles.row}>
            <div className={`${styles.content} ${styles.section} `}>
                <div className={styles.row}>
                  <h2 className={styles.sectionTitle}>
                    POPULIARIAUSI
                  </h2>
                  <div className={styles.products}>

                        {/* PRODUCT SCHEME */}

                  </div>
                  <div className={`${styles.row} ${styles.alignCenter} ${styles.marginTop50} `}>
                    <a className={styles.greenBtn} href='/parduotuve'>
                      
                      <span>Pilnas asortimentas</span>
                    </a>
                  </div>
                </div>
                <div className={styles.row}>
                  <h2 className={styles.sectionTitle}>
                    Rekomenduojami
                  </h2>
                  <div className={styles.products}>

                        {/* PRODUCT SCHEME */}

                  </div>
                  <div className={`${styles.row} ${styles.alignCenter} ${styles.marginTop50} `}>
                    <a className={styles.greenBtn} href='/parduotuve'>
                      
                      <span>Pilnas asortimentas</span>
                    </a>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Popular