window.onload = init;
function init() {
  var images = document.getElementsByTagName("img");
  for (var i = 0; i < images.length; i++) {
    images[i].onclick = showAnswer;
  }

  function showAnswer(obj) {
    var image = obj.target;
    var name = image.id;
    name = "image/" + name + ".jpg";
    image.src = name;
  }
}
