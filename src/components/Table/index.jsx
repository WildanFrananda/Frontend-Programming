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
                {displayedData
                    .map((province, index) => (
                        <tr key={index}>
                            <td>{province.kota}</td>
                            <td>{province.kasus.toLocaleString("id-ID")}</td>
                            <td>{province.sembuh.toLocaleString("id-ID")}</td>
                            <td>{province.dirawat.toLocaleString("id-ID")}</td>
                            <td>{province.meninggal.toLocaleString("id-ID")}</td>
                        </tr>
                    )
                )}
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan="5">
                        <div className="button-container">
                            <button
                                onClick={toggleShowAll}
                            >
                                {showAll ? "Show Less" : "Show All"}
                            </button>
                        </div>
                    </td>
                </tr>
            </tfoot>
        </StyledTable>
    )
}

export default Table