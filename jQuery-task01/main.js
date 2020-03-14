$(document).ready(function(){
  $(".button").click(function(){
    $(this).parent().toggleClass("opened").find(".element").css("background-color", "red");
  });
});
