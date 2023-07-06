var currentIndex = 0;
var divs = document.getElementsByClassName("text-image-container");

function toggleNextDiv() {
  divs[currentIndex].classList.remove("visible");
  divs[currentIndex].classList.add("hidden");

  currentIndex = (currentIndex + 1) % divs.length;

  divs[currentIndex].classList.remove("hidden");
  divs[currentIndex].classList.add("visible");
}

function togglePrevDiv() {
  divs[currentIndex].classList.remove("visible");
  divs[currentIndex].classList.add("hidden");

  currentIndex = (currentIndex - 1 + divs.length) % divs.length;

  divs[currentIndex].classList.remove("hidden");
  divs[currentIndex].classList.add("visible");
}
