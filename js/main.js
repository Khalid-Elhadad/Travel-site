let searchBtn = document.querySelector("#search-btn");
let showForm = document.querySelector(".search-form");
let formLogin = document.querySelector(".login-form");
let menuBar = document.getElementById("menu-bar");
let aMenu = document.querySelector(".nav-bar");
let vidBtn = document.querySelectorAll(".video-btn");
function showBar() {
  searchBtn.classList.toggle("fa-times");
  showForm.classList.toggle("active");
}
function hideForm() {
  formLogin.classList.add("active");
}
function closeForm() {
  formLogin.classList.remove("active");
}

function showMenu() {
  menuBar.classList.toggle("fa-times");
  aMenu.classList.toggle("active");
}

vidBtn.forEach((slide) => {
  slide.addEventListener("click", function () {
    document.querySelector(".controls .blue").classList.remove("blue");
    slide.classList.add("blue");
    let src = slide.getAttribute("data-src");
    document.querySelector("#video-slider").src = src;
  });
});

var swiper = new Swiper("#review-slider", {
  spaceBetween:20,
  loop:true,
  autoplay: {
    delay: 2500
  },

  breakPoints: {
    640: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3

    },
  }
});
