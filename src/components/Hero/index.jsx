// Import Styles and image
import styles from "./Hero.module.css"
import image from "../assets/Hero.svg"

function Hero() {
    return (
        <>
            <div className={styles.container}>
                <section className={styles.hero}>
                    <div className={styles.hero__left}>
                        <h1 className={styles.hero__title}>Covid ID</h1>
                        <h3 className={styles.hero__subtitle}>
                        Monitoring Perkembangan Covid
                        </h3>
                        <p className={styles.hero__description}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.
                        </p>
                        <button className={styles.hero__button}>Vaccine</button>
                    </div>
                    <div className={styles.hero__right}>
                        <img 
                        className={styles.hero__image}
                        src={image}
                        alt="doctor"
                        />
                    </div>
                </section>
            </div>
        </>
    )
}

export default Hero