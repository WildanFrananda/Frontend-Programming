// Membuat array names
const names = ["Michael", "Hannah", "Jonas"];

/**
 * Menjalankan method map.
 * Method map untuk transform/mengubah data.
 */
const formattedName = names.map(function (name) {
  return `Mr/Mrs. ${name}`;
});

console.log(formattedName);
