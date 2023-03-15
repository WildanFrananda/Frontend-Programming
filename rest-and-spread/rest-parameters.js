/**
 * Membuat fungsi sum.
 * Menjumlahkan semua bilangan.
 * Menggunakan rest parameter.
 */
function sum(...numbers) {
  let hasil = 0;

  for (const number of numbers) {
    hasil += number;
  }

  return hasil;
}

console.log(sum(1, 2, 3, 4, 5));

/**
 * Membuat fungsi showFamilies.
 * Menampilkan anggota keluarga.
 * Parameter ketiga menggunakan rest parameters.
 */

function showFamilies(husband, wife, ...children) {
  console.log(`Suami: ${husband}`);
  console.log(`Istri: ${wife}`);

  for (const child of children) {
    console.log(`Anak: ${child}`);
  }
}

showFamilies("Mikel", "Hannah", "Jonas", "Martha", "Magnuz");

/**
 * Membuat fungsi sum.
 * Menjumlahkan semua bilangan.
 */

function sum(a, b, c, d, e) {
  const hasil = a + b + c + d + e;
  return hasil;
}

sum(1, 2, 3, 4, 5);
