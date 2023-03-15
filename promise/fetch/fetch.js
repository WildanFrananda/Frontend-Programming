const download = () => {
  /**
   * Menjalankan fungsi fetch.
   * Fetch menerima parameter url dari API.
   * Fetch dibangun di atas promise.
   */
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((results) => {
      return results.json();
    })
    .then((results) => {
      console.log(results);
    })
    .catch((error) => {
      console.log(error);
    });
};

download();
