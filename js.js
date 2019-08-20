$( document ).ready(function() {
    console.log( "Im loaded! Yaaaaaay!" );
});

var submit = document.getElementsByClassName('btn');

function validationForm() {
	 var x = document.forms["myForm"]["EMail"].value;
  if (x == "") {
    alert("Fyll i korrekt emailadress");
    return false;
  }
  	 var y = document.forms["myForm"]["Name"].value;
  if (y == "") {
    alert("Fyll i ditt namn");
    return false;
  }
	return alert("Ditt meddelande kommer skickas!");
};



/* SLIDESHOW */

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
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
  captionText.innerHTML = dots[slideIndex-1].alt;
}



var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1} 
  slides[slideIndex-1].style.display = "block"; 
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}


/* -------- MOBILE VERSION GALLERY ------------- */

if (window.matchMedia('screen and (max-width: 480px)').matches) {
    // it matches
    alert("The photo gallery won't play on mobile");
} 