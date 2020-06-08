let slides = document.getElementsByClassName("slides");
const displayed = document.getElementsByClassName("displayed");
const slideShow = document.getElementById("slideshow");
const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");
let n = 0;

// console.log(slides.length);

function displaySlide(n) {
    let img = document.createElement('img');
    img.setAttribute("src", slides[n].attributes.src.value);
    img.classList.add("displayed");
    slideShow.appendChild(img);
}

function deleteSlide() {
    Array.from(displayed).forEach(element => {
        element.remove();
    });
}

function currentSlide(n) {
    deleteSlide();
    displaySlide(n);
}

function nextSlide() {
    ++n;
    if (n === slides.length) {
        n = 0;
        deleteSlide();
        displaySlide(n);
    } else {
        deleteSlide();
        displaySlide(n)
    }
}

function prevSlide() {
    --n;
    if (n < 0) {
        n = slides.length - 1;
        deleteSlide();
        displaySlide(n);
    } else {
        deleteSlide();
        displaySlide(n);
    }
}

displaySlide(n);