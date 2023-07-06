import StyledRegion from "./Region.styled"
import RegionCard from "../RegionCard"

function Region(props) {
    // Desctructing data
    const { situation, title, subtitle } = props

    return (
        <StyledRegion>
            <div className="region">
                <h1>{title} Situation</h1>
                <h3>Data Covid Berdasarkan {subtitle}</h3>
            </div>
            <div className="card__container">
                {situation
                    .map((cases, index) => (
                        <RegionCard
                            key={index}
                            status={cases.status}
                            total={cases.total}
                            color={
                            index === 0 ? "#06D6A0" : index === 1 ? "#118AB2" : "#EF476F"
                            }
                        />
                    )
                )}
            </div>
        </StyledRegion>
    )
}

export default Region