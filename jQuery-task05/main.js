jQuery(function() {
	init();
});

function init() {
	$(document).keydown(function(e){
		console.log(e);
		
		if(e.keyCode == 37) {
			tank.css('background', 'red');
			tank.animate({
		left: "-=10px"
	  }, 'fast');
		}

		else if (e.keyCode == 39) {
			tank.css('background', 'blue');
			tank.animate({
		left: "+=10px"
	  }, 'fast');
		}

		else if (e.keyCode == 38) {
			tank.css('background', 'green');
			tank.animate({
		top: "-=10px"
	  }, 'fast');
		}

		else if (e.keyCode == 40) {
			tank.css('background', 'brown');
			tank.animate({
		top: "+=10px"
	  }, 'fast');
		}
	});

	let tank = $(".box");

	$('div.box-holder').mousedown(function(e){
		tank.css('left', e.pageX);
		tank.css('top', e.pageY);
		tank.css('transform', 'translate(-120px, 0%)')
	});
}