/**
 * Spread operator: Memisahkan array menjadi nilai tersendiri.
 * Kegunaan: Copy dan merge array ke variable baru.
 */
const families = ["Mikel", "Hannah"];

const newFamilies = [...families, "Jonas", "Martha"];

console.log(newFamilies);

/**
 * Spread operator: Memisahkan object menjadi nilai tersendiri.
 * Kegunaan: Copy dan Merge object ke variable baru.
 */

const user = {
  name: "Aufa",
  major: "Informatics",
};

const newUser = {
  ...user,
  age: 22,
};

console.log(newUser);
