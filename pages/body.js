import react from "react";
import Item from "./Item.js"
import styles from "../styles/Body.module.css";

export default function Body({errorCode, data = []}){

    console.log("data : "+data)
    return (
        <div>
            <div className={styles.TextBox}>
                <h1 className={styles.Text}>
                    Hariba
                </h1>
                <h4 className={styles.Text}>
                    Artisans depuis 2020
                </h4>
            </div>

            <div className={styles.Grid}>
                {
                    data.map(e =>{
                        <Item text={e.Tilte} price={e.Price}/>
                    })
                }
                
            </div>
        </div>
    )
}
