var products = document.querySelectorAll('.prod');
var prod1 = document.querySelector('.prod-1');
var prod2 = document.querySelector('.prod-2');
var prod3 = document.querySelector('.prod-3');
var prod4 = document.querySelector('.prod-4');
var prod5 = document.querySelector('.prod-5');
var prod6 = document.querySelector('.prod-6');

prod1.addEventListener("mouseover", function( ) {   
    // highlight the mouseover target
    prod1.style.transition = ".7s";
    prod1.style.top ='-75%';


    // reset the color after a short delay
    setTimeout(function() {
        prod1.style.top ='-25%';
        
    }, 1500);
  }, false);
  
  prod2.addEventListener("mouseover", function( ) {   
    // highlight the mouseover target
    prod2.style.transition = ".7s";
    prod2.style.top ='-75%';

    // reset the color after a short delay
    setTimeout(function() {
        prod2.style.top ='-25%';

    }, 1200);
  }, false);

  prod3.addEventListener("mouseover", function( ) {   
    // highlight the mouseover target
    prod3.style.transition = ".7s";
    prod3.style.top ='-75%';

    // reset the color after a short delay
    setTimeout(function() {
        prod3.style.top ='-25%';

    }, 1200);
  }, false);

  prod4.addEventListener("mouseover", function( ) {   
    // highlight the mouseover target
    prod4.style.transition = ".7s";
    prod4.style.top ='-75%';

    // reset the color after a short delay
    setTimeout(function() {
        prod4.style.top ='-25%';

    }, 1200);
  }, false);

  prod5.addEventListener("mouseover", function( ) {   
    // highlight the mouseover target
    prod5.style.transition = ".7s";
    prod5.style.top ='-75%';

    // reset the color after a short delay
    setTimeout(function() {
        prod5.style.top ='-25%';

    }, 1200);
  }, false);

  prod6.addEventListener("mouseover", function( ) {   
    // highlight the mouseover target
    prod6.style.transition = ".7s";
    prod6.style.top ='-75%';

    // reset the color after a short delay
    setTimeout(function() {
        prod6.style.top ='-25%';

    }, 1200);
  }, false);







// var slide = document.querySelector('.slider');
// var leftArrow = document.querySelector('.left-arrow');
// var rightArrow = document.querySelector('.right-arrow');
// var dotContain = document.querySelector('.dot-contain');
// var currentDot = dotContain.querySelectorAll('.dot');
// var currentSlide = document.querySelector('.current-slide');
// var dot2 = document.getElementById('dot-2');
// var dLength = currentDot.length;
// var lCount = 0;
// var rCount = 0;
// var posIndex = 1;


// leftArrow.addEventListener('click', function () {
//     lCount += 1;

//     if(posIndex < dLength && posIndex != 1) {  
//         posIndex -= 1;
//         slide.src = '/img/slide-' + posIndex + '.jpg';
//         document.querySelector('#dot-' + posIndex).classList.toggle('current-dot');
//         document.querySelector('#dot-' + (posIndex+1)).classList.toggle('current-dot');
        
//     } else if (posIndex == dLength) {
//         document.querySelector('#dot-' + (dLength)).classList.toggle('current-dot');
//         document.querySelector('#dot-' + (posIndex)).classList.toggle('current-dot');
//         posIndex -= 1;
//         document.querySelector('#dot-' + (posIndex)).classList.toggle('current-dot');
//         document.querySelector('#dot-' + (dLength)).classList.toggle('current-dot');
//         slide.src = '/img/slide-' + posIndex + '.jpg';
//     } else if (posIndex == 1) {
//         posIndex = dLength
//         document.querySelector('#dot-' + (posIndex)).classList.toggle('current-dot');
//         slide.src = '/img/slide-' + posIndex + '.jpg';
//         document.querySelector('#dot-' + (1)).classList.toggle('current-dot');
//     }

 

//     slide.style.left = "2rem";
//     slide.style.transition = "1s";
//     slide.style.transform = "translateX(-2rem)";

//     slide.classList.toggle('current-slide');
  
// });

// console.log(currentDot);





// rightArrow.addEventListener('click', function () {

//     if(posIndex < dLength) {  
//         posIndex += 1;
//         slide.src = '/img/slide-' + posIndex + '.jpg';
//         document.querySelector('#dot-' + posIndex).classList.toggle('current-dot');
//         document.querySelector('#dot-' + (posIndex-1)).classList.toggle('current-dot');
        
//     } else if (posIndex == dLength) {
//         document.querySelector('#dot-' + (dLength)).classList.toggle('current-dot');
//         posIndex = 1;
//         document.querySelector('#dot-' + (posIndex)).classList.toggle('current-dot');
//         slide.src = '/img/slide-' + posIndex + '.jpg';

//     } 
 
// console.log(posIndex);
// console.log(dLength);
// });



