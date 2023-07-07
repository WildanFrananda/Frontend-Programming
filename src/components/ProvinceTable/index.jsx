import StyledProvinceTable from "./ProvinceTable.styled"
import Table from "../Table"

function ProvinceTable(props) {
    const { title, data } = props

    return (
        <StyledProvinceTable>
            <div className="title">
                <h1>{title} Province</h1>
                <h3>Covid Data by Province</h3>
            </div>
            <Table data={data} />
        </StyledProvinceTable>
    )
}


export default ProvinceTable
