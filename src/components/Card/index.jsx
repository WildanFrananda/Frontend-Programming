import StyledCard from "./Card.styled"

function Card(props) {
    const {status, total, color} = props
    return (
        <StyledCard>
            <div className="card">
                <h3>{status}</h3>
                <h3 className="card__value" style={{ color: color }}>{total}</h3>
            </div>
        </StyledCard>
    )
}

export default Card