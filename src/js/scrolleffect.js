const scrollbox = document.querySelectorAll(".scroll_animation");
const scrollbox2 = document.querySelectorAll(".scroll_animation_2");

window.addEventListener("scroll", animation);

function animation() {
  const triggerBottom = window.innerHeight;

  scrollbox.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    const boxBottom = box.getBoundingClientRect().bottom;
    const boxHeight = box.getBoundingClientRect().height;
    console.log({ box, boxTop });

    if (boxTop < triggerBottom && boxTop > -boxHeight) {
      console.log("animation start");
      box.classList.add("scoot_in");
    }
    if (boxBottom < 100 || boxTop > triggerBottom) {
      console.log("animation fjern");
      //   box.classList.remove("scoot_in");
    }
  });
  scrollbox2.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    const boxBottom = box.getBoundingClientRect().bottom;
    const boxHeight = box.getBoundingClientRect().height;
    console.log({ box, boxTop });

    if (boxTop < triggerBottom && boxTop > -boxHeight) {
      console.log("animation start");
      box.classList.add("scoot_in_2");
    }
    if (boxBottom < 100 || boxTop > triggerBottom) {
      console.log("animation fjern");
      //   box.classList.remove("scoot_in_2");
    }
  });
}
