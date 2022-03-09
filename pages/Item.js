import react from "react";
import styles from '../styles/Item.module.css'

export default function Item({text : texte = "new text", price : prix = "0"}) {
    return (
        <div className={styles.item}>
            <div className={styles.background}>
                
            </div>
            <div className={styles.alignText}>
                <h4 className={styles.text}>
                    {texte}   
                </h4>
                <h4 className={styles.price}>
                    $ {prix}
                </h4>
            </div>
        </div>
    )
}