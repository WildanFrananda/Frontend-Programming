import styles from "./ProvinceTable.module.css";


function ProvinceTable(props) {
    const {data} = props;

    return (
        <div className={styles.container}>
        <div className={styles.provinsi__title}>
            <h1 className={styles.title}>Provinsi</h1>
            <h3 className={styles.subtitle}>Data Covid Berdasarkan Provinsi</h3>
        </div>
        <table>
            <thead>
            <tr>
                <th>Kota</th>
                <th>Kasus</th>
                <th>Sembuh</th>
                <th>Meninggal</th>
                <th>Dirawat</th>
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
        </div>
    );
}


export default ProvinceTable;
