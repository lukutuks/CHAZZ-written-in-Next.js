import React from 'react'
import styles from "../../styles/Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.hero}>
        <div className={styles.heroSlider}>
            <div className={styles.container}>
                <div className={styles.heroSliderContainer}>
                    <ul className={`${styles.rslides} ${styles.slidesSlider} `}>
                        <li className={styles.slide}>
                            <a href='/naujienos'>
                                <img src='../images/hero.png' alt='hero picture' alt-width="1200" height="540" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero