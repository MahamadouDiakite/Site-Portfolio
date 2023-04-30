let header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let navlinks = document.querySelectorAll("a.nav-link");
for(let links = 0; links < navlinks.length; links++) {
navlinks[links].addEventListener('click', function () {
  for (let out = 0; out < navlinks.length; out++){
    navlinks[out].classList.remove("active");;
  }
  this.classList.add("active");
});
  }
window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

menu.onclick = () => {
  navbar.classList.toggle("active");
};
window.onscroll = () => {
  navbar.classList.remove("active");
};

// Dark Mode / light mode
let darkmode = document.querySelector("#darkmode");

darkmode.onclick = () => {
  if (darkmode.classList.contains("bx-moon")) {
    darkmode.classList.replace("bx-moon", "bx-sun");
    document.body.classList.add("active");
  } else {
    darkmode.classList.replace("bx-sun", "bx-moon");
    document.body.classList.remove("active");
  }
};
function afficherPleinEcran(element) {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen(); 
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen();
  }
}
