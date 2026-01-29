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