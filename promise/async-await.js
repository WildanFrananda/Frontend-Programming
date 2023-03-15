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

/**
 * Membuat async await dengan arrow function.
 * async: memberitahu ada proses asynchronous.
 * await: menunggu proses asynchronous selesai.
 */
const main = async () => {
  try {
    console.log(await download());
    console.log(await verify());
    notify();
  } catch (error) {
    console.log(error);
  }
};

main();
