let slider = document.querySelector('.slider-container');
let sliderInd = document.querySelectorAll('.slider-test');
let contador = 1;
let tamanoWidth = sliderInd[0].clientWidth;
let intervalo = 2000;

window.addEventListener("resize", () => {
    tamanoWidth = sliderInd[0].clientWidth
});

setInterval(function tiempo() {
    slides()
});

function slides () {
        slider.style.transform = ''
}