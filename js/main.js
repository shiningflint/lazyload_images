"use strict";
function LazyLoad(imgString) {
  var images = Array.prototype.slice.call(document.querySelectorAll(imgString));
  var imgsrc = images.map(function(image) {
    var cloned = image.cloneNode(image);
    image.src = "img/kit-kat.jpg";//temporary image(or gif)
    cloned.addEventListener("load", function(e) {
      image.src = e.target.src;
      image.classList.add("active");//class to trigger opacity animation
    }, false);
  });
}

LazyLoad(".lazyload");
