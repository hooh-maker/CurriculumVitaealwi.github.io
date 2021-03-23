var loading = document.getElementById("loading");
window.addEventListener('load', function () {
    loading.style.display = "none";
})

const hiasan = document.querySelector(".hiasan1")
const gambarku = document.querySelector("#gambarku")

const cv = new TimelineMax();

cv
.fromTo(gambarku, 1, { opacity: "0", x: "10%" }, { opacity: "1", x: "0.3%" }, "-=1")
.fromTo(hiasan, 1, { opacity: "0", x: "10%" }, { opacity: "1", x:"1%" })