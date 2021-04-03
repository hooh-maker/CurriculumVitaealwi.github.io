let loading = document.getElementById("loading");
window.addEventListener('load', function () {
    loading.style.display = "none";

})

function scrollBidang() {
    var bidangIki = document.querySelector('.bidang');
    var posisiStart = bidangIki.getBoundingClientRect().top;
    var screenPosition = window.innerHeight;

    if (posisiStart < screenPosition){
        bidangIki.classList.add('bidang_active')
    } else {
        bidangIki.classList.remove('bidang_active');
    }
}

//animasi scroll to bidang2

function scrollBidang2() {
    var bidangIki2 = document.querySelector('.bidang2');
    var posisiStart2 = bidangIki2.getBoundingClientRect().top;
    var screenPosition2 = window.innerHeight;

    if (posisiStart2 < screenPosition2) {
        bidangIki2.classList.add('bidang2_active')
    } else {
        bidangIki2.classList.remove('bidang2_active');
    }
}

// animasi scroll background about

function aboutBg() {
    const bgAbout = document.querySelector('.tentang_kanan');
    const posisiBg = bgAbout.getBoundingClientRect().top;
    const screenBg = window.innerHeight;

    if (posisiBg < screenBg) {
        bgAbout.classList.add('isi-active');
    } else {
        bgAbout.classList.remove('isi-active');
    }
}

window.addEventListener('scroll', scrollBidang2);
window.addEventListener('scroll', scrollBidang);
window.addEventListener('scroll', aboutBg);


