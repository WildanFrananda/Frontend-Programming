function download(callVerify) {
  setTimeout(() => {
    console.log("Downloading...");

    callVerify();
  }, 3000);
}

function verify(callNotify) {
  setTimeout(() => {
    console.log("Verify file...");

    callNotify();
  }, 2000);
}

function notify() {
  console.log("Download complete");
}

const main = () => {
  download(function () {
    verify(function () {
      notify();
    });
  });
};

main();
