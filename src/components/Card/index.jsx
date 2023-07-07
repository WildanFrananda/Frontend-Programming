import StyledCard from "./Card.styled"

function Card(props) {
    const { status, total, color } = props
    return (
        <StyledCard>
            <div className="card">
                <h3>{status.charAt(0).toUpperCase() + status.slice(1)}</h3>
                <h3 className="card__value" style={{ color: color }}>{total.toLocaleString("id-ID")}</h3>
            </div>
        </StyledCard>
    )
}

export default Card