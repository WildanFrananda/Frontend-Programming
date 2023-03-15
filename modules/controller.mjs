// Import data users dari file data.mjs
import users from "./data.mjs";

/**
 * Membuat User Controller.
 * Terdapat method index dan store.
 */
const index = () => {
  console.log("Index - Get All Users");
  users.forEach(function (user) {
    console.log(user);
  });
};
const store = (user) => {
  users.push(user);
};

/**
 * Export beberapa data.
 * Data disimpan di dalam object.
 */
export { index, store };
