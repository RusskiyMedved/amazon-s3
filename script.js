$(document).ready(function () {

   $("#dog-button").click(function () {
      $("#content").text("Woof Woof Woof");
      $("#cat").hide();
      $("#dog").show();
   })

   $("#cat-button").click(function () {
      $("#content").text("Meow Meow Meow");
      $("#cat").show();
      $("#dog").hide();
   });

});