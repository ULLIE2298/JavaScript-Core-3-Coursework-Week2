fetch("https://dog.ceo/api/breeds/image/random")
  .then(function (response) {
    return response.json();
  })
  .then(function (image) {
    // Write the code to display the greeting text here
    var ul = document.getElementById("ul");
    var li = document.createElement("li");
    var img = document.createElement("img");
    img.src = image.message;

    ul.appendChild(li);
    li.appendChild(img);
  })
  .catch(function () {
    alert("Something Went Wrong")
  });
