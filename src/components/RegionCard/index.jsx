import StyledRegionCard from "./RegionCard.styled"

function RegionCard(props) {
    const { status, total, color } = props
    return (
        <StyledRegionCard>
            <div className="card">
                <h3>{status.charAt(0).toUpperCase() + status.slice(1)}</h3>
                <div className="region__left">
                    <h3 className="card__value" style={{ color: color }}>
                        {total.toLocaleString("en-US", {useGrouping: true,}).replace(/,/g, '.')}
                    </h3>
                </div>
            </div>
        </StyledRegionCard>
    )
}

export default RegionCard