// Import Styles and data
import styles from "./Global.module.css"
import Card from "../Card"
import data from "../../utils/constants/indonesia"

function Global() {
    // Desctructing data
    const {indonesia} = data

    return (
        <div className={styles.container}>
            <div className={styles.global}>
                <h1 className={styles.title}>Indonesia</h1>
                <h3 className={styles.subtitle}>Data Covid Berdasarkan Indonesia</h3>
            </div>
            <div className={styles.card__container}>
                {indonesia.map((cases, index) => (
                <Card
                    key={index}
                    status={cases.status}
                    total={cases.total}
                    color={
                    index === 0 ? "#06D6A0" : index === 1 ? "#118AB2" : "#EF476F"
                    }
                />
                ))}
            </div>
        </div>
    )
}

export default Global