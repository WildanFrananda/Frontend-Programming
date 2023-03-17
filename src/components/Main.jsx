// Import component Hello.
import Hello from "./Hello"

// Membuat component Main.
function Main() {
    return (
        <main>
            <Hello nama="Wildan Frananda" jurusan="Teknik Informatika" />
            <Hello nama="Salsabilla Zandini" jurusan="Sistem Informasi" />
            <Hello nama="Vinka Salzabilla" jurusan="Bisnis Digital" />
        </main>
    )
}

export default Main