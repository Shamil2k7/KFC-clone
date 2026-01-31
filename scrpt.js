const slider = document.getElementById("offer-scrolling-spacs");
const leftBtn = document.getElementById("leftBtn");
const rightBtn = document.getElementById("rightBtn");

rightBtn.addEventListener("click", () => {
    slider.scrollBy({
        left: 370,   // card width + gap
        behavior: "smooth"
    });
});

leftBtn.addEventListener("click", () => {
    slider.scrollBy({
        left: -370,
        behavior: "smooth"
    });
});


let checker = 0;

function legal() {
    const legal = document.getElementById("legal");

    checker++;

    if (checker === 1) {
        legal.style.display = "flex";
        legal.style.backgroundColor = "#171716";
        legal.style.padding = "10px";
    }

    if (checker === 2) {
        legal.style.display = "none";
        checker = 0;
    }
}

let checker1 = 0;
function india() {
    let india = document.getElementById("India-sub");
    checker1++

    if (window.innerWidth <= 768) {
        if (checker1 == 1) {
            india.style.display = "flex";
            // legal.style.backgroundColor = "#171716";
            india.style.padding = '10px';

        }
        if (checker1 == 2) {
            india.style.display = "none";
            checker1 = 0
        }
    } else {
        india.style.backgroundColor = "transparent";
    }

}
let checker2 = 0;
function foods() {
    let foods = document.getElementById("foods");
    checker2++

    if (window.innerWidth <= 768) {
        if (checker2 == 1) {
            foods.style.display = "flex";
            // legal.style.backgroundColor = "#171716";
            foods.style.padding = '10px';

        }
        if (checker2 == 2) {
            foods.style.display = "none";
            checker2 = 0
        }
    } else {
        foods.style.backgroundColor = "transparent";
    }

}
let checker3 = 0;
function support() {
    let support = document.getElementById("support1");
    checker3++

    if (window.innerWidth <= 768) {
        if (checker3 == 1) {
            support.style.display = "flex";
            // legal.style.backgroundColor = "#171716";
            support.style.padding = '10px';

        }
        if (checker3 == 2) {
            support.style.display = "none";
            checker3 = 0
        }
    } else {
        support.style.backgroundColor = "transparent";
    }

}
const openBtn = document.getElementById("show-mobil-nav");
const closeBtn = document.getElementById("close-mob-nav");
const mobNav = document.querySelector(".mob-nav");

openBtn.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
        mobNav.classList.add("active");
        document.body.classList.add("nav-open");
    }
});

closeBtn.addEventListener("click", () => {
    mobNav.classList.remove("active");
    document.body.classList.remove("nav-open");
});

let btnHide = document.getElementsByClassName("menu-hide-list")
let mobiNav = document.getElementById("mob-nav")
function btnHides() {
console.log(btnHide)

    console.log("first code")
    for (let index = 0; index < btnHide.length; index++) {
        mobiNav.style.display = 'flex'
        btnHide[index].style.display = 'none'
    }
}


const goTopBtn = document.getElementById("goTopBtn");

// show button after scroll
window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        goTopBtn.style.display = "block";
    } else {
        goTopBtn.style.display = "none";
    }
});

// go to top
goTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

function jj(params) {
    cn
}

  console.log("fff")