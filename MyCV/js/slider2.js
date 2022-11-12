
let slideIndex2 = 1;
showSlides2(slideIndex2);

function plusSlides2(n) {
  showSlides2(slideIndex2 += n);
}

function currentSlide2(n) {
  showSlides2(slideIndex2 = n);
}

function showSlides2(n) {
  let y;
  let slides = document.getElementsByClassName("mySlides2");
  if (n > slides.length) {slideIndex2 = 1}    
  if (n < 1) {slideIndex2 = slides.length}
  for (y = 0; y < slides.length; y++) {
    slides[y].style.display = "none";  
  }
  slides[slideIndex2-1].style.display = "block";  
}