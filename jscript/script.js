var slide = document.querySelector('.slider');
var leftArrow = document.querySelector('.left-arrow');
var rightArrow = document.querySelector('.right-arrow');
var dotContain = document.querySelector('.dot-contain');
var currentDot = dotContain.querySelectorAll('.dot');
var currentSlide = document.querySelector('.current-slide');
var dot2 = document.getElementById('dot-2');
var dLength = currentDot.length;
var lCount = 0;
var rCount = 0;
var posArray = [];
var posIndex = 1;


leftArrow.addEventListener('click', function () {
    lCount += 1;

    if(posIndex < dLength && posIndex != 1) {  
        posIndex -= 1;
        slide.src = './img/slide-' + posIndex + '.JPG';
        document.querySelector('#dot-' + posIndex).classList.toggle('current-dot');
        document.querySelector('#dot-' + (posIndex+1)).classList.toggle('current-dot');
        
    } else if (posIndex == dLength) {
        document.querySelector('#dot-' + (dLength)).classList.toggle('current-dot');
        document.querySelector('#dot-' + (posIndex)).classList.toggle('current-dot');
        posIndex -= 1;
        document.querySelector('#dot-' + (posIndex)).classList.toggle('current-dot');
        document.querySelector('#dot-' + (dLength)).classList.toggle('current-dot');
        slide.src = './img/slide-' + posIndex + '.JPG';
    } else if (posIndex == 1) {
        posIndex = dLength
        document.querySelector('#dot-' + (posIndex)).classList.toggle('current-dot');
        slide.src = './img/slide-' + posIndex + '.JPG';
        document.querySelector('#dot-' + (1)).classList.toggle('current-dot');
    }

    lReset();

    slide.style.left = "2rem";
    slide.style.transition = "1s";
    slide.style.transform = "translateX(-2rem)";

    slide.classList.toggle('current-slide');
  
});

console.log(currentDot);





rightArrow.addEventListener('click', function () {

    if(posIndex < dLength) {  
        posIndex += 1;
        slide.src = './img/slide-' + posIndex + '.JPG';
        document.querySelector('#dot-' + posIndex).classList.toggle('current-dot');
        document.querySelector('#dot-' + (posIndex-1)).classList.toggle('current-dot');
        
    } else if (posIndex == dLength) {
        document.querySelector('#dot-' + (dLength)).classList.toggle('current-dot');
        posIndex = 1;
        document.querySelector('#dot-' + (posIndex)).classList.toggle('current-dot');
        slide.src = './img/slide-' + posIndex + '.JPG';

    } 
 
console.log(posIndex);
console.log(dLength);
});



