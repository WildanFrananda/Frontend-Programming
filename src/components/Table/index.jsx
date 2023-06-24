import styles from "./Table.module.css"

function Table({ data }) {
    return (
        <>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Provinces</th>
                        <th>Positive</th>
                        <th>Recovered</th>
                        <th>Death</th>
                        <th>Treated</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((province) => (
                        <tr key={province.kota}>
                            <td>{province.kota}</td>
                            <td>{province.kasus}</td>
                            <td>{province.sembuh}</td>
                            <td>{province.meninggal}</td>
                            <td>{province.dirawat}</td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="5">Total Province: {data.total_province}</td>
                    </tr>
                    <tr>
                        <td colSpan="5">Last Update: {data.last_update}</td>
                    </tr>
                </tfoot>
            </table>
        </>
    )
}

export default Table