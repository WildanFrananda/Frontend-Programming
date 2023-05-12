import styles from "./index.module.css"

function Container({childern}) {
    return (
        <div className={styles.container}>
            {childern}
        </div>
    )
}

export default Container