// Import Styles
import styles from "./Footer.module.css"

function Footer() {
    return (
        <>
        <div className={styles.container}>
            <footer className={styles.footer}>
                <div>
                    <h1 className={styles.footer__title}>Covid ID</h1>
                    <h3 className={styles.footer__description}>
                    Developed by Wildan Frananda
                    </h3>
                </div>
            </footer>
        </div>
        </>
    )
}

export default Footer
