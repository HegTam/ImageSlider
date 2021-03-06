let slides = document.getElementsByClassName("slides");
const displayed = document.getElementsByClassName("displayed");
const imgText = document.getElementsByClassName("img-text");
const slideShow = document.getElementById("slideshow");
const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");
let n = 0;

function displaySlide(n) {
    displayImg();
    displayText();
}

function displayImg() {
    let img = document.createElement('img');
    img.setAttribute("src", slides[n].attributes.src.value);
    img.classList.add("displayed");
    slideShow.appendChild(img);
}

function displayText() {
    imgText[n].classList.remove("hidden");
    imgText[n].style.bottom = Math.floor(document.querySelector('.displayed').y) + "px";
    imgText[n].style.width = document.querySelector('.displayed').width + "px";
}

function deleteSlide() {
    Array.from(displayed).forEach(element => {
        element.remove();
    });
    Array.from(imgText).forEach(element => {
        if (element.classList.contains("hidden") == false) {
           element.classList.add("hidden");
        }
    });
}

function currentSlide(image) {
    n = image;
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

window.addEventListener('load', () => {
    displaySlide(n);
});

document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
        prevSlide();
    } else if (event.key === "ArrowRight") {
        nextSlide();
    }
});

window.addEventListener('resize', () => {
    displayText();
});
