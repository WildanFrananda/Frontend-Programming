const download = async () => {
  try {
    const results = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await results.json();
    console.log(users);
  } catch (error) {
    console.log(error);
  }
};

download();
