import StyledRegion from "./Region.styled"
import RegionCard from "../RegionCard"

function Region(props) {
    const { region } = props

    return (
        <StyledRegion>
            <div className="global__title">
                <h1 className="title">Situation by Regions</h1>
                <h3 className="subtitle">Covid Data Based On Region</h3>
            </div>
            <div className="region__container">
                {region
                    .map((item, index) => (
                        <RegionCard
                            key={index}
                            name={item.name}
                            numbers={item.numbers}
                        />
                    )
                )}
            </div>
        </StyledRegion>
    )
}

export default Region