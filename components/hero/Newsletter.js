import React from 'react'
import styles from "../../styles/Hero.module.css";


const Newsletter = () => {
  return (
    <div className={styles.container}>
        <div className={styles.emailSubscription}>
            <div className={styles.cloudText}>
                "15% nuolaida"
                <br/>
                "Vienam apsipirkimui?"
            </div>
            <form action='/' className={styles.newsletterForm} method="POST">
                        <div className={styles.newsletterText}>
                            <h4>Draugaujam?</h4>
                            "Užsisakyk naujienlaiškį, gauk " 
                            <strong>15% nuolaidą vienam apsipirkimui</strong>
                            " ir džiazuok su CHAZZ naujienomis bei skaniausiais pasiūlymais pirmas!"
                        </div>
                        <div className={styles.newsletterInput}>
                            <input type="text" name="email" placeholder="Tavo el. paštas" />
                        </div>
                    <div className={styles.newsletterError}></div>
                    <div className={`${styles.marginTop30} ${styles.alignCenter} `}>
                        <button className={styles.whiteBtn}>
                            <span>Prenumeruoti</span>
                        </button>
                    </div>
            </form>
        </div>
    </div>
  )
}

export default Newsletter