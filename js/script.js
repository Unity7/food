const icons = document.querySelectorAll(".section-1-icons i");

let iconCount = 1;

setInterval(() => {
  iconCount++;
  const icon = document.querySelector(".section-1-icons .change");
  icon.classList.remove("change");

  if (iconCount > icons.length) {
    icons[0].classList.add("change");
    iconCount = 1;
  } else {
    icon.nextElementSibling.classList.add("change");
  }
}, 1000);
