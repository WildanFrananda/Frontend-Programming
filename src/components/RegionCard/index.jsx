import StyledRegionCard from "./RegionCard.styled"
import ProtectionMask from "../assets/ProtectionMask.png"
import Smile from "../assets/Smile.png"
import Skull from "../assets/Skull.png"

function RegionCard(props) {
    const { name, numbers } = props

    return (
        <StyledRegionCard>
            <div>
                <h1 className="card__title">{name}</h1>
            </div>
            <section>
                <div className="hero__left">
                    <p>Confirmed</p>
                    <h2 className="confirm">{numbers.confirmed.toLocaleString("id-ID")}</h2>
                    <p>Recovered</p>
                    <h2 className="recovered">{numbers.recovered.toLocaleString("id-ID")}</h2>
                    <p>Death</p>
                    <h2 className="death">{numbers.death.toLocaleString("id-ID")}</h2>
                </div>
                <div>
                    <img src={ProtectionMask} alt="Confirmed" />
                    <img src={Smile} alt="" />
                    <img src={Skull} alt="" />
                </div>
            </section>
        </StyledRegionCard>
    )
}

export default RegionCard