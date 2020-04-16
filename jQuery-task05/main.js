jQuery(function() {
	init();
});

function init() {
	$(document).keydown(function(e){
		console.log(e);

		let topTank = 0;
		let  leftTank = 0;
		let rightTank = 0;
		let bottomTank = 0;
		
		if(e.keyCode == 37) {
			tank.css('background', 'red');
			leftTank++;
			let leftPos = leftTank.toString() + "px";
			console.log(leftPos);
			tank.css('left', leftPos);
		}

		else if (e.keyCode == 39) {
			tank.css('background', 'blue');
		}

		else if (e.keyCode == 38) {
			tank.css('background', 'green');
		}

		else if (e.keyCode == 40) {
			tank.css('background', 'brown');
		}
	});

	let tank = $(".box");

	$('div.box-holder').mousedown(function(e){
		tank.css('left', e.pageX);
		tank.css('top', e.pageY);
		tank.css('transform', 'translate(-120px, 0%)')
	});


}