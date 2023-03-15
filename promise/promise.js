function download() {
  /**
   * Promise dibuat menggunakan class Promise.
   * Promise menerima callback/executor.
   * Executor menerima 2 params: resolve, reject.
   * resolve untuk mengembalikan promise berhasil.
   * reject untuk mengembalikan promise gagal.
   */
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Downloading...");
    }, 3000);
  });
}

function verify() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Verify file...");
    }, 2000);
  });
}

function notify() {
  console.log("Download complete");
}

const main = () => {
  download()
    .then((results) => {
      console.log(results);
      return verify();
    })
    .then((results) => {
      console.log(results);
      notify();
    })
    .catch((error) => {
      console.log(error);
    });
};

main();
