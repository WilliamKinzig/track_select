$(document).ready(function() {
  $("form#beep").submit(function(event) {
    event.preventDefault();
    var year = parseInt($("input#userNumberInput").val());
    var result = year;
    $("#result").text(result);
  });
});




// https://www.learnhowtoprogram.com/intro-to-programming/javascript-and-jquery-c950c9ce-679c-4678-ab1f-11881b766e22/jquery-add-remove-classes
// jQuery: Add & Remove Classes
    // three buttons
    
