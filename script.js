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

// Button function // 

function myButton() {
  window.location.href = "https://grkis.github.io/Metrolinx/storymaps.html";
}

function SButton() {
  window.location.href = "https://storymaps.arcgis.com/stories/4361d4a3d1424b6f8e116a7d0c1d65b6";
}

function EButton() {
  window.location.href = "https://experience.arcgis.com/experience/2a10bd80f10f4fd9a3a12a705a87f144";
}

function OButton() {
  window.location.href = "https://fleming.maps.arcgis.com/apps/mapviewer/index.html?webmap=18527f59168945de8711e593ce8c2a81";
}
