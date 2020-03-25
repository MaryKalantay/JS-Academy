jQuery(function() {
	init();
});

function init() {
	let tooltip = $('<div id="tooltip">');
	tooltip.appendTo('body');
	let links = $('a');

	jQuery.each( links, function( i, val ) {
		if( $(this).attr( "title") ) {

			let atribute = $(this).attr( "title");
			console.log(atribute);

			$(this).removeAttr( "title" );
			$(this).mouseenter(function() {
				tooltip.text(atribute).css("display", "inline-block");
				console.log(tooltip);
			});

			$("body").mousemove(function( event ) {
				let pageX = event.pageX.toString() + "px";
				let pageY = event.pageY.toString() + "px";
		
				tooltip.css( "left", pageX);
				tooltip.css("top", pageY);
				tooltip.css("margin-left", "10px");
			});
			 
			$("body").mouseleave(function() {
				tooltip.css("display", "none");	
			});
		}
	});
}