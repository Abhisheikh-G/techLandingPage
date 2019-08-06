M.AutoInit();

const sideNav = document.querySelector(".sidenav");
M.Sidenav.init(sideNav, {});

const carousel = document.querySelector(".carousel.carousel-slider");
M.Carousel.init(carousel, { fullWidth: true });

const items = document.querySelectorAll(".slide-in");
const nav = document.getElementsByTagName("nav")[0];

const isInViewport = el => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

const run = () =>
  items.forEach(item => {
    if (isInViewport(item)) {
      item.classList.add("show");
    } else {
      item.classList.remove("show");
    }
  });

window.addEventListener("load", run);
window.addEventListener("resize", run);
window.addEventListener("scroll", run);

function runOnScroll() {
  const height = document.querySelector(".showcase").offsetHeight;

  if (document.documentElement.scrollTop >= height) {
    nav.classList.add("deep-purple");
    nav.classList.remove("transparent");
  } else {
    nav.classList.add("transparent");
    nav.classList.remove("deep-purple");
  }
}
window.addEventListener("scroll", runOnScroll);
