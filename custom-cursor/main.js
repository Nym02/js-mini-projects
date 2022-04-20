const outerCursor = document.querySelector(".cursor");
const innerCursor = document.querySelector(".inner-cursor");
const allLinks = Array.from(document.querySelectorAll("a"));

document.addEventListener("mousemove", (e) => {
  const x = e.clientX;
  const y = e.clientY;

  outerCursor.style.top = `${y - 15}px`;
  outerCursor.style.left = `${x - 15}px`;
  outerCursor.style.opacity = 1;

  innerCursor.style.top = `${y - 15}px`;
  innerCursor.style.left = `${x - 15}px`;
});

allLinks.forEach((link) => {
  link.addEventListener("mouseover", (e) => {
    innerCursor.classList.add("grow");
  });

  link.addEventListener("mouseleave", (e) => {
    innerCursor.classList.remove("grow");
  });
});
