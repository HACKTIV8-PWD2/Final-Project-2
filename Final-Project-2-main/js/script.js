const navbar = document.getElementById("navbar");

const onScroll = () => {
  const scroll = document.documentElement.scrollTop;
  if (scroll > 0) {
    navbar.classList.add("active");
    navbar.classList.add("fixed-top");
    navbar.classList.add("shadow");
  } else {
    navbar.classList.remove("active");
    navbar.classList.remove("fixed-top");
    navbar.classList.remove("shadow");
  }
};

window.addEventListener("scroll", onScroll);
