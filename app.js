document.addEventListener("DOMContentLoaded", function () {
  const lift = document.querySelector(".lift");
  const buttons = document.querySelectorAll("button");

  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      const targetFloor = index;
      lift.style.transform = `translateY(${targetFloor * -25}vh)`;
    });
  });
});
