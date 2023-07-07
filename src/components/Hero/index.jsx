import StyledHero from "./Hero.styled"
import image from "../assets/Hero.png"

function Hero() {
    return (
        <>
            <StyledHero>
                <section>
                    <div className="hero__left">
                        <h1>Covid ID</h1>
                        <h3>
                        Monitoring the COVID-19 Progress
                        </h3>
                        <p>
                        Stay informed about the latest developments of COVID-19. We provide real-time updates, statistics, and resources to help you navigate through these challenging times. Together, we can overcome this global pandemic.
                        </p>
                        <button>Vaccine</button>
                    </div>
                    <div className="hero__right">
                        <img 
                        src={image}
                        alt="doctor"
                        />
                    </div>
                </section>
            </StyledHero>
        </>
    )
}

export default Hero