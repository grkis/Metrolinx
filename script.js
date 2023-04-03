/* script.js*/

/* Reused asset from A3Web Assignment - scroll functionality */ 
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document //
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

/* Reused asset from A3Web Assignment - button function */ 

function myButton() {
  window.location.href = "https://grkis.github.io/Metrolinx/storymaps.html";
}

function SButton() {
  window.location.href = "https://grkis.github.io/Metrolinx/storymaps.html";
}

function DButton() {
  window.location.href = "https://grkis.github.io/Metrolinx/dashboards.html";
}

function EButton() {
  window.location.href = "https://grkis.github.io/Metrolinx/experiencebuilder.html";
}

function OButton() {
  window.location.href = "https://grkis.github.io/Metrolinx/other.html";
}
