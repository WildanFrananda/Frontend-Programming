import StyledGlobal from "./Global.styled"
import Card from "../Card"

function Global(props) {
    // Desctructing data
    const { situation, title, subtitle } = props

    return (
        <StyledGlobal>
            <div className="global">
                <h1>{title} Situation</h1>
                <h3>Covid Data Based On {subtitle}</h3>
            </div>
            <div className="card__container">
                {situation
                    .map((cases, index) => (
                        <Card
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
        </StyledGlobal>
    )
}

export default Global