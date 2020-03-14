$(document).ready(function(){
  $(".button").click(function(){
    let parentBtn = $(this).parent();
    let element = $(this).parent().toggleClass("opened").find(".element");

    if(parentBtn.hasClass( "opened" )) {
      element.css("background-color", "red");
    }
    else {
      element.css("background-color", "transparent");  
    }
  });
});

