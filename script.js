/* When the user clicks on the button, 
  toggle between hiding and showing the dropdown-content. */
  function myFunction() {
    document.getElementById("myDropDown").classList.toggle("show");
  }
// Close the dropdown menu if user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content")
    var i;
    for (i=0; i<dropdowns.length; i++) {
      var openDropDown = dropdowns[i];
      if (openDropDown.classList.contains('show')) {
        openDropDown.classList.remove('show')
      }
    }
  }
}
