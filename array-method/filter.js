// Membuat array of object
const users = [
  {
    name: "Jonas",
    age: 15,
  },
  {
    name: "Michael",
    age: 40,
  },
  {
    name: "Hannah",
    age: 35,
  },
];

/**
 * Menjalankan method filter.
 * Mencari semua data berdasarkan kondisi tertentu.
 * Kondisi: umur lebih dari 21
 */
const filteredUser = users.filter(function (user) {
  return user.age > 21;
});

console.log(filteredUser);
