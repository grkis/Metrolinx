// Script.js //
// Authors: Will Inglis, Grace Kim, Esther Kim //
// Date Created: Apr 01, 2023 // Last Modified: April 13th, 2023 //
// GEOM99 Group Project - Metrolinx //

// Scroll functionality // 
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
