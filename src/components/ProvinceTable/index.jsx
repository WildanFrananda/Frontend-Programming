import styles from "./ProvinceTable.module.css"
import Table from "../Table"

function ProvinceTable(props) {
    const {data} = props;

    return (
        <div className={styles.container}>
            <div className={styles.provinsi__title}>
                <h1 className={styles.title}>Provinsi</h1>
                <h3 className={styles.subtitle}>Data Covid Berdasarkan Provinsi</h3>
            </div>
            <Table data={data} />
        </div>
    )
}


export default ProvinceTable
