import StyledProvinceTable from "./ProvinceTable.styled"
import Table from "../Table"

function ProvinceTable(props) {
    const { data } = props

    return (
        <StyledProvinceTable>
            <div className="title">
                <h1>Province</h1>
                <h3>Covid Data by Province</h3>
            </div>
            <Table data={data} />
        </StyledProvinceTable>
    )
}


export default ProvinceTable
