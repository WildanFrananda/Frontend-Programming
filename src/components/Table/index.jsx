import { useState } from "react"
import StyledTable from "./Table.styled"

function Table({ data }) {
    const [showAll, setShowAll] = useState(false)
    let displayedData = data

    if(!showAll) {
        displayedData = data.slice(0, 5)
    }

    function toggleShowAll() {
        setShowAll(!showAll)
    }

    return (
        <StyledTable>
            <thead>
                <tr>
                    <th>Provinces</th>
                    <th>Cases</th>
                    <th>Recovered</th>
                    <th>Hospitalized</th>
                    <th>Deaths</th>
                </tr>
            </thead>
            <tbody>
                {displayedData.map((province, index) => (
                    <tr key={index}>
                        <td>{province.kota || province.name}</td>
                        <td>{province.kasus || province.numbers.confirmed}</td>
                        <td>{province.sembuh || province.numbers.recovered}</td>
                        <td>{province.dirawat || province.numbers.treatments}</td>
                        <td>{province.meninggal || province.numbers.death}</td>
                    </tr>
                ))}
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan="5">
                        <div className="button-container">
                            <button
                                onClick={toggleShowAll}
                            >
                                {showAll ? "Fold Table" : "Show All"}
                            </button>
                        </div>
                    </td>
                </tr>
            </tfoot>
        </StyledTable>
    )
}

export default Table