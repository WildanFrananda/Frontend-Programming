// Import Styles
import styles from "./Card.module.css"

function Card(props) {
    const {status, total, color} = props
    return (
        <div className={styles.card}>
            <h3 className={styles.card__title}>{status}</h3>
            <h3 className={styles.card__value} style={{ color: color }}>{total}</h3>
        </div>
    )
}

export default Card