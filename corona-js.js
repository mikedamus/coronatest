// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("btnYes");

// Get the button that opens the modal
var btn2 = document.getElementById("btnNo");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
  //edit this code to enable the video to play
}

// When the user clicks the button, open the modal 
btn2.onclick = function() {
  modal.style.display = "block";
  //edit this code to enable the video to play  
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
