/**
 * Membuat component Hello.
 * Component Hello menerima inputan: props.
 *
 */
function Hello(props) {
    // Melakukan destructing props (object)

    return (
        <div className="hello">
            <h2>Hello React</h2>
            <p>Saya {props.nama} - {props.jurusan}</p>
        </div>
    )
}

export default Hello