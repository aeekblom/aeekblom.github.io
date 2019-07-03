$( document ).ready(function() {
    console.log( "Im loaded! Yaaaaaay!" );
});


window.onscroll = function() {stickyScroll()};

var header = document.getElementById("main-nav");
var sticky = header.offsetTop;

function stickyScroll() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}