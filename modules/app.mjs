/**
 * Import User Controller dari file controller.mjs
 * Melakukan teknik destructing untuk extrak object hasil import.
 */
import { index, store } from "./controller.mjs";

const main = () => {
  const user = { name: "Martha", age: 22 };

  index();
  store(user);
  index();
};

main();
