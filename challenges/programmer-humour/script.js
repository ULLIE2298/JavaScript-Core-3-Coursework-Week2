fetch("https://xkcd.now.sh/?comic=latest")
.then(function (response) {
    return response.json();
})
.then(function (picture) {
    var body = document.querySelector("body")
    var img = document.createElement("img");
    img.src = picture.img;

    body.appendChild(img)
})
.catch(function () {
    alert("OOPS! Something Went Wrong!");
})
