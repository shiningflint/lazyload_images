"use strict";
function LazyLoad(imgString) {
  var images = Array.prototype.slice.call(document.querySelectorAll(imgString));
  var imgsrc = images.map(function(image) {
    var cloned = image.cloneNode(image);
    image.src = "img/kit-kat.jpg";
    cloned.addEventListener("load", function(e) {
      image.src = e.target.src;
      image.classList.add("active");
      console.log(image);
    }, false);
  });
}

LazyLoad(".lazyload");
