function getData(url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.response);
        callback(null, response);
      } else {
        callback(xhr.status, null);
      }
    }
  };
  xhr.send();
}

getData("https://jsonplaceholder.typicode.com/users", function (err, res) {
  if (err) {
    throw new Error("err");
  }

  getData(
    `https://jsonplaceholder.typicode.com/posts/${res[0].id}`,
    function (err, res) {
      if (err) {
        throw new Error("err");
      }
      console.log(res);
    },
  );
});
