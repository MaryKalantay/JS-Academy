$(".list > li").click(function() {
  let rholderThis = $(this).find('.rholder').css("display", "block");
  let rholder = $(this).siblings().find('.rholder').css("display", "none");
});