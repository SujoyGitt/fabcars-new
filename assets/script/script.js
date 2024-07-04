// header start here
document.querySelector(".bargar-menu").addEventListener("click", () => {
  document.querySelector("header nav .nav-bottom").classList.add("navactive");
});
document.querySelector(".close").addEventListener("click", () => {
  document
    .querySelector("header nav .nav-bottom")
    .classList.remove("navactive");
});
// header end here
// scroll top start here
window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    document.querySelector(".scroll-top").style.opacity = "1";
  } else {
    document.querySelector(".scroll-top").style.opacity = "0";
  }
});
// scroll top end here

window.onload = function () {
  const menuLinks = document.querySelectorAll(".nav-menu li a");
  const currentPath = window.location.pathname; // Get current page path
  for (const link of menuLinks) {
    const href = link.getAttribute("href");
    if (href && currentPath.endsWith(href)) {
      // Check if href matches current path
      link.parentElement.classList.add("active"); // Add active class to parent list item
      break; // Stop iterating once a match is found
    }
  }
};

// fleet carousel start here
$(".fleet-carousel").owlCarousel({
  loop: true,
  nav: true,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: false,
  navText: [
    "<i class='fa-solid fa-arrow-left'></i>",
    "<i class='fa-solid fa-arrow-right'></i>",
  ],
  responsive: {
    0: {
      items: 1.1,
    },
    600: {
      items: 1.2,
    },
    900: {
      items: 1.8,
    },
  },
});
// fleet carousel end here
// fleet main carousel start here
$(".fleet-main-carousel").owlCarousel({
  loop: true,
  nav: true,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: false,
  margin: 35,
  navText: [
    "<i class='fa-solid fa-arrow-left'></i>",
    "<i class='fa-solid fa-arrow-right'></i>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    700: {
      items: 2,
    },
  },
});
// fleet main carousel end here
// service carousel start here
$(".service-carousel").owlCarousel({
  loop: true,
  nav: true,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: false,
  rtl: true,
  navText: [
    "<i class='fa-solid fa-arrow-left'></i>",
    "<i class='fa-solid fa-arrow-right'></i>",
  ],
  responsive: {
    0: {
      items: 1.1,
    },
    600: {
      items: 1.2,
    },
    900: {
      items: 1.8,
    },
  },
});
// service carousel end here
// what we carousel start here
$(".what-we-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});
// what we carousel end here
// scroll trigger start here

if (window.innerWidth > 992) {
  let reveal = document.querySelectorAll("section");

  reveal.forEach((el) => {
    let headings = el.querySelectorAll("section");
    let btn = el.querySelectorAll(".line,.box,p,li,h2,h3,h4,h5");

    let tl = gsap
      .timeline()
      .from(headings, {
        xy: 80,
        stagger: 0.05,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })
      .from(
        btn,
        { x: -80, opacity: 0, duration: 1.3, ease: "power3.out" },
        "-=0.6"
      );

    ScrollTrigger.create({
      trigger: el,
      start: "center 130%",
      end: "top 50%",
      markers: false,
      toggleActions: "play none none reverse ",
      animation: tl,
    });
  });
} else {
  console.log("end scroll trigger");
}
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});

// cities searc functionality
const cityList = document.querySelector(".list-container");
const searchInput = document.getElementById("search");

// Show all cities by default
cityList.querySelectorAll("ul li").forEach((li) => {
  li.style.display ="";
});

searchInput.addEventListener("keyup", function () {
  const searchTerm = this.value.toLowerCase();
  const cityItems = cityList.querySelectorAll("ul li");
  
  cityItems.forEach((li) => {
    const cityName = li.textContent.toLowerCase();
    li.style.display = cityName.indexOf(searchTerm) !== -1 ? "" : "none";
    console.log(cityName.indexOf(searchTerm))
  });
});
