import react from "react";
import styles from "../styles/Head.module.css";

export default function Head(){
    return (
        <div className={styles.flexBox}>
            <div className={`${styles.icon}`}>
                <h1 className={`${styles.item}`}>
                    Hariba
                </h1>
            </div>

            <div className={`${styles.flexBox} ${styles.menu}`}>
                <h4 className={styles.item}>
                    Accueil
                </h4>
                <h4 className={styles.item}>
                    Boutique
                </h4>
                <h4 className={styles.item}>
                    Notre histoire
                </h4>
                <h4 className={styles.item}>
                    Nous Contacter
                </h4>
            </div>

            <div className={`${styles.flexBox} ${styles.login}`}>
                <h4 className={styles.item}>
                    Mon compte
                </h4>
                <button className={`${styles.item}, ${styles.btn}`}>
                    Mon compte
                </button>
            </div>

        </div>
    )
}