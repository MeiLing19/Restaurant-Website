// Mengaktifkan toggle dulu
const navbarNav = document.querySelector(".navbar-nav");

// Ketika menu di klik
document.querySelector("#menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//Ketika search di klik
document.querySelector("#search").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik sembarang langsung hilang
const menu = document.querySelector("#menu");
document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

/* Fungsi untuk search box */
function searchFunction() {
  var x = document.querySelector(".search-box");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

/* Fungsi untuk search box */
function cartFunction() {
  var x = document.querySelector(".cart-box");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
