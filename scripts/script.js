"use strict";

const arrowTop = document.querySelector("#arrowTop");
console.log(arrowTop);
const originalDisplayValue = arrowTop.style.display;
arrowTop.style.display = "none";

arrowTop.addEventListener("click", () => {
  window.scrollTo(pageXOffset, 0);
})

window.addEventListener("scroll", () => {
  const scrolled = Math.max(document.documentElement.scrollTop, document.body.scrollTop);

  if ((document.documentElement.offsetHeight / 4) < scrolled) {
    arrowTop.style.display = originalDisplayValue;
  } else {
    arrowTop.style.display = "none";
  }
});
