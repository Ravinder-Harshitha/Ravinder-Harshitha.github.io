//Appearing text
var i = 0;
var txt = '" Yoga takes you into the present moment, \nthe only place where life exists. " \n- Patanjali'
var speed = 50;

function typeWriter() {
if (i < txt.length) {
    if (txt.charAt(i) === '\n') {
    document.getElementById("demo").innerHTML += '<br>';
    } else {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    }
    i++;
    setTimeout(typeWriter, speed);
}
}
window.onload = typeWriter;

// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

function myFunction() {
var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
var scrolled = (winScroll / height) * 100;
document.getElementById("myBar").style.width = scrolled + "%";
}

//Testimonials slideshow
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

//Reveal Function
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
      } else {
      reveals[i].classList.remove("active");
      }
  }
  }

  window.addEventListener("scroll", reveal);